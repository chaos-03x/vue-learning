<template>
    <div id="person">
        <h1>Vue2 语法</h1>
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看电话</button>
    </div>
</template>

<script>
// Vue2 语法
export default {
    name: 'Person_vue2', // 暴露组件名
    data() {
        return {
            name: "张三",
            age: 18,
            tel: "18649998888"
        }
    },
    methods:{
        changeName(){
            this.name = "张四"
        },
        changeAge(){
            this.age++
        },
        showTel(){
            alert(this.tel)
        }
    }
}

</script>

<style scoped>
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