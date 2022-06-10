<script setup lang="ts">
import { computed, watch, watchEffect } from "vue";
import { line } from "d3-shape";
import { scaleTime, scaleLinear } from "d3-scale";
import { extent } from "d3-array";
import { add } from "date-fns";
import { polygonpath } from "fachwerk";
import { sub } from "date-fns";

const props = defineProps(["data", "timestamp", "start", "end"]);

const width = 800;
const height = 100;
const p = 5;

// const xDomain = computed<any>(() => extent(data, (d) => new Date(d.datetime)));
// const yDomain = computed<any>(() => extent(data, (d) => d.value.length));

const x = () =>
  scaleTime()
    .domain([
      sub(new Date(props.start), { seconds: 30 }),
      add(new Date(props.end), { seconds: 30 }),
    ])
    .range([p, width - p]);

// const y = () =>
//   scaleLinear()
//     .domain([1, 10])
//     .range([p, height * 0.8 - p]);
</script>

<template>
  <div>
    <svg :width="width" :height="height">
      <path
        :d="
          polygonpath(
            data.map((d) => [
              x()(new Date(d.datetime)),
              height - parseFloat(d.value) * 8,
            ])
          )
        "
        stroke="rgba(100,200,255,0.5)"
        stroke-width="2"
        opacity="1"
        fill="none"
      />
      <line
        :x1="x()(new Date(timestamp))"
        :y1="0"
        :x2="x()(new Date(timestamp))"
        :y2="height"
        stroke="red"
        stroke-width="3"
        opacity="0.5"
        fill="none"
      />
      <line
        :x1="x()(start)"
        :y1="height - 5"
        :x2="x()(end)"
        :y2="height - 5"
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        stroke-width="10"
      />
      <line
        x1="0"
        :y1="height"
        :x2="width"
        :y2="height"
        stroke="rgba(255,255,255,0.2)"
        stroke-width="2"
      />
    </svg>
  </div>
</template>
