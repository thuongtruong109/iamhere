<script setup lang="ts">
import { infoQuery, v6Query } from "~/queries/info";

const { data: info } = useQuery(infoQuery);
const { data: v6 } = useQuery(v6Query);

const SvgMap = defineAsyncComponent(() => import("@/components/Map.vue"));

const isV6 = ref<boolean>(false);
const toggleV6 = () => {
  isV6.value = !isV6.value;
};
</script>

<template>
  <UCard class="w-full rounded-2xl shadow-lg">
    <div class="flex justify-between items-center mb-4">
      <div class="flex items-center space-x-2">
        <img
          :src="`https://flagsapi.com/${info.CountryCode}/flat/24.png`"
          alt="Country Flag"
        />

        <p
          class="text-sm sm:text-base md:text-lg font-bold text-gray-800 dark:text-gray-200 truncate overflow-hidden"
        >
          {{ isV6 ? v6.ip : info.query }}
        </p>
      </div>
      <div
        class="flex items-center border border-slate-200/50 rounded-md p-0.5 cursor-pointer"
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
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-8 text-gray-700 dark:text-gray-400 text-sm [&>p]:flex [&>p]:items-center [&>p]:space-x-1"
    >
      <p>
        <UIcon name="mingcute:location-line" size="15" /><span>{{
          info.City
        }}</span>
      </p>
      <p>
        <UIcon name="carbon:data-center" /><span
          >{{ info.CountryName }} ({{ info.CountryCode }})</span
        >
      </p>
      <p>
        <UIcon name="hugeicons:star" /><span>{{ info.Capital }}</span>
      </p>
      <p>
        <UIcon name="icon-park-outline:time" /><span>{{ info.TimeZone }}</span>
      </p>
      <p>
        <UIcon name="mynaui:map" /><span>{{ info.Latitude }}°</span
        ><span>/</span><span>{{ info.Longitude }}°</span>
      </p>
      <p>
        <UIcon name="solar:phone-linear" /><span>{{ info.PhonePrefix }}</span>
      </p>
      <p>
        <UIcon name="solar:letter-linear" /><span>{{ info.Postal }}</span>
      </p>
      <p>
        <UIcon name="icon-park-outline:connection-arrow" size="11" /><span>{{
          info.asn
        }}</span>
      </p>
      <p>
        <UIcon name="ep:connection" /><span>{{ info.org }}</span>
      </p>
      <p>
        <UIcon name="solar:wad-of-money-linear" size="15" /><span>{{
          info.Currency
        }}</span>
      </p>
      <p>
        <UIcon name="iconoir:dollar-circle" /><span>{{
          Number(info.USDRate).toLocaleString()
        }}</span>
      </p>
      <p>
        <UIcon name="material-symbols:euro" />
        <span>{{ Number(info.EURRate).toLocaleString() }}</span>
      </p>
    </div>

    <ClientOnly>
      <Network />
      <SvgMap
        :country-code="info.CountryCode"
        :country-name="info.CountryName"
      />
    </ClientOnly>
  </UCard>
</template>
