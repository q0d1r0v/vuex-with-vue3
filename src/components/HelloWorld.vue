<script setup>
import { computed, onMounted, ref } from 'vue'
import {useStore} from "vuex"

const store = useStore()

let data = computed(() => {
  return store.state
})

onMounted(() => {
  store.dispatch("getUser")
  console.log(data)
})

</script>

<template>
  <div>
    kadirov-app
  </div>
</template>
