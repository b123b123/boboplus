/*
 * @Description: build
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2024-03-15 15:58:09
 * @LastEditors: WangBo
 * @LastEditTime: 2024-03-15 16:23:37
 */

import delPath from "../utils/delpath";
import run from "../utils/run";
import { series, parallel, src, dest } from "gulp";
import { pkgPath, componentPath } from "../utils/paths";
import { resolve } from "path";
import less from "gulp-less";
import autoprefixer from "gulp-autoprefixer";

//删除 boboplus
export const removeDist = () => {
	const folderPath = resolve(pkgPath, "boboplus");
	return delPath(folderPath);
};

// 打包less样式
export const buildStyle = () => {
	return src(`${componentPath}/src/**/**.less`)
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(dest(`${pkgPath}/boboplus/lib/src`))
		.pipe(dest(`${pkgPath}/boboplus/es/src`));
};

//打包组件
export const buildComponent = async () => {
	run("pnpm run build", componentPath);
};

export default series(
	async () => removeDist(),
	parallel(
		async () => buildStyle(),
		async () => buildComponent()
	)
);
