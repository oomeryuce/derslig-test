<template>
  <div class="px-2 sm:px-6 lg:px-20 2xl:px-80 py-6">
    <LoadingBar v-if="events.eventLoading" />
    <EventPage
      v-else-if="!events.eventLoading && events.event"
      :event="events.event"
    />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import EventPage from "../components/EventPage.vue";
import LoadingBar from "../components/LoadingBar.vue";
export default {
  components: { EventPage, LoadingBar },
  setup() {
    const route = useRoute();
    const store = useStore();
    const events = computed(() => store.state.events);
    store.dispatch("events/getEventById", route.params.id);
    return {
      events,
    };
  },
  unmounted() {
    const store = useStore();
    store.dispatch("events/clearEvent");
  },
};
</script>
