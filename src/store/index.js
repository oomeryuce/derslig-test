import { createStore } from "vuex";
import events from "./events";
import payment from "./payment";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  modules: {
    events,
    payment,
  },
  plugins: [createPersistedState()],
});
