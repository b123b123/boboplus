<!--
 * @Description: input输入库
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2024-03-11 15:51:14
 * @LastEditors: WangBo
 * @LastEditTime: 2024-03-25 14:10:45
-->
<template>
    <input type="text" placeholder="请输入组件名称" class="input-class" />
</template>

<script setup lang="ts">
defineOptions({
    name: "bo-input"
});
</script>

<style scoped>
.input-class {
    text-decoration: line-through;
    color: aquamarine;
}
</style>
