<!-- defineProps接收父组件传来的数据 -->
<template>
    <div id="box">
        <h1>通过defineProps取得父组件传递的数据</h1>
        <span>父组件传递的数据: {{ data }}</span>
    </div>
</template>

<script setup>
defineOptions({name:'props'})
import {defineProps} from 'vue';

let data = defineProps(['text','list'])    // 用数组接收，返回值是一个对象

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
span {
    font-size: 15px;
    color: rgb(68, 76, 76);
}
</style>