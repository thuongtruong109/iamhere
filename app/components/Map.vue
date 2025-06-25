<template>
  <div id="svgMap" ref="map" class="w-full h-full" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import svgMap from "svgmap";

const map = ref(null);

onMounted(() => {
  new svgMap({
    targetElementID: "svgMap",
    mouseWheelZoomEnabled: false,
    hideFlag: false,
    countries: {
      UA: "dshs",
    },
    data: {
      data: {
        countresidents: {
          format: "{0}",
          thousandSeparator: ",",
          thresholdMax: 50000,
          thresholdMin: 1000,
        },
      },
      applyData: "countresidents",
      values: {
        UA: { countresidents: 42393 },
      },
    },
  });
});
</script>

<style scoped>
/* .svgMap-tooltip {
  background: rgba(31, 41, 55, 0.9);
  box-shadow: 0px 4px 8px rgba(24, 33, 45, 0.4);
  border-radius: 11px;
  color: #ffffff !important;
}
.svgMap-tooltip .svgMap-tooltip-content-wrapper {
  color: #ffffff !important;
}
.svgMap-tooltip .svgMap-tooltip-content .svgMap-tooltip-no-data {
  color: #ffffff !important;
}
.svgMap-tooltip .svgMap-tooltip-content {
  color: #ffffff !important;
}
.svgMap-tooltip .svgMap-tooltip-content table td span {
  color: #ffffff;
}

.svgMap-tooltip-pointer {
  display: none;
}
.svgMap-tooltip .svgMap-tooltip-title {
  padding: 0;
}
.svgMap-tooltip .svgMap-tooltip-content-container {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.svgMap-tooltip .svgMap-tooltip-content-container .svgMap-tooltip-content {
  font-weight: 500;
} */
/* .svgMap-tooltip .svgMap-tooltip-flipped {
} */
</style>
