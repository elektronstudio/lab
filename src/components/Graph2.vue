<script setup lang="ts">
import { computed, watch, watchEffect } from "vue";
import { line } from "d3-shape";
import { scaleTime, scaleLinear } from "d3-scale";
import { extent } from "d3-array";
import { add } from "date-fns";
import { polygonpath } from "fachwerk";

const props = defineProps(["data", "timestamp", "start", "sel"]);

const width = 800;
const height = 100;
const p = 5;

// const xDomain = computed<any>(() => extent(data, (d) => new Date(d.datetime)));
// const yDomain = computed<any>(() => extent(data, (d) => d.value.length));

const x = (dd: any) =>
  scaleTime()
    .domain(extent(dd, (d) => new Date(d.datetime)))
    .range([p, width - p]);

const y = (dd) =>
  scaleLinear()
    .domain(extent(dd, (d) => parseFloat(d.value)))
    .range([p, height * 0.8 - p]);
</script>

<template>
  <svg :width="width" :height="height">
    <path
      :d="
        polygonpath(
          data.map((d) => [
            x(data)(new Date(d.datetime)),
            height - parseFloat(d.value) * 8,
          ])
        )
      "
      stroke="rgba(50,150,255,0.5)"
      stroke-width="2"
      opacity="1"
      fill="none"
    />
    <line
      :x1="x(data)(new Date(timestamp))"
      :y1="0"
      :x2="x(data)(new Date(timestamp))"
      :y2="height"
      stroke="red"
      stroke-width="3"
      opacity="0.5"
      fill="none"
    />
  </svg>
</template>
