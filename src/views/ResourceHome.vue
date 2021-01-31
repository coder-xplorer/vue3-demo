<template>
  <div class="container">
      <Header />
      <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">数据</span>
            <span class="badge badge-secondary badge-pill">{{getResourcesLength}}</span>
          </h4>
          <!-- 搜素框 -->
          <ResourceSearch />
          <!-- <ResourceForm /> -->
          <!-- 数据列表 -->
          <ResourceList :resources="resources" @handleItemClick="selectResource" :activeResource="activeResource?.id" />
        </div>
        <!-- {/* 更新数据 Starts */} -->
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3">
            数据 {{ activeResource?.id }}
            <button :class="`btn btn-sm ${toggleBtnClass}`" @click="isDetail = !isDetail">{{!isDetail ? "详情" : "更新"}}</button>
            </h4>
            <!-- 数据详情 -->
            <ResourceDetail v-if="isDetail" :selectedResource="activeResource" />
            <ResourceUpdate v-else/>
        </div>
      </div>
    </div>
</template>

<script>
import { reactive, toRefs, computed, ref } from "vue";
import Header from "../components/Header";
import ResourceSearch from "../components/ResourceSearch";
import ResourceForm from "../components/ResourceForm";
import ResourceList from "../components/ResourceList";
import ResourceUpdate from "../components/ResourceUpdate";
import ResourceDetail from "../components/ResourceDetail";
export default {
  components: {
    Header,
    ResourceSearch,
    ResourceForm,
    ResourceList,
    ResourceUpdate,
    ResourceDetail
  },
  setup() {
    const isDetail = ref(false);
    const selectedResource = ref(null);
    const data = reactive({
      resources: [
        {
          id: 1,
          title: "Vue",
          description: "何以解忧，唯有米修",
          type: "Video",
        },
        {
          id: 2,
          title: "React",
          description: "何以解忧，唯有米修",
          type: "book",
        },{
          id: 3,
          title: "Vue3",
          description: "何以解忧，唯有米修",
          type: "book",
        },
        {
          id: 4,
          title: "Vue",
          description: "何以解忧，唯有米修",
          type: "Video",
        }
      ]
    })
    const getResourcesLength = computed(() => {
      return data.resources.length
    });
    const toggleBtnClass = computed(() => {
      return !isDetail.value ? "btn-primary" : "btn-warning";
    })
    const activeResource = computed(() => {
      return (
        selectedResource.value ||
        (getResourcesLength > 0 && data.resources[0]) ||
        null
      );
    });
    const selectResource = (resources) => {
      selectedResource.value = resources
    }
    return {
      ...toRefs(data),
      getResourcesLength,
      isDetail,
      toggleBtnClass,
      selectResource,
      selectedResource,
      activeResource
    }
  }
}
</script>

<style>

</style>