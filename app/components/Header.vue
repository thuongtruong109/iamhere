<script setup lang="ts">
const colorMode = useColorMode();

const isDarkMode = computed({
  get: () => colorMode.preference === "dark",
  set: () =>
    (colorMode.preference = colorMode.value === "dark" ? "light" : "dark"),
});
</script>

<template>
  <h3 class="text-lg font-semibold leading-6 drop-shadow-sm">
    <NuxtLink to="/">Locanet</NuxtLink>
  </h3>
  <UButton
    square
    variant="ghost"
    color="neutral"
    :icon="
      $colorMode.preference === 'dark' || $colorMode.preference === 'system'
        ? 'i-lucide-moon'
        : 'i-lucide-sun'
    "
    @click="isDarkMode = !isDarkMode"
  />
</template>
