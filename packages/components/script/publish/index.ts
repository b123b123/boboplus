/*
 * @Description: Publish.ts
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2024-03-18 09:11:48
 * @LastEditors: WangBo
 * @LastEditTime: 2024-03-18 13:05:26
 */
import run from "../utils/run";
import { pkgPath } from "../utils/paths";
import { series } from "gulp";

export const publishComponent = async () => {
	run("release-it", `${pkgPath}/boboplus`);
};

export default series(async () => publishComponent());
