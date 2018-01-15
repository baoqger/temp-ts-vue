<template>
  <div class="resource-filter">
    <Menu theme="dark" width="200px">
      <Submenu name="1">
        <template slot="title">资源类型</template>
        <ul class="resource-type">
          <li v-for="(resource, index) in resourceData" :key="index"
              class="resource-type-item"
              :class="{'resource-type-item-selected': resource.selected}"
              @click.self="selectItem(index)">
            {{resource.name}}
            <span class="resource-type-item-cancel"
                v-show="resource.selected"
                @click="cancelItem(index)">
                <Icon type="ios-close-outline" />
            </span>
          </li>
        </ul>
      </Submenu>
    </Menu>
    <Menu theme="dark" width="200px">
      <Submenu
        v-for="(condition, indexCondi) in currentFilterConditions"
        :name="indexCondi">
        <template slot="title">{{condition.name}}</template>
        <ul class="condition-type">
          <li v-for="(item, indexItem) in condition.items" :key="indexItem"
            class="condition-type-item"
            :class="{'condition-type-item-selected': item.selected}"
            @click.self="addFilterItem(indexCondi, indexItem)">
            {{item.name}}
            <span class="condition-type-item-cancel"
                v-show="item.selected"
                @click="cancelFilterItem(indexCondi, indexItem)">
                <Icon type="ios-close-outline" />
            </span>
          </li>
        </ul>
      </Submenu>
    </Menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      resourceData: [
        {
          name: '数据集',
          selected: false,
          filterConditions: [
            {
              name: '所属DDS项目',
              // selected: false,
              items: [{
                name: '项目1',
                selected: false,
              }, {
                name: '项目2',
                selected: false,
              }, {
                name: '项目3',
                selected: false,
              }],
            },
            {
              name: '标签',
              // selected: false,
              items: [{
                name: 'tag1',
                selected: false,
              }, {
                name: 'tag2',
                selected: false,
              }, {
                name: 'tag3',
                selected: false,
              }],
            },
            {
              name: '负责人',
              // selected: false,
              items: [{
                name: 'owner1',
                selected: false,
              }, {
                name: 'owner2',
                selected: false,
              }, {
                name: 'owner3',
                selected: false,
              }],
            },
            {
              name: '创建人',
              // selected: false,
              items: [{
                name: 'creator1',
                selected: false,
              }, {
                name: 'creator2',
                selected: false,
              }, {
                name: 'creator3',
                selected: false,
              }],
            },
          ],
        },
        {
          name: '评论',
          selected: false,
          filterConditions: [
            {
              name: '所属DDS项目',
              selected: false,
              items: [{
                name: '项目1',
                selected: false,
              }, {
                name: '项目2',
                selected: false,
              }, {
                name: '项目3',
                selected: false,
              }],
            },
          ],
        },
      ],
      selectedResourceIndex: -1,
    };
  },
  computed: {
    currentFilterConditions() {
      return this.selectedResourceIndex > -1 ?
        this.resourceData[this.selectedResourceIndex].filterConditions : [];
    },
  },
  methods: {
    selectItem(index) {
      // 设置选中状态为true
      if (!this.resourceData[index].selected) {
        for (let i = 0; i < this.resourceData.length; i += 1) {
          this.resourceData[i].selected = false;
        }
        this.resourceData[index].selected = true;
        this.selectedResourceIndex = index;
        this.resetFilterCondition();
        this.$emit('resource-change', index);
        this.logFilters();
      }
    },
    cancelItem(index) {
      this.resourceData[index].selected = false;
      this.selectedResourceIndex = -1;
      this.resetFilterCondition();
      this.$emit('resource-change', -1);
      this.logFilters();
    },
    addFilterItem(indexCondi, indexItem) {
      this.currentFilterConditions[indexCondi].items[indexItem].selected = true;
      this.logFilters();
    },
    cancelFilterItem(indexCondi, indexItem) {
      this.currentFilterConditions[indexCondi].items[indexItem].selected = false;
      this.logFilters();
    },
    resetFilterCondition() {
      this.resourceData.forEach((eachResource) => {
        eachResource.filterConditions.forEach((eachCondition) => {
          eachCondition.items.forEach((eachItem) => {
            const temp = eachItem;
            temp.selected = false;
          });
        });
      });
    },
    logFilters() {
      console.log('Debug');
      // this.currentFilterConditions.forEach((eachCondition) => {
      //   eachCondition.items.forEach((eachItem) => {
      //     if (eachItem.selected) {
      //       console.log(eachItem.name);
      //     }
      //   });
      // });
      const filterObj = {
        type: -1,
      };
      this.currentFilterConditions.forEach((eachCondition) => {
        const temp = [];
        eachCondition.items.forEach((eachItem) => {
          if (eachItem.selected) {
            temp.push(eachItem.name);
          }
        });
        if (temp.length > 0) {
          filterObj[eachCondition.name] = temp;
        }
      });
      filterObj.type = this.selectedResourceIndex;
      console.log('debugging...', filterObj);
    },
  },
});
</script>
<style lang="scss">
  .resource-filter {
    float: left;
    width: 200px;
    .resource-type {
      &-item {
        height: 45px;
        color: #bbb;
        padding: 10px;

        &-selected {
          background-color: #009688;
        }

        &-cancel {
          float: right;
          font-size: 16px;
          z-index: 100;
        }
      }
    }
    .condition-type {
      &-item {
        height: 45px;
        color: #bbb;
        padding: 10px;

        &-selected {
          background-color: #009688;
        }

        &-cancel {
          float: right;
          font-size: 16px;
          z-index: 100;
        }
      }
    }
  }
</style>


