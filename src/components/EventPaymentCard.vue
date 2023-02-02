<template>
  <div class="grid grid-cols-1 gap-4">
    <div
      class="hidden md:block relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
    >
      <img
        :src="event.image_url"
        :alt="event.title"
        class="h-full w-full object-cover object-center"
      />
    </div>
    <div
      class="relative w-full flex flex-row space-y-2 md:space-y-0 justify-between rounded-xl border p-4 pl-7"
    >
      <div class="flex space-x-4">
        <div class="flex flex-col text-center justify-center">
          <span class="text-xl font-semibold">{{
            isNaN(new Date(event.event_date))
              ? new Date(2023, 1, 17, 20, 0).getDate()
              : new Date(event.event_date).getDate()
          }}</span>
          <span class="text-xs font-medium">{{
            isNaN(new Date(event.event_date))
              ? getMonth(new Date(2023, 1, 17, 20, 0).getMonth())
              : getMonth(new Date(event.event_date).getMonth())
          }}</span>
        </div>
        <div class="h-full border"></div>
        <div class="flex flex-col justify-center">
          <span class="font-semibold text-sm">{{
            getTime(event.event_date)
          }}</span>
          <span>{{ event.venue.name }}</span>
          <span class="text-2xl font-medium">{{ event.title }}</span>
        </div>
      </div>
      <div class="flex space-x-4">
        <div class="h-full border border-dashed"></div>
        <div class="flex flex-col justify-center">
          <span class="text-sm font-medium">Seat Information</span>
          <span>Line: {{ seat.row }}</span>
          <span>Seat: {{ seat.seat }}</span>
        </div>
      </div>
      <div
        class="absolute left-0 -top-2 md:top-0 w-3 h-full bg-blue-700 rounded-l-xl"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
    seat: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getTime(time) {
      let date = new Date(time);
      if (isNaN(date)) {
        date = new Date(2023, 2, 17, 20, 0);
      }
      return (
        date.getHours() +
        ":" +
        (date.getMinutes() === 0 ? "00" : date.getMinutes())
      );
    },
    getMonth(month) {
      const months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
      };
      return months[month];
    },
  },
};
</script>
