<template>
  <!-- <section data-aos="zoom-in" class="flex justify-center items-center min-h-screen mt-20 lg:mt-0"> -->
  <section class="relative min-h-[88vh] pt-24 px-4 sm:px-6 lg:px-16 overflow-hidden">
    <div class="grid lg:grid-cols-2 gap-10 items-center w-full"></div> 
    <div class="relative isolate text-center lg:text-left"></div> 
    <div class="absolute -z-10
      left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0
      top-[2.2rem] sm:top-[2.6rem] md:top-[3.2rem] lg:top-[3.8rem]
      w-[92vw] sm:w-[86vw] md:w-[64vw] lg:w-[58vw] max-w-[1000px]
      h-[110px] sm:h-[140px] md:h-[200px] lg:h-[240px]
      rounded-full -skew-x-12
      bg-gradient-to-r from-surface to-ink
      opacity-80 blur-md md:blur-xl">
    </div>
    <!-- … gradient background dibiarkan … -->
    <main class="absolute grid lg:grid-cols-2 grid-cols-1 items-center p-2 lg:p-8">
      <header class="text-center">
        <!-- biarkan warna teks mewarisi dari App.vue -->
        <!-- <h1 class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold"> -->
        <h1 class="font-bold leading-tight
        text-[34px] sm:text-[44px] md:text-[56px] lg:text-[72px]">
          👋 Hello, I'm
          <span class="stroke-text text-stroke-primary dark:text-stroke-secondary">Muhammad Faisal A</span>
        </h1>
        <p class="text-lg max-w-xl mx-auto lg:mx-0 font-semibold">
          Saya Adalah seorang pria yang berakal sehat dengan mengambil keputusan dengan bijak. Mudah menyerah bukan berarti melemah begitu aja melainkan dapat membangun mental lebih kuat.
        </p>
        <div class="mt-6 flex justify-center lg:justify-start">
          <Button label="Hire me"/>
          <a href="" class="font-semibold text-lg w-[10rem] h-[55px] dark:text-secondary rounded-full ml-2 border-2 dark:border-secondary hover:scale-105 bg-white dark:bg-transparent flex justify-center items-center text-primary border-primary">
            <Icon icon="line-md:download-loop" class="inline text-3xl mr-1"/>
            <span class="ml-1">Resume</span>
          </a>
        </div>
      </header>
      <aside class="flex justify-center lg:justify-end mt-20 lg:mt-0 items-center">
  <div class="relative">
    <!-- lingkaran dekor belakang -->
    <div
  class="absolute -right-4 -top-4 w-[280px] h-[280px] md:w-[420px] md:h-[420px]
         rounded-full bg-primary/30 dark:bg-secondary/20 blur-2xl"
  aria-hidden="true"
></div>
       <!-- FRAME BULAT + CROP FOTO -->
    <div
      class="relative z-10 w-[240px] h-[240px] md:w-[340px] md:h-[340px]
             rounded-full overflow-hidden ring-8 ring-primary dark:ring-secondary
             bg-white "
    >
      <img
        src="@/assets/imgs/HeroPic.jpg"
        alt="Hero picture"
        class="w-full h-full object-cover object-[50%_20%]" />
        <!-- object-[50%_20%] = geser fokus ke atas agar wajah pas;
             ubah ke object-top / object-center sesuai kebutuhan -->
    </div>
  </div>
      </aside>
    </main>

    <svg class="hidden">
        <filter id="wavy1">
            <feTurbulence x="0" y="0" baseFrequency="0.2" numOctaves="5" seed="1"></feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="30"></feDisplacementMap>
        </filter>
    </svg>

  </section>
</template>

<script setup>
import Button from '@/components/UI/Button1.vue'
import { Icon } from '@iconify/vue';
</script>

<style scoped>
.container .card:before{
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background: transparent;
}

.container .card:nth-of-type(1):before{
    filter: url(#wavy1);
    animation: animate 5s linear infinite;
}

</style>