<script setup>
import HeaderComp from "@/components/HeaderComp.vue";
</script>

<template>
  <HeaderComp />
  <main>
    <div class="conteudo">
      <RouterView />
    </div>
  </main>
</template>

<style>
.conteudo {
  padding: 0 100px;
  background-color: rgb(19, 19, 19);
}
</style>
