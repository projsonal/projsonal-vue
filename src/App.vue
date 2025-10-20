<template>
  <div class="bg-[#B8001F] dark:bg-[#FCFAEE] min-h-screen">
  <!-- <div class="min-h-screen bg-primary text-secondary dark:bg-secondary dark:text-primary transition-colors duration-500"> -->
    <Navbar/>
    <HeroSection/>
    <Counter/>
    <main class="pt-20"></main>
  </div>
</template>

<script setup>
import {defineAsyncComponent} from 'vue';
const Navbar = defineAsyncComponent(() => import('@/components/layout/Navbar.vue'));
const HeroSection = defineAsyncComponent(() => import('@/components/layout/HeroSection.vue'));
const Counter = defineAsyncComponent(() => import('@/components/layout/Counter.vue'));
</script>
