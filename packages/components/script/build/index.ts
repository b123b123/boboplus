/*
 * @Description: build
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2024-03-15 15:58:09
 * @LastEditors: WangBo
 * @LastEditTime: 2024-03-15 16:00:29
 */
import delPath from "../utils/delpath";
import { series } from "gulp";
import { pkgPath } from "../utils/paths";
import { resolve } from "path";

//删除 boboplus
export const removeDist = () => {
	const folderPath = resolve(pkgPath, "boboplus");
	return delPath(folderPath);
};

export default series(async () => removeDist());
