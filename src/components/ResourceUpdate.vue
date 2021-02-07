<template>
  <div v-if="alert?.success" class="alert alert-success">{{alert.success}}</div>
  <div v-if="alert?.error" class="alert alert-danger">{{alert.error}}</div>
  <form>
    <div class="mb-3">
      <label htmlFor="firstName">标题</label>
      <input type="text" v-model="uResource.title" class="form-control" id="firstName" placeholder="用户名...." />
    </div>
    <div class="mb-3">
      <label for="description">描述</label>
      <textarea class="form-control" id="description" v-model="uResource.description" placeholder="描述"></textarea>
    </div>
    <div class="mb-3">
      <label for="type">类型</label>
      <select class="form-control" id="type" v-model="uResource.type">
        <option
          v-for="(resourceType, index) in types"
          :key="index"
          :value="resourceType"
        >
          {{ resourceType }}
        </option>
      </select>
    </div>
    <div class="mb-3">
      <label for="link">链接</label>
      <div class="input-group">
        <input
          v-model="uResource.link"
          type="text"
          class="form-control"
          id="link"
          placeholder="链接...."
        />
      </div>
    </div>
    <hr class="mb-4" />
    <button @click="handleUpdata" class="btn btn-primary btn-lg btn-block" type="button">提交</button>
  </form>
</template>

<script>
import {ref, watch, reactive, toRefs, onBeforeUnmount} from "vue"
import { updateResource } from "@/actions"
export default {
  props: {
    resource: Object,
  },
  setup(props, context) {
    const uResource = ref(props.resource);
    const types = ["book", "video", "blog"];
    const data = reactive({
      alert: {
        success: null, 
        error: null
      },
      timerId: null
    });

    watch(() => props.resource, 
    (newValue,oldValue) => {
      if(newValue && newValue._id !== oldValue._id) {
          clearTimer();
          data.alert = initAlert();
        }
        uResource.value = newValue;
    });

    const initAlert = () => {
      return {success: null, error: null}
    };

    const clearTimer = () => {
      data.timerId && clearTimeout(data.timerId);
    };

    onBeforeUnmount(() => {
      clearTimer()
    })

    const setAlert = (type, message) => {
      initAlert();
      data.alert[type] = message;

      data.timerId = setTimeout(() => {
        data.alert = initAlert();
      }, 3000);
    }

    const handleUpdata = async () => {
      try {
        const updatedResource = await updateResource(uResource.value._id, uResource.value);
        context.emit("onUpdateResource", updatedResource);
        setAlert("success", "更新成功！")
      }catch(errorMessage) {
        setAlert("error", errorMessage);
      }
      
    }
    return {
      uResource,
      types,
      handleUpdata,
      ...toRefs(data)
    }
  }
}
</script>

<style>

</style>