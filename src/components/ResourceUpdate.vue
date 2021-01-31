<template>
  <form>
    <div class="mb-3">
      <label htmlFor="firstName">用户名</label>
      <input type="text" class="form-control" id="firstName" placeholder="用户名...." />
    </div>
    <div class="mb-3">
      <label htmlFor="email">邮箱<span class="text-muted">(Optional)</span></label>
      <input type="email" class="form-control" id="email" placeholder="邮箱..." />
    </div>
    <div class="mb-3">
      <label for="description">描述</label>
      <textarea class="form-control" id="description" placeholder="描述"></textarea>
    </div>
    <div class="mb-3">
      <label htmlFor="username">用户信息</label>
      <div class="input-group">
        <input type="text" class="form-control" id="username" placeholder="用户信息...." />
      </div>
    </div>
    <hr class="mb-4" />
    <button class="btn btn-primary btn-lg btn-block" type="submit">提交</button>
  </form>
</template>

<script>
export default {

}
</script>

<style>

</style>