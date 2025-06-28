<script setup lang="ts">
import type { LargeInfo, MediumInfo, V6Info } from "~~/types/info";

const SvgMap = defineAsyncComponent(() => import("@/components/Map.vue"));

const isV6 = ref<boolean>(false);
const toggleV6 = () => {
  isV6.value = !isV6.value;
};

const config = useRuntimeConfig();

const { data: info } = await useAsyncData("info", async () => {
  const [medium, large, v6] = await Promise.all<
    [MediumInfo, LargeInfo, V6Info]
  >([
    $fetch(config.public.mediumApiUrl),
    $fetch(config.public.largeApiUrl),
    $fetch(config.public.v6ApiUrl),
  ]);

  return {
    medium,
    large,
    v6,
  };
});
</script>

<template>
  <section class="w-full">
    <div class="flex justify-between items-center mb-4">
      <div class="flex items-center space-x-2">
        <img
          :src="`https://flagsapi.com/${info?.medium?.CountryCode}/flat/24.png`"
          alt="Country Flag"
          width="24"
          height="24"
        />

        <p
          class="text-sm sm:text-base md:text-lg font-bold text-gray-800 dark:text-gray-200 truncate overflow-hidden"
        >
          {{ isV6 ? info?.v6?.ip : info?.medium?.query }}
        </p>
      </div>
      <div
        class="flex items-center border border-slate-200 dark:border-gray-700 rounded-md p-0.5 cursor-pointer"
      >
        <UButton
          type="button"
          title="Ipv4"
          size="xs"
          :color="isV6 ? 'neutral' : 'primary'"
          :variant="isV6 ? 'ghost' : 'soft'"
          :disabled="!isV6"
          @click="toggleV6"
        >
          v4
        </UButton>
        <UButton
          type="button"
          title="Ipv6"
          size="xs"
          :color="isV6 ? 'primary' : 'neutral'"
          :variant="isV6 ? 'soft' : 'ghost'"
          :disabled="isV6"
          @click="toggleV6"
        >
          v6
        </UButton>
      </div>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-8 text-gray-700 dark:text-gray-400 text-sm [&>p]:flex [&>p]:items-center [&>p]:space-x-1 [&>p>a]:text-green-700 dark:[&>p>a]:text-green-400 [&>p>a]:hover:underline"
    >
      <p>
        <UIcon name="mingcute:location-line" size="15" />
        <a
          :href="`https://www.bing.com/search?q=${info?.medium?.City}`"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="City"
          >{{ info?.medium?.City }}</a
        >
      </p>
      <p>
        <UIcon name="carbon:data-center" /><span>{{
          info?.medium?.CountryName
        }}</span>
        <a
          :href="`https://www.ip2location.com/${info?.medium?.CountryCode.toLowerCase()}`"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Country Code"
          >({{ info?.medium?.CountryCode }})</a
        >
      </p>
      <p>
        <UIcon name="hugeicons:star" />
        <a
          :href="`https://en.wikipedia.org/wiki/${info?.medium?.Capital}`"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Capital"
          >{{ info?.medium?.Capital }}</a
        >
      </p>
      <p>
        <UIcon name="icon-park-outline:time" /><span>{{
          info?.medium?.TimeZone
        }}</span>
      </p>
      <p>
        <UIcon name="solar:flip-vertical-line-duotone" size="12" />
        <a
          :href="`http://www.latlong.net/c/?lat=${info?.medium?.Latitude}&long=${info?.medium?.Longitude}`"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Coordinates"
          >{{ info?.medium?.Latitude }}, {{ info?.medium?.Longitude }}</a
        >
      </p>
      <p>
        <UIcon name="mynaui:map" /><span
          >{{ info?.large?.timezone?.utc }} ({{
            info?.large?.region_code
          }})</span
        >
      </p>
      <p>
        <UIcon name="ion:earth-outline" /><span
          >{{ info?.medium?.ContinentName }} ({{
            info?.medium?.ContinentCode
          }})</span
        >
      </p>
      <p>
        <UIcon name="solar:phone-linear" /><span>{{
          info?.medium?.PhonePrefix
        }}</span>
      </p>
      <p>
        <UIcon name="solar:letter-linear" /><span>{{
          info?.medium?.Postal
        }}</span>
      </p>
      <p>
        <UIcon name="icon-park-outline:connection-arrow" size="11" /><span>{{
          info?.medium?.asn
        }}</span>
      </p>
      <p>
        <UIcon name="ep:connection" />
        <a
          :href="`https://${info?.large?.connection?.domain}`"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Organization"
          >{{ info?.medium?.org }}</a
        >
      </p>
      <p>
        <UIcon name="solar:wad-of-money-linear" size="15" /><span>{{
          info?.medium?.Currency
        }}</span>
      </p>
      <p>
        <UIcon name="iconoir:dollar-circle" /><span>{{
          Number(info?.medium?.USDRate).toLocaleString()
        }}</span>
      </p>
      <p>
        <UIcon name="material-symbols:euro" />
        <span>{{ Number(info?.medium?.EURRate).toLocaleString() }}</span>
      </p>
      <p>
        <UIcon name="mdi:weather-hail" size="15" /><span>{{
          info?.v6?.weather
        }}</span>
      </p>
    </div>

    <ClientOnly>
      <Network />
      <SvgMap
        :country-code="info?.medium?.CountryCode"
        :country-name="info?.medium?.CountryName"
      />
    </ClientOnly>
  </section>
</template>
