<!-- ref 获取元素 -->
<template>
    <div id="box">
        <h1 ref="item">通过ref获得元素</h1>
        <button @click="getElement">获得H1元素</button>
    </div>
</template>

<script setup>
defineOptions({name:'ref'})
import {ref} from 'vue'
let item = ref()

function getElement(){
    alert(item.value)
}
</script>

<style scoped>
#box {
    background-color: rgb(194, 206, 128);
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
    border-radius: 5px;
}
</style>