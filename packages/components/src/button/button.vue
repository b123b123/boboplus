<!--
 * @Description: button按钮
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2024-03-11 15:50:15
 * @LastEditors: WangBo
 * @LastEditTime: 2024-03-25 10:27:57
-->
<template>
    <button class="bo-button" :class="buttonStyle"><slot /></button>
</template>

<script lang="ts" setup>
import "./index.less";
import { computed } from "vue";
defineOptions({ name: "bo-button" });

type ButtonProps = {
    type?: string;
};

const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
    return { [`bo-button--${buttonProps.type}`]: buttonProps.type };
});
</script>

<style scoped></style>
