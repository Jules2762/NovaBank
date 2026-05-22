<template>
  <div
    class="w-100 h-screen max-h-screen sticky top-0 left-0 flex flex-col justify-between"
  >
    <div class="flex flex-col">
      <img
        src="/logo/Novabank-blue-logo.svg"
        alt="logo Novabank"
        class="w-60 object-cover"
      />
      <div class="flex flex-col">
        <button
          class="flex flex-row gap-x-3 items-center h-12 px-6"
          :class="
            router.currentRoute.value.name == value.name
              ? 'bg-primary/30 border-r-4 border-primary'
              : ''
          "
          v-for="(value, index) in paths"
          :key="index"
          @click="router.push({ name: value.name })"
        >
          <component :is="value.icon"></component>
          <span>{{ value.label }}</span>
        </button>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script setup lang="ts">
import { Home } from "lucide-vue-next";
import router from "../../routes";

const paths = [
  {
    icon: Home,
    label: "Dashboard",
    name: "DASHBOARD",
  },
];
</script>
