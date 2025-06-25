<script setup>
useHead({
  htmlAttrs: { lang: "en" },
  link: [{ rel: "icon", href: "/icon.png" }],
});

useSeoMeta({
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  title: "Locanet",
  description: "Location information of the user based on the IP address",
  ogImage: "/social-image.png",
  twitterImage: "/social-image.png",
  twitterCard: "summary_large_image",
});

const SvgMap = defineAsyncComponent(() => import("@/components/Map.vue"));
</script>

<template>
  <UApp>
    <UContainer class="min-h-screen flex flex-col my-4">
      <UCard variant="subtle">
        <template #header>
          <Header />
        </template>
        <Info />
        <USeparator class="my-4" />
        <client-only>
          <SvgMap />
        </client-only>
        <Footer />
      </UCard>
    </UContainer>
  </UApp>
</template>

<style lang="postcss">
body {
  @apply font-sans text-neutral-950 bg-neutral-50 dark:bg-neutral-950 dark:text-neutral-50;
}
</style>
