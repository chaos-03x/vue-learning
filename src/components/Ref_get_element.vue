<!-- ref 获取HTML元素,以及defineExpose({})子传父 -->
<template>
    <div id="box">
        <h1 ref="title1">通过ref获得元素</h1>
        <button @click="getElement">获得H1元素</button>
    </div>
</template>

<script setup>
defineOptions({name:'ref'})
import {ref} from 'vue'
let title1 = ref()

function getElement(){
    alert(title1.value.textContent)
    console.log(title1.value);
}

defineExpose({})    // 父组件只能取得子组件主动暴露的东西
</script>

<style scoped>
#box {
    background-color: rgb(128, 206, 167);
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
    border-radius: 5px;
}
</style>