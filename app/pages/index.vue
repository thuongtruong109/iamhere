<script setup lang="ts">
import { infoQuery } from "~/queries/info";

const { data: info } = useQuery(infoQuery);
</script>

<template>
  <UCard class="w-full rounded-2xl shadow-lg">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold text-gray-800 flex items-center">
        <span
          class="size-3 mr-2 rounded-full"
          :class="
            info.data.status === 'success' ? 'bg-green-500' : 'bg-red-500'
          "
        />{{ info.data.query }}
      </h2>
      <div class="flex items-center space-x-1">
        <img
          :src="`https://flagsapi.com/${info.data.CountryCode}/flat/24.png`"
        />
        <span class="text-sm"
          >{{ info.data.CountryName }} ({{ info.data.CountryCode }})</span
        >
      </div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-gray-700 text-sm"
    >
      <p>
        <span class="font-medium text-gray-500">IP Address:</span>
        <span class="font-semibold text-black">115.77.20.79</span>
      </p>
      <!-- <p>
        <span class="font-medium text-gray-500"
          ><Icon name="lucide:map-pin" /> Region:</span
        >
        Ho Chi Minh (SG)
      </p> -->
      <p>
        <span class="font-medium text-gray-500">City:</span> Ho Chi Minh City —
        700000
      </p>
      <p><span class="font-medium text-gray-500">Capital:</span> Hanoi</p>
      <p><span class="font-medium text-gray-500">Continent:</span> Asia (AS)</p>
      <p>
        <span class="font-medium text-gray-500">Latitude / Longitude:</span>
        10.822, 106.6257
      </p>
      <p>
        <span class="font-medium text-gray-500">TimeZone:</span>
        Asia/Ho_Chi_Minh
      </p>
      <p><span class="font-medium text-gray-500">Phone Prefix:</span> +84</p>
      <p><span class="font-medium text-gray-500">Currency:</span> VND</p>
      <p><span class="font-medium text-gray-500">USD Rate:</span> 26147.21</p>
      <p><span class="font-medium text-gray-500">EUR Rate:</span> 30349.56</p>
    </div>
  </UCard>
</template>
