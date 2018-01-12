<template>
  <div class="comment-card">
    <a class="comment-card-content">
      <Icon type="chatbubble-working"></Icon>
      这是一段评论: {{infoObj.commentContent}}
    </a>
    <ul class="comment-card-info">
      <li class="comment-card-info-item">
        <span class="comment-card-info-item-key">评论对象：</span>
        <span class="comment-card-info-item-value">{{infoObj.commentTarget}}</span>
      </li>
      <li class="comment-card-info-item">
        <span class="comment-card-info-item-key">所属项目：</span>
        <span class="comment-card-info-item-value">{{infoObj.fromProject}}</span>
      </li>
      <li class="comment-card-info-item">
        <span class="comment-card-info-item-key">评论时间：</span>
        <span class="comment-card-info-item-value">{{infoObj.commentTime}}</span>
      </li>
    </ul>
    <img class="comment-card-img" src="../dataset-card/u1045.png">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    infoObj: Object,
  },
});
</script>

<style lang="scss">
  .comment-card {
    position: relative;
    padding: 15px;
    margin-bottom: 15px;
    background-color: #fff;

    &-content {
      display: block;
      text-align: left;
    }

    &-info {
      text-align: left;
      margin-top: 15px;
      &-item {
        display: inline;
        margin-right: 20px;

        &-key {
          font-weight: bold;
        }
      }
    }

    &-img {
      position: absolute;
      right: 5px;
      top: 5px;
      width: 40px;
      height: 40px;
    }
  }
</style>
