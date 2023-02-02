<template>
  <div class="px-2 sm:px-6 lg:px-20 2xl:px-80 py-6">
    <LoadingBar v-if="events.eventLoading" />
    <EventPage
      v-else-if="!events.eventLoading && events.event"
      :event="events.event"
      :seat="true"
    />
    <SeatPlans
      v-if="!events.eventLoading && events.event"
      :category="category"
      :event="events.event"
    />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import EventPage from "../components/EventPage.vue";
import SeatPlans from "../components/SeatPlans.vue";
import LoadingBar from "../components/LoadingBar.vue";
export default {
  components: { EventPage, SeatPlans, LoadingBar },
  setup() {
    const route = useRoute();
    const store = useStore();
    const events = computed(() => store.state.events);
    const category = computed(() => parseInt(route.query.category));
    store.dispatch("events/getEventById", route.params.id);
    return {
      events,
      category,
    };
  },
  unmounted() {
    const store = useStore();
    store.dispatch("events/clearEvent");
  },
};
</script>
