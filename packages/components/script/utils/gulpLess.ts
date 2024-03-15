/*
 * @Description: 打包less样式
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2024-03-15 16:07:34
 * @LastEditors: WangBo
 * @LastEditTime: 2024-03-15 16:11:21
 */
import { componentPath, pkgPath } from "./paths";
import less from "gulp-less";
import autoprefixer from "gulp-autoprefixer";
import { src, dest } from "gulp";

export const buildStyle = () => {
	return src(`${componentPath}/src/**/**.less`)
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(dest(`${pkgPath}/boboplus/lib/src`))
		.pipe(dest(`${pkgPath}/boboplus/es/src`));
};
