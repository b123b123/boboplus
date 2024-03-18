/*
 * @Description: Publish.ts
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2024-03-18 09:11:48
 * @LastEditors: WangBo
 * @LastEditTime: 2024-03-18 10:46:43
 */
import run from "../utils/run";
import { pkgPath } from "../utils/paths";
import { series, src, dest } from "gulp";

export const copyPkg = async () => {
	return src("./release.json").pipe(dest(`${pkgPath}/boboplus/package.json`));
};

export const publishComponent = async () => {
	run("release-it", `${pkgPath}/boboplus`);
};

export default series(copyPkg, async () => publishComponent());
