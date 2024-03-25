/*
 * @Description: button.ts - 测试
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2024-03-25 14:44:20
 * @LastEditors: WangBo
 * @LastEditTime: 2024-03-25 15:32:53
 */
import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import button from "../button.vue";

// describe("Helloboboplus", () => {
//     it("should be helloboboplus", () => {
//         expect("hello" + "boboplus").toBe("helloboboplus");
//     });
// });

// The component to test
describe("test button", () => {
    it("should render slot", () => {
        const wrapper = mount(button, {
            slots: {
                default: "boboplus"
            }
        });

        // Assert the rendered text of the component
        expect(wrapper.text()).toContain("boboplus");
    });
});
