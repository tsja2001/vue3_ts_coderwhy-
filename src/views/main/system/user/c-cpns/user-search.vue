<template>
  <div class="user-search">
    <el-form
      label-width="90px"
      :model="searchForm"
      ref="formRef"
    >
      <el-row :gutter="0">
        <el-col :span="8">
          <el-form-item
            prop="name"
            label="用户名"
            placeholder="请输入用户名"
          >
            <el-input v-model="searchForm.name" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item
            prop="realName"
            label="真实姓名"
            placeholder="请输入真实姓名"
          >
            <el-input v-model="searchForm.realName" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item
            label="电话号码"
            placeholder="请输入电话号码"
            prop="cellPhone"
          >
            <el-input v-model="searchForm.cellPhone" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态" prop="enable">
            <el-select
              placeholder="please select your zone"
              style="width: 100%"
              v-model="searchForm.enable"
            >
              <el-option label="1111" value="2" />
              <el-option label="2222" value="1" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="searchForm.createAt"
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <div class="button-box">
        <el-button icon="Refresh" @click="resetClickHandler">
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

const searchForm = reactive({
  name: '',
  realName: '',
  cellPhone: '',
  enable: '',
  createAt: '',
})

const formRef = ref<InstanceType<typeof ElForm>>()

const emit = defineEmits(['resetHandler', 'searchHandler'])

const resetClickHandler = () => {
  formRef.value?.resetFields()
  emit('resetHandler', searchForm)
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
