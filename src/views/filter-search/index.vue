<template>
  <div class="filter-search clearfix">
      <Input></Input>
      <resource-filter
        @resource-change="filterResource">
      </resource-filter>
      <div class="resource-list">
        <div
          v-for="(resouce, index) in mockdataSetList" :key="index"
          v-if="currentResourceType === -1 || currentResourceType + 1 === resouce.type">
          <dataset-card v-if="resouce.type === 1" :info-obj="resouce"></dataset-card>
          <comment-card v-if="resouce.type === 2" :info-obj="resouce"></comment-card>
        </div>
        <Page :total="100"
          show-total
          show-elevator
          show-sizer></Page>
      </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import ResourceFilter from '../../components/resource-filter/index';
import DatasetCard from '../../components/dataset-card/index';
import CommentCard from '../../components/comment-card/index';

export default Vue.extend({
  data() {
    return {
      currentResourceType: -1,
      mockdataSetList: [
        {
          type: 1,
          datasetName: 'ad_aggregate',
          datasetDesc: '数据集描述:这是一条数据集描述.内容过长时，鼠标hover显示全部。',
          tags: ['ETL', '日志', '生产'],
        },
        {
          type: 1,
          datasetName: 'ad_123',
          datasetDesc: '数据集描述:这是一条数据集描述.内容过长时，鼠标hover显示全部。',
          tags: ['ETL2', '日志2', '生产2'],
        },
        {
          type: 2,
          commentContent: 'xxxxxxx',
          commentTarget: '数据集123',
          fromProject: 'Project_1',
          commentTime: '2018-10-24 10:24:00',
        },
        {
          type: 1,
          datasetName: 'ad_456',
          datasetDesc: '数据集描述:这是一条数据集描述.内容过长时，鼠标hover显示全部。',
          tags: ['ETL3', '日志3', '生产3'],
        },
        {
          type: 2,
          commentContent: 'xxxxxxx',
          commentTarget: '数据集456',
          fromProject: 'Project_2',
          commentTime: '2018-10-24 10:24:00',
        },
      ],
    };
  },
  components: {
    ResourceFilter,
    DatasetCard,
    CommentCard,
  },
  methods: {
    filterResource(index) {
      this.currentResourceType = index;
    },
  },
});
</script>
<style lang="scss">
    .filter-search {
        margin: 0 auto;
        max-width: 1000px;
        background-color: #f5f6f8;

        .resource-list {
          float: right;
          margin-left: 20px;
          padding-left: 20px;
          border-left: 1px solid #999;
          width: calc(100% - 220px);
        }
    }
    .clearfix:after {
      content: '';
      display: block;
      height: 0;
      clear: both;
    }
</style>




