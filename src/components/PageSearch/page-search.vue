<template>
  <div class="user-search">
    <el-form
      label-width="90px"
      :model="searchForm"
      ref="formRef"
    >
      <el-row :gutter="0">
        <template v-for="item in formItems" key="id">
          <el-form-item
            :prop="item.prop"
            :label="item.label"
            :placeholder="item?.placeholder"
          >
            <el-input
              v-if="item.type === 'input'"
              v-model="searchForm[item.prop]"
            ></el-input>
            <el-date-picker
              v-if="item.type === 'date-picker'"
              v-model="searchForm[item.prop]"
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            ></el-date-picker>
          </el-form-item>
        </template>
      </el-row>
      <div class="button-box">
        <el-button
          icon="Refresh"
          @click="resetClickHandler"
        >
          重置
        </el-button>
        <el-button
          icon="Search"
          type="primary"
          @click="searchHandler"
        >
          搜索
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'

interface IProp {
  formItems: {
    type: 'input' | 'date-picker'
    prop: string
    label: string
    placeholder?: string
    default?: any
  }[]
}

const props = defineProps<IProp>()

const searchForm = reactive<any>({})

props.formItems.forEach(
  (item) => (searchForm[item.prop] = item.default ?? '')
)

console.log('[ searchForm ] >', searchForm)

const formRef = ref<InstanceType<typeof ElForm>>()

const emit = defineEmits(['resetHandler', 'searchHandler'])

const resetClickHandler = () => {
  formRef.value?.resetFields()
  emit('searchHandler', searchForm)
}

const searchHandler = () => {
  emit('searchHandler', searchForm)
}
</script>
<style lang="less" scoped>
.user-search {
  border-radius: 5px;
  overflow: hidden;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
}
.button-box {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 20px;
}
</style>
