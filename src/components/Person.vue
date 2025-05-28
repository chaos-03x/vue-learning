<template>
    <div id="person">
        <h1>姓名：{{ name }}</h1>
        <h1>年龄：{{ age }}</h1>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看电话</button>
    </div>
</template>

<script>
// Vue2 语法
export default {
    name: 'Person' // 暴露组件名
}

</script>

<style>
#person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
    border-radius: 5px;
}
</style>