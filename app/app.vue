<script setup>
useHead({
  htmlAttrs: { lang: "en" },
  link: [{ rel: "icon", href: "/icon.png" }],
});

useSeoMeta({
  viewport: "width=device-width, initial-scale=1.0",
  title: "Locanet",
  description: "Detect user access location information along with IP address",
  ogImage: "/banner.png",
  twitterImage: "/banner.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <UApp>
    <UContainer class="min-h-screen flex flex-col pt-4 space-y-8">
      <UCard variant="subtle" color="primary">
        <template #header>
          <Header />
        </template>
        <ClientOnly>
          <Info />
        </ClientOnly>
      </UCard>
      <Landing />
      <USeparator class="my-4" />
      <Footer />
    </UContainer>
  </UApp>
</template>

<style lang="postcss">
body {
  @apply font-sans text-neutral-950 bg-neutral-50 dark:bg-neutral-950 dark:text-neutral-50;
}
</style>
