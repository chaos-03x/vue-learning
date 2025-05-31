<template>
    <div id="box">
        <h1>watchEffect</h1>
        <span></span>
        <h2>需求:水温>60,或水位>80时预警</h2>
        <h2>当前水温:{{ temp }}°</h2>
        <h2>当前水位:{{ height }}cm</h2>
        <button @click="changeTemp">水温+10</button>
        <button @click="changeHeight">水位+10</button>
    </div>
</template>

<script setup>
defineOptions({ name: 'watchEffect' })
import { ref, watchEffect } from 'vue'

let temp = ref(10)
let height = ref(0)

function changeTemp(){
    temp.value += 10
}
function changeHeight(){
    height.value += 10
}

// watch实现需求,需要指定两个数据,在数据多的情况下过于复杂
// watch([temp,height],(val)=>{
//     // 逻辑省略
// })

// watchEffect实现需求,函数中用到了哪些属性,就自动监视哪些数据,不用指定
watchEffect(() => {
    if(temp.value >= 60 || height.value >= 80){
        console.log('预警!');
    }
})

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

span {
    font-size: 15px;
    color: rgb(68, 76, 76);
}
</style>