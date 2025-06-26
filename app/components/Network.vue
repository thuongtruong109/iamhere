<template>
  <div class="w-full text-center pt-4">
    <UButton
      class="cursor-pointer mb-2"
      variant="solid"
      color="primary"
      :disabled="testing"
      @click="runSpeedTest"
    >
      <UIcon
        :name="testing ? 'tdesign:load' : 'ic:outline-network-check'"
        :class="{
          'animate-spin': testing,
        }"
      />
      <span>{{ testing ? "Testing ..." : "Speed Test" }}</span>
    </UButton>

    <p v-if="testing" class="text-sm text-gray-500 animate-pulse">
      Testing... please wait
    </p>

    <div
      v-if="!testing && downloadSpeed && uploadSpeed"
      class="w-full max-w-md mx-auto"
    >
      <div
        class="w-full h-3 bg-gray-200 rounded-full overflow-hidden flex shadow-inner"
        :class="{
          'animate-pulse': testing === 0,
        }"
      >
        <div
          class="bg-blue-500 transition-all duration-500"
          :style="{ width: uploadPercent + '%' }"
          title="Upload"
        />
        <div
          class="bg-green-500 transition-all duration-500"
          :style="{ width: downloadPercent + '%' }"
          title="Download"
        />
      </div>

      <div class="flex justify-between text-sm mt-2">
        <span class="text-blue-600">Upload: {{ uploadSpeed }} Mbps</span>
        <span class="text-green-600">Download: {{ downloadSpeed }} Mbps</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const downloadSpeed = ref(0);
const uploadSpeed = ref(0);
const testing = ref(false);

// const connectInfo = navigator.connection.effectiveType

const totalSpeed = computed(() => {
  return parseFloat(uploadSpeed.value) + parseFloat(downloadSpeed.value) || 1;
});

const uploadPercent = computed(() =>
  ((uploadSpeed.value / totalSpeed.value) * 100).toFixed(2)
);
const downloadPercent = computed(() =>
  ((downloadSpeed.value / totalSpeed.value) * 100).toFixed(2)
);

const runSpeedTest = async () => {
  testing.value = true;

  const downloadUrl =
    "https://raw.githubusercontent.com/thuongtruong109/locanet/main/public/banner.png";
  const startDownload = performance.now();
  const downloadResp = await fetch(downloadUrl);
  const blob = await downloadResp.blob();
  const endDownload = performance.now();
  const sizeMB = blob.size / (1024 * 1024);
  const durationSec = (endDownload - startDownload) / 1000;
  downloadSpeed.value = (sizeMB / durationSec).toFixed(2);

  const data = new Uint8Array(5 * 1024 * 1024);
  const uploadStart = performance.now();
  await fetch("https://httpbin.org/post", {
    method: "POST",
    body: data,
  });
  const uploadEnd = performance.now();
  uploadSpeed.value = (5 / ((uploadEnd - uploadStart) / 1000)).toFixed(2);

  testing.value = false;
};
</script>
