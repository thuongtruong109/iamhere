<script setup lang="ts">
const colorMode = useColorMode();

const isDarkMode = computed({
  get: () => colorMode.preference === "dark",
  set: () =>
    (colorMode.preference = colorMode.value === "dark" ? "light" : "dark"),
});

useHead({
  htmlAttrs: { lang: "en" },
  link: [{ rel: "icon", href: "/icon.png" }],
});

useSeoMeta({
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  title: "Here we go",
  description:
    "A Nuxt demo hosted with edge-side rendering, authentication and queyring a Cloudflare D1 database",
  ogImage: "/social-image.png",
  twitterImage: "/social-image.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <UApp>
    <UContainer class="min-h-screen flex flex-col my-4">
      <UCard variant="subtle">
        <template #header>
          <h3 class="text-lg font-semibold leading-6">
            <NuxtLink to="/"> Here we go </NuxtLink>
          </h3>
          <UButton
            square
            variant="ghost"
            color="neutral"
            :icon="
              $colorMode.preference === 'dark' ||
              $colorMode.preference === 'system'
                ? 'i-lucide-moon'
                : 'i-lucide-sun'
            "
            @click="isDarkMode = !isDarkMode"
          />
        </template>
        <NuxtPage />
      </UCard>
    </UContainer>
  </UApp>
</template>

<style lang="postcss">
body {
  @apply font-sans text-neutral-950 bg-neutral-50 dark:bg-neutral-950 dark:text-neutral-50;
}
</style>
