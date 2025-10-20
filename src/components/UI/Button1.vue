<template >
   <button
    @click="onClick"
    class="relative overflow-hidden rounded-full bg-surface dark:bg-white text-white w-[180px] h-[60px] text-lg font-semibold flex justify-center items-center group hover:bg-gradient-to-r from-[#507687] via-[#384B70] to-secondary transition-colors duration-300"
  >
    <div class="absolute inset-0 scale-[1.06] blur-lg transition-transform duration-300">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white opacity-20 rounded-full group-hover:w-[300px] group-hover:h-[300px] transition-all animate-rotate"></div>
    </div>

    <div class="relative w-[156px] h-[45px] flex justify-center items-center rounded-full bg-secondary text-primary border border-primary">
      {{ label }}
    </div>
  </button>
</template>
<script setup>
const { label, onClick } = defineProps({
  label: { type: String, default: 'Button' },
  onClick: { type: Function, default: () => {} },
})
</script>
<style scoped>
@keyframes rotate {
  from {
    transform: translate(-50%,-50%) rotate(0deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(360deg);
  }
}
.animate-rotate {
  animation: rotate 4s linear infinite;
}
</style>