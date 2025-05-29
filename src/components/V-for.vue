<template>
    <div id="item">
        <h1>reactive、ref、v-for</h1>
        <h2>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
        <button @click="changeCar">改变汽车</button>
        <h2>军火列表：</h2>
        <ul>
            <li v-for="i in items" :key="i.id">{{ i.name }}</li>
        </ul>
        <button @click="changeItem">改变第一个军火</button>
    </div>
</template>

<script setup>
import { ref,reactive } from 'vue';
defineOptions({name:'vfor'})

let car = reactive({brand:'小米',price:29.9})

function changeCar(){
    car.brand = '大米'
    car.price = '59.9'
}

let items = ref([
    {id:'01', name:'飞机'},
    {id:'02', name:'坦克'},
    {id:'03', name:'大炮'}
])

function changeItem(){
    items.value[0].name = "导弹"
}

</script>

<style scoped>
#item {
    background-color: forestgreen;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
    border-radius: 5px;
}
</style>