<script setup>
import { computed, onMounted, ref } from 'vue'
import {useStore} from "vuex"

const store = useStore()

onMounted(() => {
  store.dispatch("getUser")
})

</script>

<template>
  <div>
    kadirov-app
  </div>
</template>
