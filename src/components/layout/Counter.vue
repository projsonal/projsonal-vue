<template>
  <section
    class="relative w-full px-4 flex justify-center
           mt-40 sm:mt-32 md:mt-28 lg:mt-24 mb-16"
  >
    <!-- wrapper agar gradient & card satu konteks -->
    <div class="relative isolate w-full max-w-6xl">
      <!-- PILL GRADIENT di belakang kartu -->
      <div
        class="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
               w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%]
               h-24 sm:h-28 md:h-32 lg:h-36
               rounded-full -skew-x-12
               bg-gradient-to-r from-surface to-ink
               opacity-80 blur-md md:blur-lg"
        aria-hidden="true"
      ></div>

      <!-- KARTU COUNTER -->
      <ul
        ref="statsSection"
        class="grid grid-cols-2 md:grid-cols-4 w-full
               p-4 sm:p-6 md:p-8
               bg-white/90 dark:bg-ink/85
               text-ink dark:text-secondary
               rounded-2xl border border-secondary/30
               shadow-lg backdrop-blur-md
               md:divide-x md:divide-secondary/30"
      >
        <li
          v-for="el in numbers"
          :key="el.id"
          class="text-center py-3 px-2 md:px-6"
        >
          <div class="font-bold leading-none text-2xl sm:text-3xl md:text-4xl">
            +<Countup v-if="hasIntersected" :endVal="el.number" />
          </div>
          <div class="mt-2 text-sm sm:text-base font-medium opacity-90">
            {{ el.title }}
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const numbers = ref([
  { id: 1, number: 12, title: 'Created Projects' },
  { id: 2, number: 12, title: 'Projects' },
  { id: 3, number: 8, title: 'Happy Clients' },
  { id: 4, number: 5, title: 'Years of Experience' },
])

const statsSection = ref(null)
const hasIntersected = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      hasIntersected.value = true
      observer.disconnect()
    }
  }, { threshold: 0.5 })

  if (statsSection.value) observer.observe(statsSection.value)
})
</script>
