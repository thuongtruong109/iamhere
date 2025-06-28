<script setup>
const badge = "FEATURES";
const title = "The Best Data in the Industry";
const description = "Access accurate, fast, and consistently available data.";

const features = [
  {
    img: "/landing/1.svg",
    alt: "Target Icon",
    title: "Geolocation Data",
    description: "Pinpoint user location down to city and postal code.",
  },
  {
    img: "/landing/2.svg",
    alt: "Shield Icon",
    title: "Intelligence Feeds",
    description: "Instantly check IPs across 100+ threat feeds.",
  },
  {
    img: "/landing/3.svg",
    alt: "Signal Icon",
    title: "Proxy & VPN Detection",
    description: "Spot anonymous users and block fraud risks.",
  },
  {
    img: "/landing/4.svg",
    alt: "Router Icon",
    title: "Company Data",
    description: "Identify the business or owner behind an IP.",
  },
  {
    img: "/landing/5.svg",
    alt: "Server Icon",
    title: "Usage Type",
    description: "Classify IPs by ISP, datacenter, or business.",
  },
  {
    img: "/landing/6.svg",
    alt: "Bolt Icon",
    title: "IP Reputation",
    description: "AI-powered scores for threat and risk analysis.",
  },
];

function getGridItemClasses(index) {
  const i = index + 1;
  const base = [];

  const borderClasses = [];

  if (i === 2 || i === 5) {
    borderClasses.push(
      "md:border-l",
      "md:border-r",
      "md:border-gray-200",
      "dark:md:border-gray-700",
      "md:px-3"
    );
  }

  if (i === 4 || i === 5 || i === 6) {
    borderClasses.push(
      "md:border-t",
      "md:border-gray-200",
      "dark:md:border-gray-700",
      "md:pt-3"
    );
  }

  if (i === 1 || i === 2 || i === 3) {
    borderClasses.push("pb-3");
  }

  if (i === 1 || i === 4) {
    borderClasses.push("pr-3");
  }

  if (i === 3 || i === 6) {
    borderClasses.push("pl-3");
  }

  return [...base, ...borderClasses].join(" ");
}
</script>

<template>
  <section class="flex flex-col items-center">
    <span
      class="inline-block mb-3 text-xs font-medium rounded-full px-3 py-1 bg-blue-100 text-blue-600 dark:bg-blue-300/10 dark:text-blue-300"
    >
      {{ badge }}
    </span>

    <h2 class="text-sm sm:text-2xl font-medium mb-3">
      {{ title }}
    </h2>
    <p class="text-[#5B6B8A] text-sm sm:text-base max-w-xl mx-auto mb-12">
      {{ description }}
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <div
        v-for="(feature, index) in features"
        :key="index"
        :class="getGridItemClasses(index)"
      >
        <img
          :src="feature.img"
          :alt="feature.alt"
          width="40"
          height="40"
          class="mx-auto mb-3"
        />
        <h3 class="text-base font-normal mb-1 text-center">
          {{ feature.title }}
        </h3>
        <p
          class="text-[#8B9AB8] text-xs sm:text-sm text-center max-w-[220px] mx-auto"
        >
          {{ feature.description }}
        </p>
      </div>
    </div>
  </section>
</template>
