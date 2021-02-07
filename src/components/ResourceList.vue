<template>
  <!-- {/* 数据列表 Starts */} -->
  <ul class="list-group mb-3 resource-list">
    <li
      v-for="resource in resources"
      :key="resource._id"
      :class="`${handleItemClass(resource)} list-group-item d-flex justify-content-between lh-condensed resource-list-item`"
      @click="handleResource(resource)"
    >
      <div>
        <h6 class="my-0">{{resource.title}}</h6>
        <small class="text-muted">{{resource.description}}</small>
      </div>
      <span class="text-muted">{{resource.type}}</span>
    </li>
  </ul>
  <!-- {/* 数据列表 Ends */} -->
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    resources: {
      type: Array,
      default: () => []
    },
    activeResource: Number
  },
  setup(props, context) {
    const handleResource = (resource) => {
      // 注册事件
      context.emit("handleItemClick", resource)
    }
    
    const handleItemClass = computed(() => {
      return (resource) => resource._id === props.activeResource ? "is-active" : "";
    })
    return { handleResource, handleItemClass }
  }
}
</script>

<style lang="scss" scoped>
.resource-list {
  max-height: 350px;
  overflow-y: auto;
  &-item {
    cursor: pointer;
    &:hover {
      background: #f3f3f3;
    }
  }
  .is-active {
    background: #f3f3f3;
  }
}
</style>