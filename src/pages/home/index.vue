<template>
  <div class="upvote-wrap">
    <div class="upvote-container">
      <div v-for="(item, index) in totalUpvote" :key="index">
        <UpvoteIcon />
      </div>
    </div>
    <div class="add-icon-container">
      <div class="add-icon" @click="addUpvote">
        <AddFilledIcon />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import AddFilledIcon from "@/components/icons/addfilledIcon.vue";
import UpvoteIcon from "@/components/upvote/index.vue";
export default defineComponent({
  name: "Home",
  components: { UpvoteIcon, AddFilledIcon },
  setup() {
    let totalUpvote = ref(0);
    const addUpvote = () => {
      totalUpvote.value++;
    };
    return {
      totalUpvote,
      addUpvote,
    };
  },
});
</script>
<style lang="less" scoped>
.upvote-wrap {
  width: 400px;
  margin: 0 auto;
  display: flex;
  align-content: center;
  .upvote-container {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width: 100%;
    min-height: 70px;
    border: 2px solid #f4f6f8;
    border-radius: 5px;
    margin-right: 20px;
  }
  .add-icon-container {
    margin: auto;
    &:hover {
      cursor: pointer;
    }
    .add-icon {
      padding: 10px;
      background: #f4f6f8;
      border-radius: 15px;
    }
  }
}
</style>
