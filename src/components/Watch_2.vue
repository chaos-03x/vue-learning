<template>
    <div id="box">
        <h1>watch_2</h1>
        <span>
            watch能监视的四种数据：<br>
            - ref定义的数据<br>
            - reactive定义的数据<br>
            - 返回一个值的函数<br>
            - 包含上述内容的数组<br>
        </span>

        <h2>4. ref或reactive定义的对象类型数据中的某个属性</h2>
        <span>若该属性不是对象类型,需写成函数形式.若是对象类型,推荐写成函数形式</span>
        <h3>姓名:{{ person.name }}</h3>
        <h3>年龄:{{ person.age }}</h3>
        <h3>汽车:{{ person.car.c1 }} & {{ person.car.c2 }}</h3>
        <button @click="changeName">改变名字</button>
        <button @click="changAge">改变年龄</button>
        <button @click="changC1">改变车1</button>
        <button @click="changC2">改变车2</button>
        <button @click="changCar">改变所有车</button>

        <h2>5. 同时监视多个数据</h2>
        <span></span>
        <h3>姓名:{{ person.name }}</h3>
        <h3>年龄:{{ person.age }}</h3>
        <h3>汽车:{{ person.car.c1 }} & {{ person.car.c2 }}</h3>
        <button @click="changeName">改变名字</button>
        <button @click="changAge">改变年龄</button>
        <button @click="changC1">改变车1</button>
        <button @click="changC2">改变车2</button>
        <button @click="changCar">改变所有车</button>
    </div>
</template>

<script setup>
defineOptions({ name: 'watch_2' })
import { ref, reactive, watch } from 'vue'

/** 情况四 */
let person = reactive({
    name: '张三',
    age: 18,
    car: {
        c1: '奔驰',
        c2: '宝马'
    }
})

function changeName() {
    person.name += '~'
}
function changAge() {
    person.age += 1
}
function changC1() {
    person.car.c1 = '特斯拉'
}
function changC2() {
    person.car.c2 = '沃尔沃'
}
function changCar() {
    Object.assign(person.car, { c1: '小米', c2: '大米' })
}

// 监视一个函数返回值
watch(() => person.name, (val) => {
    console.log('名字改变:', val);
})
watch(() => person.age, (val) => {
    console.log('年龄改变:', val);
})
watch(person.car, (val) => {
    console.log('汽车改变:', val);
})

// 情况五:同时监视多个数据,用数组包括函数
watch([()=>person.name,()=>person.car.c1],(val) => {
    console.log('同时监视name和car1,发生变化:',val)
})


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