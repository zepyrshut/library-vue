<template>
  <Disclosure as="nav" class="bg-gradient-to-bl from-champagne-pink to-seashell-c shadow" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center text-2xl font-bold text-old-rose">
            <!-- <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow" />
            <img class="hidden lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow" /> -->
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8 bebas-neue">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <a href="#" class="border-old-rose text-old-rose inline-flex items-center px-1 pt-1 border-b-2 text-2xl">
              Inicio </a>
            <a href="#"
              class="border-transparent text-french-lilac hover:border-old-rose hover:text-old-rose inline-flex items-center px-1 pt-1 border-b-2 text-2xl">
              Equipo </a>
            <a href="#"
              class="border-transparent text-french-lilac hover:border-old-rose hover:text-old-rose inline-flex items-center px-1 pt-1 border-b-2 text-2xl">
              Proyectos </a>
            <a href="#"
              class="border-transparent text-french-lilac hover:border-old-rose hover:text-old-rose inline-flex items-center px-1 pt-1 border-b-2 text-2xl">
              Contacto </a>
          </div>
        </div>
        <div class=" absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <theme-switcher :theme="theme" @themeChanged="updateTheme"
            class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer" />
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="pt-2 pb-4 space-y-1">
        <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
        <DisclosureButton as="a" href="#"
          class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
          Incio</DisclosureButton>
        <DisclosureButton as="a" href="#"
          class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
          Team</DisclosureButton>
        <DisclosureButton as="a" href="#"
          class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
          Projects</DisclosureButton>
        <DisclosureButton as="a" href="#"
          class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
          Calendar</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import feather from "feather-icons";

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,
    ThemeSwitcher,
  },
  data() {
    return {
      theme: '',
      appTheme: localStorage.getItem('theme')
    }
  },
  created() {
    this.theme = localStorage.getItem('theme') || 'light';
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem('theme') || 'light';
  },
  methods: {
    updateTheme(theme) {
      this.theme = theme;
    },
  },
  updated() {
    feather.replace();
  },
}
</script>