<!--
 * @Description: button按钮
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2024-03-11 15:50:15
 * @LastEditors: WangBo
 * @LastEditTime: 2024-03-11 17:40:29
-->
<template>
	<button class="ea-button" :class="buttonStyle"><slot /></button>
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
	return { [`ea-button--${buttonProps.type}`]: buttonProps.type };
});
</script>

<style scoped></style>
