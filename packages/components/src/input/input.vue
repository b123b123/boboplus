<!--
 * @Description: input输入库
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2024-03-11 15:51:14
 * @LastEditors: WangBo
 * @LastEditTime: 2024-03-15 16:37:47
-->
<template>
    <input type="text" placeholder="请输入组件名称" class="inputClass" />
</template>

<script setup lang="ts">
defineOptions({
    name: "bo-input"
});
</script>

<style scoped>
.inputClass {
    text-decoration: line-through;
    color: aquamarine;
}
</style>
