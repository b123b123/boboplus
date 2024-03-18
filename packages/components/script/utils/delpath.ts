import fs from "fs";
import path from "path";
import { pkgPath } from "./paths";

function deleteFolderRecursive(folderPath: string) {
	if (fs.existsSync(folderPath)) {
		fs.readdirSync(folderPath).forEach((file, index) => {
			const curPath = path.join(folderPath, file);
			if (fs.lstatSync(curPath).isDirectory()) {
				// recurse
				deleteFolderRecursive(curPath);
			} else {
				// delete file
				if (curPath !== path.join(pkgPath, "boboplus", "package.json")) {
					fs.unlinkSync(curPath);
				}
			}
		});
		if (folderPath !== path.join(pkgPath, "boboplus")) {
			fs.rmdirSync(folderPath);
		}
	}
}

export default deleteFolderRecursive;
