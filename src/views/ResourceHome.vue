<template>
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
        数据
        <template v-if="getResourcesLength">
          <button :class="`btn btn-sm ${toggleBtnClass} mr-2`" @click="isDetail = !isDetail">{{!isDetail ? "详情" : "更新"}}</button>
          <ResourceDelete 
            @onResourceDelete="handleResourceDelete($event)"
            :activeId="activeResource?._id" />
        </template>
        </h4>
        <!-- 数据详情 -->
        <ResourceUpdate v-if="isDetail" :resource="activeResource" @onUpdateResource="handleUpdateResource($event)" />
        <ResourceDetail v-else :selectedResource="activeResource" />
        
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, computed, ref, onMounted } from "vue";
import { fetchResource } from "../actions/index"
import Header from "../components/Header";
import ResourceSearch from "../components/ResourceSearch";
import ResourceForm from "../components/ResourceForm";
import ResourceList from "../components/ResourceList";
import ResourceUpdate from "../components/ResourceUpdate";
import ResourceDetail from "../components/ResourceDetail";
import ResourceDelete from "../components/ResourceDelete";
export default {
  components: {
    Header,
    ResourceSearch,
    ResourceForm,
    ResourceList,
    ResourceUpdate,
    ResourceDetail,
    ResourceDelete
  },
  setup() {
    const isDetail = ref(false);
    const selectedResource = ref(null);
    const data = reactive({
      resources: []
    });

    onMounted(async () => {
      const resource = await fetchResource();
      data.resources = resource;
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

    const handleUpdateResource = (newResource) => {
      console.log(newResource);
      const index = data.resources.findIndex(
        (resource) => resource._id === newResource._id
      );
      data.resources[index] = newResource;
      selectResource(newResource);
    };
    const handleResourceDelete = (newResource) => {
      const index = data.resources.findIndex(
        (resource) => resource._id === newResource._id
      );

      data.resources.splice(index, 1);
      selectResource(data.resources[0] || null);
    };
    return {
      ...toRefs(data),
      getResourcesLength,
      isDetail,
      toggleBtnClass,
      selectResource,
      selectedResource,
      activeResource,
      handleUpdateResource,
      handleResourceDelete
    }
  }
}
</script>

<style>

</style>