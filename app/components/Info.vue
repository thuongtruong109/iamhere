<script setup lang="ts">
import { infoQuery } from "~/queries/info";

const { data: info } = useQuery(infoQuery);

const SvgMap = defineAsyncComponent(() => import("@/components/Map.vue"));
</script>

<template>
  <UCard class="w-full rounded-2xl shadow-lg">
    <div class="flex justify-between items-center mb-4">
      <h2
        class="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center"
      >
        <div
          class="relative size-3 mr-2 rounded-full"
          :class="
            info.data.status === 'success' ? 'bg-green-500' : 'bg-red-500'
          "
        >
          <span
            class="absolute inset-0 size-full rounded-full animate-ping"
            :class="
              info.data.status === 'success' ? 'bg-green-500' : 'bg-red-500'
            "
          />
        </div>
        <span>
          {{ info.data.query }}
        </span>
      </h2>
      <div class="flex items-center space-x-1">
        <img
          :src="`https://flagsapi.com/${info.data.CountryCode}/flat/24.png`"
          alt="Country Flag"
        />
        <span class="text-sm font-medium">{{ info.data.CountryCode }}</span>
      </div>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-8 text-gray-700 dark:text-gray-400 text-sm [&>p]:flex [&>p]:items-center [&>p]:space-x-1"
    >
      <p>
        <UIcon name="mingcute:location-line" size="15" /><span>{{
          info.data.City
        }}</span>
      </p>
      <p>
        <UIcon name="carbon:data-center" /><span>{{
          info.data.CountryName
        }}</span>
      </p>
      <p>
        <UIcon name="hugeicons:star" /><span>{{ info.data.Capital }}</span>
      </p>
      <p>
        <UIcon name="icon-park-outline:time" /><span>{{
          info.data.TimeZone
        }}</span>
      </p>
      <p>
        <UIcon name="mynaui:map" /><span>{{ info.data.Latitude }}°</span
        ><span>/</span><span>{{ info.data.Longitude }}°</span>
      </p>
      <p>
        <UIcon name="solar:phone-linear" /><span>{{
          info.data.PhonePrefix
        }}</span>
      </p>
      <p>
        <UIcon name="solar:letter-linear" /><span>{{ info.data.Postal }}</span>
      </p>
      <p>
        <UIcon name="icon-park-outline:connection-arrow" size="11" /><span>{{
          info.data.asn
        }}</span>
      </p>
      <p>
        <UIcon name="ep:connection" /><span>{{ info.data.org }}</span>
      </p>
      <p>
        <UIcon name="solar:wad-of-money-linear" size="15" /><span>{{
          info.data.Currency
        }}</span>
      </p>
      <p>
        <UIcon name="iconoir:dollar-circle" /><span>{{
          Number(info.data.USDRate).toLocaleString()
        }}</span>
      </p>
      <p>
        <UIcon name="material-symbols:euro" />
        <span>{{ Number(info.data.EURRate).toLocaleString() }}</span>
      </p>
    </div>

    <ClientOnly>
      <Network />
      <SvgMap
        :country-code="info.data.CountryCode"
        :country-name="info.data.CountryName"
      />
    </ClientOnly>
  </UCard>
</template>
