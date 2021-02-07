<template>
  <button class="btn btn-sm btn-danger" @click="handleDelete">删除</button>
</template>

<script>
import { deleteResource } from "@/actions";
export default {
  props: {
    activeId: String
  },
  setup(props, context) {
    const handleDelete = async () => {
      // 请求数据接口
      console.log(props);
      const deleteData = await deleteResource(props.activeId);
      context.emit("onResourceDelete", deleteData);
    }
    return {
      handleDelete
    }
  }
}
</script>

<style>

</style>