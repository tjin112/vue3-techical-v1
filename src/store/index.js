import { createStore } from "vuex";
import upvote from "./modules/upvote";

export default createStore({
  modules: {
    upvote,
  },
});
