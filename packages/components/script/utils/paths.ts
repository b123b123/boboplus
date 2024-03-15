/*
 * @Description: 维护组件库路径
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2024-03-15 15:01:10
 * @LastEditors: WangBo
 * @LastEditTime: 2024-03-15 15:03:02
 */
import { resolve } from "path";

//组件库根目录
export const componentPath = resolve(__dirname, "../../");

//pkg根目录
export const pkgPath = resolve(__dirname, "../../../");
