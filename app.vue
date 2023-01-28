<script setup lang="ts">
onMounted(()=>{
  throw new Error('testエラー');
})
</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
