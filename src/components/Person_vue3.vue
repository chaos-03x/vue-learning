<template>
    <div id="person">
        <h1>Vue3 语法</h1>
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">显示电话</button>
    </div>
</template>

// 写法1
<!-- <script>
import { ref,reactive } from 'vue'
export default{
    name: "Person_vue3",
    setup(){
        let name= ref("李四")
        let age= ref(17)
        let tel= ref("13155556888")

        function changeName(){
            name.value = "李五"
        }
        function changeAge(){
            age.value++
        }
        function showTel(){
            alert(tel.value)
        }

        return {name,age,tel,changeName,changeAge,showTel}
    }
}
</script> -->

// 写法2
<script setup>
import {ref,reactive,toRefs} from 'vue'
defineOptions({name: 'Person_vue3'})

// let name= ref("李四")
// let age= ref(17)
// let tel= ref("13155556888")

// 使用toRefs解构赋值，以保持响应性
let person = reactive({
    name: "李四",
    age: 17,
    tel: 13155556888
})
let {name,age,tel} = toRefs(person)

function changeName(){
    name.value = "李五"
}
function changeAge(){
    age.value++
}
function showTel(){
    alert(tel.value)
}
</script>

<style scoped>
#person {
    background-color: azure;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
    border-radius: 5px;
}
</style>