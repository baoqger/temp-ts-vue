<template>
  <div>
    <div class="comment-area">
      <transition name="open">
        <div class="comment-area-active"
          v-show="isActive"
          @mouseleave="closeCommentArea">
          <div class="comment-area-active-top">
            <img src="./u254.png" class="comment-area-active-top-img">
            <span>评论({{numberOfComment}})</span>
          </div>
          <div class="comment-area-active-list">
            <comment-detail></comment-detail>
          </div>
        </div>
      </transition>
      <transition name="close">
        <div class="comment-area-inactive"
          v-show="!isActive"
          @mouseover="openCommentArea">
          inactive
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CommentDetail from '../comment-detail/index';

export default Vue.extend({
  data() {
    return {
      isActive: false,
      numberOfComment: 2,
    };
  },
  methods: {
    openCommentArea() {
      console.log('debugging...');
      this.isActive = true;
    },
    closeCommentArea() {
      console.log('debugging out...');
      this.isActive = false;
    },
  },
  components: {
    CommentDetail,
  },
});
</script>

<style lang="scss">
  .comment-area {
    position: relative;
    height: 100%;

    &-active {
      position: absolute;
      right: 0;
      height: 100%;
      background-color: #fff;
      width: 250px;
      border-left: 1px solid #ccc;

      &-top {
        text-align: left;
        padding: 10px;
        color: #aaa;
        font-size: 14px;

        &-img {
          width: 25px;
          height: 25px;
          vertical-align: top;
          margin-right: 15px;
        }
      }
    }
    &-inactive {
      position: absolute;
      right: 0;
      height: 100%;
      background-color: #fff;
      width: 50px;
      border-left: 1px solid #ccc;
    }

    .open-enter-active, .open-leave-active {
      transition: transform 1s;
    }
    .open-enter, .open-leave-to /* .fade-leave-active below version 2.1.8 */ {
      transform: translateX(250px);
    }

    .close-enter-active, .close-leave-active {
      transition: all 1s;
    }
    .close-enter, .close-leave-to /* .fade-leave-active below version 2.1.8 */ {
      transform: translateX(200px);
      opacity: 0;
    }

  }
</style>