<template>
    <div>
        <h1>Hello World</h1>
        <!-- <Person_vue2/>   
        <Person_vue3/>   
        <vfor/> -->
        <!-- <Computed/> -->
        <!-- <watch_1/>
        <watch_2/> -->
        <!-- <watchEffect/> -->
        <!-- <ref/> -->
        <!-- <props text="这是一条来自App.vue的字符串" :list="personList"/> -->
        <!-- <lifecycle/> -->
        <!-- <hooks/> -->
    </div>
    <div class="router">
        <h1>路由测试</h1>
        <!-- 导航区 -->
        <div class="navigate">
            <RouterLink to="/home">新闻</RouterLink>
            <RouterLink to="/news">关于</RouterLink>
            <RouterLink to="/about">首页</RouterLink>
        </div>
        <!-- 展示区 -->
        <div class="content">
            <RouterView></RouterView>
        </div>
    </div>

</template>

<script setup>
import { reactive } from 'vue'
import Person_vue2 from './components/Person_vue2.vue'
import Person_vue3 from './components/Person_vue3.vue'
import vfor from './components/V-for.vue'
import Computed from './components/Computed.vue'
import watch_1 from './components/Watch_1.vue'
import watch_2 from './components/Watch_2.vue'
import watchEffect from './components/watchEffect.vue'
import ref from './components/Ref_get_element.vue';
import props from './components/Props_get_element.vue';
import Lifecycle from './components/Lifecycle.vue'
import hooks from './components/hooks.vue';
import { RouterView, RouterLink } from 'vue-router'

// 使用setup组件式API的情况下，不需要export default（Options API的写法）
// export default {
//     components: {Person_vue2,Person_vue3,vfor,Computed,
//         watch_1,watch_2,watchEffect,ref,props}
// }

let personList = reactive([
    { name: 'zhang-san', age: 11 },
    { name: 'li-si', age: 13 },
    { name: 'wang-wu', age: 16 }
])
</script>

<style scoped>
/* 通用样式重置和字体设置 */
body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f4f4;
}

/* 主容器 */
.router {
    max-width: 800px;
    margin: 40px auto;
    background-color: #ffffff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    overflow: hidden;
}

/* 标题样式 */
.router h1 {
    background-color: #007bff;
    color: white;
    padding: 20px;
    margin: 0;
    text-align: center;
    font-size: 28px;
}

/* 导航区 */
.navigate {
    display: flex;
    justify-content: center;
    background-color: #e9ecef;
    padding: 12px 0;
    gap: 30px;
    border-bottom: 1px solid #ddd;
}

.navigate a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    padding: 6px 12px;
    border-radius: 6px;
    transition: background-color 0.3s, color 0.3s;
}

.navigate a:hover {
    background-color: #007bff;
    color: white;
}

/* 内容展示区 */
.content {
    padding: 30px;
    min-height: 200px;
    color: #444;
    font-size: 16px;
}
</style>