<script setup lang="ts">
import { jobSearch } from "~/lib/sdk";
// we render the job search initial view on the server to avoid CLS
const ssr = jobSearch.renderToString();
</script>

<script lang="ts">
  // we only hydrate the client side
if (process.client) import("~/lib/sdk").then((m) => m.jobSearch.render());
</script>

<template>
  <div id="inploi-job-search" v-html="ssr"></div>
</template>


