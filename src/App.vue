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
        <props text="这是一条来自App.vue的字符串" :list="personList"/>
    </div>
    
</template>

<script setup>
import Person_vue2 from './components/Person_vue2.vue'
import Person_vue3 from './components/Person_vue3.vue'
import vfor from './components/V-for.vue'
import Computed from './components/Computed.vue'
import watch_1 from './components/Watch_1.vue'
import watch_2 from './components/Watch_2.vue'
import watchEffect from './components/watchEffect.vue'
import ref from './components/Ref_get_element.vue';
import props from './components/Props_get_element.vue';
import { reactive } from 'vue'

// 使用setup组件式API的情况下，不需要export default（Options API的写法）
// export default {
//     components: {Person_vue2,Person_vue3,vfor,Computed,
//         watch_1,watch_2,watchEffect,ref,props}
// }

let personList = reactive([
    {name:'zhang-san',age:11},
    {name:'li-si',age:13},
    {name:'wang-wu',age:16}
])
</script>

