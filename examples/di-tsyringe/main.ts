#!/usr/bin/env gjs -m

// GObject + TSyringe DI Constructor Injection Example
// Combines GObject properties/signals with automatic dependency resolution

import "@abraham/reflection";

import Gio from "gi://Gio";
import GObject from "gi://GObject";
import { container, inject, injectable } from "tsyringe";

// GObject-based Logger with properties and constructor injection
@injectable()
class GObjectLogger extends GObject.Object {
	static {
		GObject.registerClass(
			{
				GTypeName: "GObjectLogger",
				Properties: {
					logCount: GObject.ParamSpec.int("log-count", null, null, GObject.ParamFlags.READABLE, 0, 1000000, 0),
					prefix: GObject.ParamSpec.string("prefix", null, null, GObject.ParamFlags.READWRITE, "[LOG]"),
				},
			},
			GObjectLogger,
		);
	}

	private _logCount = 0;
	private _prefix = "[LOG]";

	get logCount() {
		return this._logCount;
	}
	get prefix() {
		return this._prefix;
	}
	set prefix(value: string) {
		this._prefix = value;
		this.notify("prefix");
	}

	log(msg: string): void {
		console.log(`${this._prefix} ${msg}`);
		this._logCount++;
		this.notify("log-count");
	}
}

// GObject-based Database with constructor injection
@injectable()
class GObjectDatabase extends GObject.Object {
	static {
		GObject.registerClass(
			{
				GTypeName: "GObjectDatabase",
				Properties: {
					connectionStatus: GObject.ParamSpec.string(
						"connection-status",
						null,
						null,
						GObject.ParamFlags.READABLE,
						"disconnected",
					),
				},
			},
			GObjectDatabase,
		);
	}

	constructor(@inject(GObjectLogger) private logger: GObjectLogger) {
		super();
		this.logger.log("Database connected");
	}

	get connectionStatus() {
		return "connected"; // Always connected for this example
	}

	save(data: string): void {
		this.logger.log(`Saving to database: ${data}`);
		this.logger.log("Database save completed");
	}
}

// GObject-based Email service with constructor injection
@injectable()
class GObjectEmail extends GObject.Object {
	static {
		GObject.registerClass(
			{
				GTypeName: "GObjectEmail",
				Properties: {
					smtpHost: GObject.ParamSpec.string("smtp-host", null, null, GObject.ParamFlags.READWRITE, "localhost"),
					emailsSent: GObject.ParamSpec.int("emails-sent", null, null, GObject.ParamFlags.READABLE, 0, 1000000, 0),
				},
			},
			GObjectEmail,
		);
	}

	private _smtpHost = "localhost";
	private _emailsSent = 0;

	constructor(@inject(GObjectLogger) private logger: GObjectLogger) {
		super();
		this.logger.log("Email service initialized");
	}

	get smtpHost() {
		return this._smtpHost;
	}
	set smtpHost(value: string) {
		this._smtpHost = value;
		this.notify("smtp-host");
	}
	get emailsSent() {
		return this._emailsSent;
	}

	send(to: string, message: string): void {
		this.logger.log(`Sending email to ${to} via ${this._smtpHost}: ${message}`);
		this._emailsSent++;
		this.notify("emails-sent");
		this.logger.log("Email sent successfully");
	}
}

// GObject-based User service with multiple constructor dependencies
@injectable()
class GObjectUserService extends GObject.Object {
	static {
		GObject.registerClass(
			{
				GTypeName: "GObjectUserService",
				Properties: {
					usersCreated: GObject.ParamSpec.int("users-created", null, null, GObject.ParamFlags.READABLE, 0, 1000000, 0),
				},
			},
			GObjectUserService,
		);
	}

	private _usersCreated = 0;

	constructor(
		@inject(GObjectLogger) public readonly logger: GObjectLogger,
		@inject(GObjectDatabase) public readonly database: GObjectDatabase,
		@inject(GObjectEmail) public readonly email: GObjectEmail,
	) {
		super();
		this.logger.log("User service initialized with all dependencies");
	}

	get usersCreated() {
		return this._usersCreated;
	}

	createUser(name: string, email: string): string {
		const userId = `user_${Date.now()}`;
		const userData = `${userId}:${name}:${email}`;

		this.logger.log(`Creating user: ${name}`);
		this.database.save(userData);
		this.email.send(email, `Welcome ${name}! Your ID is ${userId}`);
		this.logger.log(`User created: ${userId}`);

		this._usersCreated++;
		this.notify("users-created");

		return userId;
	}
}

// GObject-based Application service
@injectable()
class GObjectApp extends Gio.Application {
	static {
		GObject.registerClass(
			{
				GTypeName: "GObjectApp",
				Properties: {
					appName: GObject.ParamSpec.string(
						"app-name",
						null,
						null,
						GObject.ParamFlags.READWRITE,
						"User Management App",
					),
				},
				Signals: {
					"user-processed": {
						param_types: [GObject.TYPE_STRING, GObject.TYPE_STRING],
					},
				},
			},
			GObjectApp,
		);
	}

	private _appName = "User Management App";

	constructor(
		@inject(GObjectUserService) public readonly userService: GObjectUserService,
		@inject(GObjectLogger) public readonly logger: GObjectLogger,
	) {
		super({
			application_id: "com.example.UserManagementApp",
			flags: Gio.ApplicationFlags.HANDLES_COMMAND_LINE,
		});
		this.logger.log(`${this._appName} started`);

		// Connect to GObject signal
		this.connect("user-processed", (_obj, userName, userId) => {
			console.log(`🎉 GObject signal received: User ${userName} created with ID ${userId}`);
		});
	}

	override vfunc_command_line(commandLine: Gio.ApplicationCommandLine): number {
		const args = commandLine.get_arguments();
		const name = args[1];
		const email = args[2];
		this.processNewUser(name, email);
		return 0;
	}

	get appName() {
		return this._appName;
	}
	set appName(value: string) {
		this._appName = value;
		this.notify("app-name");
	}

	processNewUser(name: string, email: string): void {
		this.logger.log(`Processing new user: ${name} in ${this._appName}`);
		const userId = this.userService.createUser(name, email);
		this.logger.log(`User ${name} processed successfully with ID: ${userId}`);

		// Emit GObject signal
		this.emit("user-processed", name, userId);
	}
}

// All GObject services automatically resolved with their dependencies!
const app = container.resolve(GObjectApp);

app
	.runAsync(ARGV)
	.then((exitStatus: number) => {
		// Show GObject properties after processing
		console.log(`📊 Logger count: ${app.logger.logCount}`);
		console.log(`📧 Emails sent: ${app.userService.email.emailsSent}`);
		console.log(`👥 Users created: ${app.userService.usersCreated}`);
		console.log(`👉 Exited with status: ${exitStatus}`);
	})
	.catch((error: unknown) => {
		console.error(error);
	});
