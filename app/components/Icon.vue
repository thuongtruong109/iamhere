<script setup lang="ts">
const props = defineProps<{
  name: string;
  size?: number;
}>();

const size = `size-${props.size || 3}`;
</script>

<template>
  <!-- https://icones.js.org/collection/lucide -->
  <UIcon :name="props.name" :class="size" />
</template>
