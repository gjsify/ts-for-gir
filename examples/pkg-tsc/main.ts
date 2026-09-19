imports.package.init({
	name: "test",
	version: "1.0.0",
	prefix: "test",
	libdir: "lib",
});
console.log("name", imports.package.name, pkg.name);
console.log("version", imports.package.version, pkg.version);
