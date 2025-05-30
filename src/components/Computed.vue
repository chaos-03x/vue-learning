<template>
    <div id="box">
        <h1>Computed计算属性</h1>
        <!-- v-bind单向绑定，v-model双向绑定 -->
        姓：<input type="text" v-model="firstName"> <br>
        名：<input type="text" v-model="lastName"> <br>
        <!-- 需求：将姓名首字母大写 -->
         <!-- 全名：<span>{{ firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + lastName.value }}</span> -->
        全名：<span>{{ fullName }}</span>
        <button @click="changeFullName">将全名改为li-si</button>
    </div>
</template>

<script setup>
defineOptions({ name: "Computed" })
import {computed, ref} from 'vue'

let firstName = ref("zhang")
let lastName = ref("san")

// fullName只读
// let fullName = computed(() => {
//     return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + "-" + lastName.value
// })
let fullName = computed({
    get(){
        return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + "-" + lastName.value
    },
    set(val){
        let [first, last] = val.split("-")
        firstName.value = first
        lastName.value = last
    }
})

// 定义了计算属性的set()的情况下，对其进行修改会调用set()
function changeFullName(){
    fullName.value = "li-si"
}
</script>

<style scoped>
#box {
    background-color: rgb(177, 128, 206);
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
    border-radius: 5px;
}
</style>