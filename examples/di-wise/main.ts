#!/usr/bin/env gjs -m

// di-wise DI Constructor Injection Example
// Combines dependency injection with service-oriented architecture

import { createContainer, Injectable, inject, Type } from "di-wise";

// Service interfaces
interface Logger {
	log(msg: string): void;
	getLogCount(): number;
	setPrefix(prefix: string): void;
}

interface Database {
	save(data: string): void;
	getAllData(): string[];
}

interface EmailSender {
	send(to: string, message: string): void;
	setSmtpHost(host: string): void;
	getEmailsSent(): number;
}

interface UserService {
	createUser(name: string, email: string): string;
	getUsersCreated(): number;
}

// Service tokens for type-safe injection
const Logger = Type<Logger>("Logger");
const Database = Type<Database>("Database");
const EmailSender = Type<EmailSender>("EmailSender");
const UserService = Type<UserService>("UserService");

// Logger service with constructor injection
@Injectable()
class ConsoleLogger implements Logger {
	private logCount = 0;
	private prefix = "[LOG]";

	log(msg: string): void {
		console.log(`${this.prefix} ${msg}`);
		this.logCount++;
	}

	getLogCount(): number {
		return this.logCount;
	}

	setPrefix(prefix: string): void {
		this.prefix = prefix;
	}
}

// Database service with constructor injection
@Injectable()
class InMemoryDatabase implements Database {
	private data: string[] = [];

	constructor(private logger = inject(Logger)) {
		this.logger.log("Database connected");
	}

	save(data: string): void {
		this.data.push(data);
		this.logger.log(`Saving to database: ${data}`);
		this.logger.log("Database save completed");
	}

	getAllData(): string[] {
		return [...this.data];
	}
}

// Email service with constructor injection
@Injectable()
class ConsoleEmailSender implements EmailSender {
	private smtpHost = "localhost";
	private emailsSent = 0;

	constructor(private logger = inject(Logger)) {
		this.logger.log("Email service initialized");
	}

	setSmtpHost(host: string): void {
		this.smtpHost = host;
	}

	getEmailsSent(): number {
		return this.emailsSent;
	}

	send(to: string, message: string): void {
		this.logger.log(`Sending email to ${to} via ${this.smtpHost}: ${message}`);
		this.emailsSent++;
		this.logger.log("Email sent successfully");
	}
}

// User service with multiple constructor dependencies
@Injectable()
class UserManagementService implements UserService {
	private usersCreated = 0;

	constructor(
		public readonly logger = inject(Logger),
		public readonly database = inject(Database),
		public readonly email = inject(EmailSender),
	) {
		this.logger.log("User service initialized with all dependencies");
	}

	getUsersCreated(): number {
		return this.usersCreated;
	}

	createUser(name: string, email: string): string {
		const userId = `user_${Date.now()}`;
		const userData = `${userId}:${name}:${email}`;

		this.logger.log(`Creating user: ${name}`);
		this.database.save(userData);
		this.email.send(email, `Welcome ${name}! Your ID is ${userId}`);
		this.logger.log(`User created: ${userId}`);

		this.usersCreated++;

		return userId;
	}
}

// Application service
@Injectable()
class Application {
	private appName = "User Management App";

	constructor(
		public readonly userService = inject(UserService),
		public readonly logger = inject(Logger),
	) {
		this.logger.log(`${this.appName} started`);
	}

	setAppName(name: string): void {
		this.appName = name;
	}

	processNewUser(name: string, email: string): string {
		this.logger.log(`Processing new user: ${name} in ${this.appName}`);
		const userId = this.userService.createUser(name, email);
		this.logger.log(`User ${name} processed successfully with ID: ${userId}`);
		return userId;
	}

	getStats() {
		return {
			loggerCount: this.logger.getLogCount(),
			emailsSent: this.userService.getUsersCreated(),
			usersCreated: this.userService.getUsersCreated(),
		};
	}
}

// Create container and resolve services
const container = createContainer();

// Register all services with their tokens
container.register(Logger, { useClass: ConsoleLogger });
container.register(Database, { useClass: InMemoryDatabase });
container.register(EmailSender, { useClass: ConsoleEmailSender });
container.register(UserService, { useClass: UserManagementService });
container.register(Application, { useClass: Application });

// Resolve the main application
const app = container.resolve(Application);

// Simulate user creation
console.log("\n🚀 Starting User Management Application\n");

const user1Id = app.processNewUser("Alice Johnson", "alice@example.com");
const user2Id = app.processNewUser("Bob Smith", "bob@example.com");
const user3Id = app.processNewUser("Carol Williams", "carol@example.com");

console.log("\n📊 Application Statistics:");
const stats = app.getStats();
console.log(`📋 Logger count: ${stats.loggerCount}`);
console.log(`📧 Emails sent: ${stats.emailsSent}`);
console.log(`👥 Users created: ${stats.usersCreated}`);
console.log(`👉 User IDs created: ${user1Id}, ${user2Id}, ${user3Id}`);

console.log("\n✅ All services automatically resolved with their dependencies!");
