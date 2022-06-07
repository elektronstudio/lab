<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { sub, compareDesc, format, differenceInMinutes, add } from "date-fns";
import Graph from "../../components/Graph.vue";
import Graph2 from "../../components/Graph2.vue";
//import { data as sliderData } from "../data/data";
import { csvParse } from "d3-dsv";
import { useRoute } from "vue-router";

import { processedVideos } from "../../state";

/*
const PAGE = 1000000000;

const videoUrl = `https://ws.elektron.art/messages?secret=eestiteatriauhinnad&type=VIDEO`;
const videos = ref([]);

fetch(videoUrl)
  .then((r) => r.json())
  .then((r) => (videos.value = r));

const eventsUrl = `https://strapi.elektron.art/events?_limit=-1`;
const events = ref([]);

fetch(eventsUrl)
  .then((r) => r.json())
  .then((r) => (events.value = r));

function formatDuration(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  return `${hours}h ${minutes}m ${seconds}s`;
}

function formatDatetime(date: Date) {
  return format(date, "dd.MM.yyyy HH:mm:ss");
}

function getKey(key: string) {
  if (key === "x_live_1") {
    return "elektron";
  }
  return key.split("_")[0];
}

function processVideo(video: any, events: any) {
  const path = video.value.path;
  const name = video.value.files[0].name;
  const key = getKey(video.value.original);
  const videoUrl = `https://pepe-dl.babahhcdn.com/bb1150/${path}/${name}`;
  const lastModified = name.split(".")[0].split("_").slice(-1)[0];
  const endDatetime = new Date(parseInt(lastModified) * 1000);
  const startDatetime = sub(endDatetime, { seconds: video.value.duration });
  const uploadDatetime = new Date(video.datetime);

  const getEvent = (key: any, startDatetime: any) => {
    return events.value
      .map((e: any) => {
        const diff = Math.abs(
          differenceInMinutes(new Date(e.start_at), startDatetime)
        );
        const relativeDiff = differenceInMinutes(
          startDatetime,
          new Date(e.start_at)
        );
        const suffix =
          relativeDiff <= -1
            ? "min earlier"
            : relativeDiff > 1
            ? "min later"
            : " on time";
        return { ...e, diff, formattedDiff: Math.abs(relativeDiff) + suffix };
      })
      .filter((e: any) => e.diff < 120)[0];
  };

  video.value.data = {
    path,
    name,
    videoUrl,
    lastModified,
    startDatetime,
    endDatetime,
    uploadDatetime,
    key,
    event: getEvent(key, startDatetime),
  };
  return video;
}
function sortVideo(video: any, video2: any) {
  return compareDesc(
    video.value.data.startDatetime,
    video2.value.data.startDatetime
  );
}

const processedVideos = computed(() =>
  videos.value.map((v) => processVideo(v, events)).sort(sortVideo)
);

*/
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
const sliderData = computed(() => csvParse(csv.value));
//const user = "gaitzbxocvshrdly";
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
      <pre>{{ timestamp }}</pre>
      <br />
      <Graph2
        :data="sliderData"
        :timestamp="absoluteTimestamp?.toISOString()"
        :sel="sel"
      />
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
          height: 33vw;
        "
      />

      <br />
      <div style="display: flex; overflow: scroll; width: 800px; gap: 16px">
        <div
          v-for="(c, i) in chat"
          style="width: 150px"
          class="chat"
          @click="sel = i"
        >
          <div style="margin-bottom: 8px">
            <code>
              {{ formatDatetime(new Date(c.datetime)) }} / {{ c.userName }}
            </code>
          </div>
          <div style="margin-bottom: 10px">{{ c.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
