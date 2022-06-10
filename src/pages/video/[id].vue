<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { sub, compareDesc, format, differenceInMinutes, add } from "date-fns";
import Graph from "../../components/Graph.vue";
import Graph2 from "../../components/Graph2.vue";
import { sliderData as savedSliderData } from "../../data/data";
import { csvParse } from "d3-dsv";
import { useRoute } from "vue-router";

import { processedVideos } from "../../state";

const unique = (arr: any[]) => [...new Set(arr)];

const route = useRoute();
console.log(route.params.id);

const selected = computed(
  () => processedVideos.value.filter((v) => v.id == route.params.id)[0]
);

const chat = ref<any>([]);

// const onSelect = (index: number) => {
//   selected.value = processedVideos.value[index];
//   const chatUrl = `https://ws.elektron.art/messages?secret=eestiteatriauhinnad&channel=${selected.value.value.data.event?.slug}`;
//   fetch(chatUrl)
//     .then((r) => r.json())
//     .then((r) => (chat.value = r));
// };

const video = ref<any>(null);

const timestamp = ref<any>(null);

const absoluteTimestamp = computed(() => {
  if (selected.value?.value?.data) {
    return add(selected.value.value.data.startDatetime, {
      seconds: timestamp.value,
    });
  }
  return null;
});

onMounted(() => {
  if (video.value) {
    video.value.addEventListener("timeupdate", (d) => {
      timestamp.value = d?.target.currentTime;
    });
    video.value.addEventListener("seeked", (d) => {
      timestamp.value = d?.target.currentTime;
    });
  }
});

const sel = ref(0);
const csv = ref("");
const json = ref("");
const sliderData = ref<any[]>([]);

sliderData.value = savedSliderData;

watch(csv, () => {
  sliderData.value = csvParse(csv.value);
});

watch(json, () => {
  sliderData.value = JSON.parse(json.value);
});
//const user = "gaitzbxocvshrdly";

const userId = ref(null);

const userIds = computed(() => unique(sliderData.value.map((c) => c.userId)));
const usersSliderData = computed(() => {
  return userIds.value.map((userId: string) =>
    sliderData.value.filter((d) => d.userId === userId)
  );
});

console.log(selected.value);
</script>
<template>
  <div>
    <RouterLink
      style="cursor: pointer; display: block; margin-bottom: 16px"
      to="/"
    >
      Back
    </RouterLink>
    <div v-if="selected">
      <video
        ref="video"
        style="width: 50%; aspect-ratio: 16 / 9"
        :src="selected.value?.data?.videoUrl"
        controls
      />
      <pre>{{ absoluteTimestamp }}</pre>
      <br />
      <div style="position: relative; height: 100px">
        <Graph2
          v-for="userSliderData in usersSliderData"
          :data="userSliderData"
          :timestamp="absoluteTimestamp?.toISOString()"
          :start="selected.value.data.startDatetime"
          :end="selected.value.data.endDatetime"
          style="position: absolute; top: 0; right: 0; bottom: 0; left: 0"
        />
      </div>
      <p />
      <textarea
        placeholder="Paste CVS data here"
        v-model="csv"
        style="
          color: white;
          background: black;
          border: 1px solid black;
          padding: 8px;
          width: 100%;
          height: 20vw;
        "
      />
      <textarea
        placeholder="OR paste JSON data here"
        v-model="json"
        style="
          color: white;
          background: black;
          border: 1px solid black;
          padding: 8px;
          width: 100%;
          height: 20vw;
        "
      />
    </div>
  </div>
</template>
