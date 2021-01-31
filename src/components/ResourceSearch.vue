<template>
  <!-- {/* 搜索框 start */} -->
  <form class="card p-2">
    <div class="input-group">
      <input
        @keyup="$emit('onsearch', $event.target.value)"
        type="text"
        class="form-control"
        placeholder="写点啥..."
      />
    </div>
  </form>
  <!-- {/* 搜索框 Ends */} -->
</template>

<script>
export default {};
</script>

<style></style>
