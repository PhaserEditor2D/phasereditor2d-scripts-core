const fs = require('fs');
const path = require('path');

function concatFiles(inputFolder, outputFilePath, ext, order) {

	const order2 = order.map(o => o + ext);

	const files = fs.readdirSync(inputFolder)
		.filter(file => file.endsWith(ext))
		.sort((a, b) => {
			a = order2.indexOf(a);
			b = order2.indexOf(a);
			a = a < 0 ? Number.MAX_VALUE : a;
			b = b < 0 ? Number.MAX_VALUE : b;
			return a - b;
		});

	let output = "";

	const exportDefaultReplace = ext === ".d.ts"? "declare " : "";

	for (const file of files) {

		const filepath = path.join(inputFolder, file);
		let s = fs.readFileSync(filepath, 'utf-8');
		s = s.replace(/import .*\n/g, "")
			.replace(/export default /g, exportDefaultReplace)
			.replace(/export \{.*\n?/g, "");
		output += s + "\n";
	}

	fs.writeFileSync(outputFilePath, output, "utf-8");
}

function copyFiles(srcFolder, outFolder, ext) {

	const files = fs.readdirSync(srcFolder)
		.filter(file => file.endsWith(ext));

	for (const file of files) {

		const from = path.join(srcFolder, file);
		const to = path.join(outFolder, file);

		fs.copyFileSync(from, to);
	}
}

const packageData = JSON.parse(fs.readFileSync("package.json"));
const name = packageData.name
	.replaceAll("@", "")
	.replaceAll("/", "_")
	.replaceAll("-", "_");

const version = packageData.version;

fs.mkdirSync(`browser/${name}/lib`, { recursive: true });

const ORDER = [
	"ScriptNode"
];

fs.writeFileSync(`browser/${name}/library.txt`, version);
concatFiles("out", `browser/${name}/lib/${name}.js`, ".js", ORDER);
concatFiles("types", `browser/${name}/lib/${name}.d.ts`, ".d.ts", ORDER);
copyFiles("src", `browser/${name}/`, ".scene");
copyFiles("src", `browser/${name}/`, ".components");