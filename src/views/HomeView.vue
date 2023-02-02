<template>
  <main class="flex flex-col px-2 sm:px-6 lg:px-20 2xl:px-80 py-6">
    <span class="text-lg font-semibold">Events</span>
    <LoadingBar v-if="events.eventLoading" />
    <div
      v-else-if="!events.eventLoading && events && events.events.length > 0"
      class="grid grid-cols-2 gap-4"
    >
      <div
        v-for="event in events.events"
        :key="event.id"
        class="col-span-2 lg:col-span-1"
      >
        <EventCard :event="event" />
      </div>
    </div>
  </main>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import EventCard from "../components/EventCard.vue";
import LoadingBar from "../components/LoadingBar.vue";
export default {
  components: { EventCard, LoadingBar },
  setup() {
    const store = useStore();
    const events = computed(() => store.state.events);
    store.dispatch("events/getEvents");
    return {
      events,
    };
  },
};
</script>
