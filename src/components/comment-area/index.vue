<template>
  <div>
    <div class="comment-area">
      <transition name="open">
        <div class="comment-area-active"
          v-show="isActive"
          @mouseleave="closeCommentArea">
          active
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

export default Vue.extend({
  data() {
    return {
      isActive: false,
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
});
</script>

<style lang="scss">
  .comment-area {
    position: relative;

    &-active {
      position: absolute;
      right: 0;
      height: 500px;
      background-color: #ccc;
      width: 200px;
    }
    &-inactive {
      position: absolute;
      right: 0;
      height: 500px;
      background-color: #ccc;
      width: 50px;
    }

    .open-enter-active, .open-leave-active {
      transition: transform 1s;
    }
    .open-enter, .open-leave-to /* .fade-leave-active below version 2.1.8 */ {
      transform: translateX(200px);
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