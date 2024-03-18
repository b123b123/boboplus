/*
 * @Description: copyAndRenameFile.ts
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2024-03-18 10:59:38
 * @LastEditors: WangBo
 * @LastEditTime: 2024-03-18 11:04:10
 */
import fs from "fs";
import path from "path";

export default async (sourcePath: string, destinationPath: string, newFilename: string) => {
	// 读取源文件内容
	fs.readFile(sourcePath, (err, data) => {
		if (err) {
			console.error("Error reading file:", err);
			return;
		}

		// 将数据写入目标文件并重命名
		fs.writeFile(path.join(destinationPath, newFilename), data, (err) => {
			if (err) {
				console.error("Error writing file:", err);
				return;
			}
			console.log("File copied and renamed successfully!");
		});
	});
};
