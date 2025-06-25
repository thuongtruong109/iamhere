<script setup lang="ts">
import { infoQuery } from "~/queries/info";

const { data: info } = useQuery(infoQuery);
</script>

<template>
  <UCard class="w-full rounded-2xl shadow-lg">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold text-gray-800 flex items-center">
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
        />
        <span class="text-sm font-medium">{{ info.data.CountryCode }}</span>
      </div>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-8 text-gray-700 text-sm [&>p]:flex [&>p]:items-center [&>p]:space-x-1"
    >
      <p>
        <UIcon name="mingcute:location-line" /><span
          class="font-medium text-gray-500"
          >{{ info.data.City }}</span
        >
      </p>
      <p>
        <UIcon name="carbon:data-center" /><span
          class="font-medium text-gray-500"
          >{{ info.data.CountryName }}</span
        >
      </p>
      <p>
        <UIcon name="hugeicons:star" /><span
          class="font-medium text-gray-500"
          >{{ info.data.Capital }}</span
        >
      </p>
      <p>
        <UIcon name="icon-park-outline:time" /><span
          class="font-medium text-gray-500"
          >{{ info.data.TimeZone }}</span
        >
      </p>
      <p>
        <UIcon name="mynaui:map" /><span class="font-medium text-gray-500"
          >{{ info.data.Latitude }}° - {{ info.data.Longitude }}°</span
        >
      </p>
      <p>
        <UIcon name="solar:phone-linear" /><span
          class="font-medium text-gray-500"
          >{{ info.data.PhonePrefix }}</span
        >
      </p>
      <p>
        <UIcon name="solar:letter-linear" /><span
          class="font-medium text-gray-500"
          >{{ info.data.Postal }}</span
        >
      </p>
      <p>
        <UIcon name="icon-park-outline:connection-arrow" /><span
          class="font-medium text-gray-500"
          >{{ info.data.asn }}</span
        >
      </p>
      <p>
        <UIcon name="ep:connection" /><span class="font-medium text-gray-500">{{
          info.data.org
        }}</span>
      </p>
      <p>
        <UIcon name="healthicons:money-bag-outline" /><span
          class="font-medium text-gray-500"
          >{{ info.data.Currency }}</span
        >
      </p>
      <p>
        <UIcon name="mdi:dollar" /><span class="font-medium text-gray-500">{{
          Number(info.data.USDRate).toLocaleString()
        }}</span>
      </p>
      <p>
        <UIcon name="material-symbols:euro" />
        {{ Number(info.data.EURRate).toLocaleString() }}
      </p>
    </div>
  </UCard>
</template>
