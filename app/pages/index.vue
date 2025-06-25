<script setup lang="ts">
import { infoQuery } from "~/queries/info";

const { data: info } = useQuery(infoQuery);
</script>

<template>
  <div class="flex flex-col gap-4">
    {{ info }}

    <nui-card class="max-w-xl mx-auto p-6">
      <template #header>
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold">IP Info</h2>
          <nui-badge color="success">Status: {{ info.status }}</nui-badge>
        </div>
      </template>

      <nui-divider class="my-4" />

      <div class="space-y-2">
        <p><strong>IP Address:</strong> {{ info.query }}</p>
        <p>
          <strong>Country:</strong> {{ info.CountryName }} ({{
            info.CountryCode
          }})
        </p>
        <p>
          <strong>Region:</strong> {{ info.RegionName }} ({{ info.RegionCode }})
        </p>
        <p><strong>City:</strong> {{ info.City }} — {{ info.Postal }}</p>
        <p><strong>Capital:</strong> {{ info.Capital }}</p>
        <p>
          <strong>Continent:</strong> {{ info.ContinentName }} ({{
            info.ContinentCode
          }})
        </p>
        <p>
          <strong>Latitude / Longitude:</strong> {{ info.Latitude }},
          {{ info.Longitude }}
        </p>
        <p><strong>TimeZone:</strong> {{ info.TimeZone }}</p>
      </div>

      <nui-divider class="my-4" />

      <div class="space-y-2">
        <p><strong>Phone Prefix:</strong> {{ info.PhonePrefix }}</p>
        <p><strong>Currency:</strong> {{ info.Currency }}</p>
        <p><strong>USD Rate:</strong> {{ info.USDRate }}</p>
        <p><strong>EUR Rate:</strong> {{ info.EURRate }}</p>
      </div>

      <nui-divider class="my-4" />

      <div class="space-y-2">
        <p><strong>ASN:</strong> {{ info.asn }}</p>
        <p><strong>Organization:</strong> {{ info.org }}</p>
      </div>
    </nui-card>
    <p>
      It is made using
      <a href="https://hub.nuxt.com" class="text-(--ui-primary)">NuxtHub</a> for
      a zero-config development & deployment experience on Cloudflare.
    </p>
    <USeparator />
  </div>
</template>
