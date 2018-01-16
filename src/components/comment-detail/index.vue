<template>
  <div class="comment-detail">
    <img class="comment-detail-img" src="./u260.png">
    <div class="comment-detail-info">
      <span class="comment-detail-info-name">姓名</span>
      <span class="comment-detail-info-content">这数据集很满足我在交通银行项目中的标签加工.</span>
      <p class="comment-detail-info-time">2017年10月24日 10:24:00</p>
    </div>
    <img class="comment-detail-set" src="./u300.png">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

});
</script>
<style lang="scss">
  .comment-detail {
    position: relative;

    &-img {
      position: absolute;
      left: 0;
      width: 30px;
      margin-left: 10px;
    }

    &-info {
      position: absolute;
      left: 50px;
      width: 170px;
      text-algin: left;

      &-name {
        font-size: 14px;
        color: black;
      }

      &-content {
        font-size: 12px;
        color: #ccc;
        text-algin: left;
      }

      &-time {
        color: #ccc;
        margin-top: 10px;
      }
    }

    &-set {
      position: absolute;
      right: 0;
      width: 20px;
    }
  }
</style>