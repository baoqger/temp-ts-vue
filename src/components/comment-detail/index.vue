<template>
  <div class="comment-detail clearfix">
    <img class="comment-detail-img" src="./u260.png">
    <div class="comment-detail-info">
      <span class="comment-detail-info-name">{{commentObj.name}}</span>
      <span class="comment-detail-info-content">{{commentObj.content}}</span>
      <p class="comment-detail-info-time">{{commentObj.time}}</p>
    </div>
    <img class="comment-detail-set" src="./u300.png">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    commentObj: Object,
  },
});
</script>
<style lang="scss">
  .comment-detail {
    margin-bottom: 15px;

    &-img {
      float: left;
      width: 30px;
      margin: 0 5px;
    }

    &-info {
      float: left;
      left: 50px;
      width: 170px;
      text-align: left;

      &-name {
        font-size: 14px;
        color: black;
      }

      &-content {
        font-size: 12px;
        color: #ccc;
        text-align: left;
      }

      &-time {
        color: #ccc;
        margin-top: 10px;
      }
    }

    &-set {
      float: left;
      right: 0;
      width: 20px;
    }
  }
  .clearfix:after {
    content: '';
    display: block;
    height: 0;
    clear: both;
  }
</style>