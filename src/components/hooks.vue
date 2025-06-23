<template>
    <div id="box">
        <h1>hook 钩子</h1>
        <span></span>
        <img v-for="(dog,index) in dogList" :src="dog" :key="index">
        <br>
        <button @click="getDog">点击增加狗</button>
    </div>
</template>

<script setup>
defineOptions({name:'hooks'})
import useDog from '@/hooks/useDog.js'
 
 const {dogList, getDog} = useDog()
</script>

<style scoped>
#box {
    background-color: rgb(209, 148, 132);
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
span {
    font-size: 15px;
    color: rgb(68, 76, 76);
}
button {
    margin: 0 5px;
    border-radius: 5px;
}
img {
    height: 100px;
    margin-right: 10px;
}
</style>