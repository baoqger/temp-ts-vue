<template>
  <div class="dataset-card">
    <div class="dataset-card-info">
      <img class="dataset-card-info-img" src="./u1027.png">
      <a>{{infoObj.datasetName}}</a>
      <span class="dataset-card-info-desc">{{infoObj.datasetDesc}}</span>
    </div>
    <img class="dataset-card-user" src="./u1045.png">
    <ul class="dataset-card-tags">
      <li
        class="dataset-card-tags-item"
        v-for="tag in infoObj.tags">
        {{tag}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    // datasetName: String,
    // datasetDes: String,
    // tags: Array,
    infoObj: Object,
  },
});

</script>

<style lang="scss">
  @import './index.scss';

  .dataset-card {
    position: relative;
    padding: 15px;
    margin-bottom: 15px;
    background-color: #fff;

    &-info {
      text-align: left;

      &-img {
        width: 20px;
        height: 20px;
        vertical-align: top;
        margin-right: 10px;
      }

      &-desc {
        margin-left: 30px;
        color: #bbb;
      }
    }

    &-user {
      position: absolute;
      right: 5px;
      top: 5px;
      width: 40px;
      height: 40px;
    }

    &-tags {
      text-align: left;
      margin-top: 10px;
      &-item {
        display: inline;
        background-color: #5999ee;
        padding: 5px;
        margin-right: 10px;
        color: white;
        border-radius: 8px;
      }
    }
  }
</style>