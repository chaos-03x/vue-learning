<template>
    <div>
        <h1>Hello World</h1>
        <Person_vue2/>   
        <Person_vue3/>   
        <vfor/>
    </div>
    
</template>

<script>
import Person_vue2 from './components/Person_vue2.vue'
import Person_vue3 from './components/Person_vue3.vue'
import vfor from './components/V-for.vue'

export default {
    components: {Person_vue2,Person_vue3,vfor}
}
</script>

