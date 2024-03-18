/*
 * @Description: Publish.ts
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2024-03-18 09:11:48
 * @LastEditors: WangBo
 * @LastEditTime: 2024-03-18 11:11:03
 */
import run from "../utils/run";
import { pkgPath } from "../utils/paths";
import copyAndRenameFile from "../utils/copyAndRenameFile";
import { series } from "gulp";

// 生成包管理器
const sourcePath = "release.json"; // 源文件路径
const destinationPath = `${pkgPath}/boboplus`; // 目标文件夹路径
const newFilename = "package.json"; // 新文件名

export const publishComponent = async () => {
	run("release-it", `${pkgPath}/boboplus`);
};

export default series(
	async () => copyAndRenameFile(sourcePath, destinationPath, newFilename),
	async () => publishComponent(),
	async () => copyAndRenameFile(destinationPath + newFilename, "./", sourcePath)
);
