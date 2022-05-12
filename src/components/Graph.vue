<script setup lang="ts">
import { computed, watch, watchEffect } from "vue";
import { line } from "d3-shape";
import { scaleTime, scaleLinear } from "d3-scale";
import { extent } from "d3-array";
import { add } from "date-fns";

const props = defineProps(["data", "timestamp", "start", "sel"]);
watchEffect(() => console.log(props.sel));

//const data = [];
// const data = [
//   { value: -2, userId: "a12", datetime: add(new Date(), { seconds: 1 }) },
//   { value: 421, userId: "a12", datetime: add(new Date(), { seconds: 10 }) },
//   { value: 421, userId: "a12", datetime: add(new Date(), { seconds: 40 }) },
//   { value: 1000, userId: "ffa", datetime: add(new Date(), { seconds: 1 }) },
//   { value: 212, userId: "ffa", datetime: add(new Date(), { seconds: 10 }) },
//   { value: 21, userId: "ffa", datetime: add(new Date(), { seconds: 40 }) },
// ];

const width = 800;
const height = 100;
const p = 5;

// const xDomain = computed<any>(() => extent(data, (d) => new Date(d.datetime)));
// const yDomain = computed<any>(() => extent(data, (d) => d.value.length));

const x = (dd) =>
  scaleTime()
    .domain(extent(dd, (d) => new Date(d.datetime)))
    .range([p, width - p]);

const y = (dd) =>
  scaleLinear()
    .domain(extent(dd, (d) => d.value.length))
    .range([p, height - p]);

// const y = computed(() =>
//   scaleLinear()
//     .domain(yDomain.value)
//     .range([p, height - p])
// );

// const d = computed(() =>
//   line()
//     .x((d) => x.value(new Date(d.datetime)))
//     .y((d) => 10 /* y.value(d.value)*/)(data)
// );

// watch(
//   () => props,
//   () => {
//     console.log(props);
//   }
// );
</script>

<template>
  <svg :width="width" :height="height">
    <line
      v-for="(c, i) in data"
      :x1="x(data)(new Date(c.datetime))"
      :y1="height - y(data)(c.value.length)"
      :x2="x(data)(new Date(c.datetime))"
      :y2="height"
      :stroke="sel && sel === i ? 'white' : 'blue'"
      stroke-width="3"
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
  <!-- {{ new Date(timestamp) }} -->
  <br />
</template>
