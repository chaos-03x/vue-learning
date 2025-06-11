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
         <ref/>
    </div>
    
</template>

<script>
import Person_vue2 from './components/Person_vue2.vue'
import Person_vue3 from './components/Person_vue3.vue'
import vfor from './components/V-for.vue'
import Computed from './components/Computed.vue'
import watch_1 from './components/Watch_1.vue'
import watch_2 from './components/Watch_2.vue'
import watchEffect from './components/watchEffect.vue'
import ref from './components/ref.vue';

export default {
    components: {Person_vue2,Person_vue3,vfor,Computed,
        watch_1,watch_2,watchEffect,ref}
}
</script>

