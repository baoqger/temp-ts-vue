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
            <img src="./u222.png" class="comment-area-active-top-close">
          </div>
          <div class="comment-area-active-list">
            <comment-detail
              v-for="(comment, index) in mockCommentList"
              :key="index"
              :commentObj="comment"></comment-detail>
          </div>
          <div class="comment-area-active-add">
            <img src="./u256.png" style="vertical-align: top">
            <Input style="width:200px" placeholder="为此数据集发表一条你的观点吧"></Input>
          </div>
        </div>
      </transition>
      <transition name="close">
        <div class="comment-area-inactive"
          v-show="!isActive"
          @mouseover="openCommentArea">
          <div class="comment-area-inactive-top">
            <img src="./u111.png">
            <img src="./u254.png" class="comment-area-inactive-top-img">
          </div>
          <div class="comment-area-inactive-list">
            <img src="../comment-detail/u260.png"
              class="comment-area-inactive-list-item"
              v-for="(eachCom, index) in mockCommentList"
              :key="index">
          </div>
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
      mockCommentList: [
        {
          name: '冠军',
          content: '这数据集很满足我在交通银行项目中的标签加工。',
          time: '2017年10月24日 10:24:00',
        },
        {
          name: '晓红',
          content: '这数据集中标签不符合规范，用户吐槽严重。',
          time: '2017年10月23日 10:24:00',
        },
      ],
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

        &-close {
          vertical-align: top;
          margin-left: 100px;
          width: 35px;
        }
      }

      &-add {
        position: absolute;
        bottom: 80px;
      }
    }
    &-inactive {
      position: absolute;
      right: 0;
      height: 100%;
      background-color: #fff;
      width: 50px;
      border-left: 1px solid #ccc;

      &-top {

        &-img {
          margin-top: 20px;
          width: 30px;
        }
      }

      &-list {
        &-item {
          width: 35px;
          margin: 5px 0;
        }
      }
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