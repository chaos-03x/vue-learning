<template>
    <div id="box">
        <h1>watch_1</h1>
        <span>
            watch能监视的四种数据：<br>
            - ref定义的数据<br>
            - reactive定义的数据<br>
            - 返回一个值的函数<br>
            - 包含上述内容的数组<br>
        </span>

        <h2>1. ref 定义的基本类型数据</h2>
        <h3>当前sum: {{ sum }}</h3>
        <button @click="changeSum">增加sum</button>
        
        <h2>2. ref定义的对象类型数据</h2>
        <span>直接监视对象时，监视的是对象的地址值，想监视对象内部数据，要开启深度监视</span>
        <h3>姓名:{{ person.name }}</h3>
        <h3>年龄:{{ person.age }}</h3>
        <button @click="changeName">改变名字</button>
        <button @click="changAge">改变年龄</button>
        <button @click="changPerson">改变张三</button>

        <h2>3. reactive定义的对象类型数据</h2>
        <span>对于reactive定义的对象类型,监视时默认开启深度监视</span>
        <h3>汽车:{{ car.brand }}</h3>
        <h3>价格:{{ car.price }}</h3>
        <button @click="changeBrand">改变品牌</button>
        <button @click="changPrice">改变价格</button>
        <button @click="changCar">改变车</button>
    </div>
</template>

<script setup>
defineOptions({name:'watch_1'})
import {ref,reactive,watch} from 'vue'

/** 情况一 */
let sum = ref(0)
function changeSum(){
    sum.value++
}
watch(sum,(newValue,oldValue) => {
    console.log('sum变化:',newValue,oldValue);
})
// 如何停止监视：watch的返回值是一个函数，作用是停止监视
// const stopWatch = watch()


/** 情况二 */

let person = ref({
name:'张三',
age:18
})

function changeName(){
person.value.name += '~'
}
function changAge(){
person.value.age += 1
}
function changPerson(){
person.value = {name:'李四',age:108}
}

watch(person,(newVal,oldVal) => {
console.log("person变化:",newVal,oldVal)
},{deep:true}) // 需开启深度监视,才能监视到内部属性变化,负责只能监视到内存地址的改变


/** 情况三 */
let car = reactive({
    brand:'宝马',
    price: 99
})

function changeBrand(){
    car.brand += '~'
}
function changPrice(){
    car.price += 1
}
function changCar(){
    Object.assign(car,{brand:"奥迪",price:9999})
}
watch(car,(newVal,oldVal) => {
    console.log("car改变:",newVal,oldVal);
})


/** 情况四 */

</script>

<style scoped>
#box {
    background-color: rgb(159, 206, 128);
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