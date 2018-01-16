<template>
  <div class="detail-page">
    <div class="detail-content">detail-content</div>
    <comment-area class="comment"></comment-area>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CommentArea from '../../components/comment-area/index';

export default Vue.extend({
  components: {
    CommentArea,
  },
});

</script>
<style lang="scss">
  .detail-page {
    position: relative;
    height: 1000px;

    .comment {
      position: absolute;
      right: 0;
      height: 100%;
    }
  }
</style>