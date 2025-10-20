<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-colors duration-500">
    <div
      class="flex items-center justify-between px-6 lg:px-12 py-6
             bg-secondary dark:bg-primary transition-colors duration-500"
    >
      <!-- Logo -->
      <div class="text-3xl font-bold text-ink dark:text-white transition-colors duration-500">
        LOGO
      </div>

      <!-- Desktop menu -->
      <div class="hidden md:flex items-center gap-8">
        <ul class="flex items-center gap-6">
          <li v-for="item in Menu" :key="item.name">
            <a
              :href="item.href"
              class="font-semibold transition-colors duration-300
                     text-ink hover:text-surface
                     dark:text-white dark:hover:text-surface"
              @click.prevent="scrollToSection(item.href)"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>

        <!-- Tombol dark mode (desktop) -->
        <button
          @click="toggleDarkMode"
          class="focus:outline-none transition-colors duration-300"
          aria-label="Toggle theme"
        >
          <Icon
            v-if="!isDarkMode"
            icon="line-md:moon-filled"
            class="text-2xl text-ink hover:text-surface transition-colors duration-300"
          />
          <Icon
            v-else
            icon="line-md:sunny-outline"
            class="text-2xl text-white hover:text-surface transition-colors duration-300"
          />
        </button>
      </div>

      <!-- Tombol menu mobile (tetap) -->
      <div class="md:hidden z-50">
        <button
          class="block focus:outline-none text-4xl text-ink dark:text-white"
          @click="isMenuOpen = !isMenuOpen"
          aria-label="Toggle navigation"
        >
          <Icon :icon="isMenuOpen ? 'material-symbols:close' : 'material-symbols:menu'" />
        </button>
      </div>
    </div>

    <!-- Menu mobile overlay -->
    <transition name="fade">
      <nav
        v-if="isMenuOpen"
        class="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center
               bg-secondary dark:bg-primary backdrop-blur-sm transition-colors duration-500"
      >
        <ul class="flex flex-col items-center gap-6">
          <li v-for="item in Menu" :key="item.name">
            <a
              :href="item.href"
              class="block text-2xl font-bold transition-colors duration-300
                     text-ink hover:text-surface dark:text-white dark:hover:text-surface"
              @click.prevent="scrollToSection(item.href)"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>

        <!-- Tombol dark mode mobile -->
        <button @click="toggleDarkMode" class="mt-10 text-3xl focus:outline-none">
          <Icon
            v-if="!isDarkMode"
            icon="line-md:moon-filled"
            class="text-ink hover:text-surface"
          />
          <Icon
            v-else
            icon="line-md:sunny-outline"
            class="text-white hover:text-surface"
          />
        </button>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import { Icon } from '@iconify/vue'

const isMenuOpen = ref(false)
const isDarkMode = ref(false)
const Menu = ref([
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
])

// =======================
// 🌙 Algoritma Tema Baru
// =======================
const html = document.documentElement

// 1️⃣ Cek preferensi sistem
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')

// 2️⃣ Fungsi update tema global
const applyTheme = (dark) => {
  isDarkMode.value = dark
  if (dark) {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

// 3️⃣ Saat pertama kali load
onMounted(() => {
  const saved = localStorage.getItem('theme')

  if (saved === 'dark') applyTheme(true)
  else if (saved === 'light') applyTheme(false)
  else applyTheme(systemPrefersDark.matches) // ikut sistem kalau belum ada pilihan user

  // 4️⃣ Dengarkan perubahan dari sistem
  systemPrefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) applyTheme(e.matches)
  })
})

// 5️⃣ Toggle manual user
const toggleDarkMode = () => {
  applyTheme(!isDarkMode.value)
}

// Lock scroll saat menu terbuka
watchEffect(() => {
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
})

// Scroll smooth
const scrollToSection = (href) => {
  isMenuOpen.value = false
  const section = document.querySelector(href)
  if (section) section.scrollIntoView({ behavior: 'smooth' })
}
</script>


<!-- <script setup>
import { ref, onMounted, watch } from 'vue'
import { Icon } from '@iconify/vue'

const isMenuOpen = ref(false)
const isDarkMode = ref(false)

const Menu = ref([
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
])

// Scroll section smooth
const scrollToSection = (href) => {
  isMenuOpen.value = false
  const section = document.querySelector(href)
  if (section) section.scrollIntoView({ behavior: 'smooth' })
}

// Sync tema saat mount
onMounted(() => {
  const html = document.documentElement
  const stored = localStorage.getItem('theme')

  if (stored === 'dark' || (!stored && html.classList.contains('dark'))) {
    html.classList.add('dark')
    isDarkMode.value = true
  } else {
    html.classList.remove('dark')
    isDarkMode.value = false
  }
})

// Toggle tema
const toggleDarkMode = () => {
  const html = document.documentElement
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

// Lock scroll saat menu terbuka
watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
</script> -->

<style>
.fade-enter-active, .fade-leave-active { transition: opacity .25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
