<template>
    <h1>Vue3的生命周期</h1>
    <span>见控制台</span>
</template>

<script setup> // 创建阶段在setup完成
defineOptions({name:'lifecycle'})
import { ref,onBeforeMount,onBeforeUnmount,onBeforeUpdate,
onUpdated,onMounted,onUnmounted } from "vue";

// 挂载
onBeforeMount(() => {
    console.log('挂载前');
})
onMounted(() => {
    console.log('挂载完毕');
})

// 更新
onBeforeUpdate(() => {
    console.log('更新前');
})
onUpdated(() => {
    console.log('更新完毕');
})

// 卸载
onBeforeUnmount(() => {
    console.log('卸载前');
})
onUnmounted(() => {
    console.log('卸载完毕');
})

</script>

<style scoped>
#box {
    background-color: rgb(128, 206, 167);
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
span {
    font-size: 15px;
    color: rgb(68, 76, 76);
}
</style>