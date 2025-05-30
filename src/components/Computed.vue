<template>
    <div id="box">
        <h1>Computed计算属性</h1>
        <!-- v-bind单向绑定，v-model双向绑定 -->
        姓：<input type="text" v-model="firstName"> <br>
        名：<input type="text" v-model="lastName"> <br>
        全名：<span>{{ firstName }}-{{ lastName }}</span>
    </div>
</template>

<script setup>
defineOptions({ name: "Computed" })
import {ref} from 'vue'

let firstName = ref("张")
let lastName = ref("三")
let fullName = ref("张三")
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