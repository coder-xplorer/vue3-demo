<template>
  <!-- {/* 数据详情 Starts */} -->
    <div class="card" v-if="!selectedResource?._id">
      暂无数据。。。
    </div>
    <div class="card" v-else>
      <div class="card-header">{{selectedResource.title}}</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>{{selectedResource.description}}</p>
          <footer class="text-muted mb-2">{{selectedResource.type}}</footer>
        </blockquote>
        <a href="#" class="btn btn-primary">编辑</a>
      </div>
    </div>
  <!-- {/* 数据详情 Ends */} -->
</template>

<script>
export default {
  props: {
    selectedResource: {
      // type: Object,
      validator: (prop) => typeof prop === "object" || prop === null,
      required: true,
    }
  }
}
</script>

<style>

</style>