<template>
  <div class="userModal">
    <el-dialog
      v-model="dialogVisible"
      :title="isNewRef ? '创建用户' : '编辑用户'"
      width="600px"
    >
      <el-form
        ref="formRef"
        :model="formList"
        label-width="100px"
      >
        <template
          v-for="item in modalConfig.formItems"
          key="id"
        >
          <el-form-item
            :prop="item.prop"
            :label="item.label"
            :placeholder="item?.placeholder"
          >
            <el-input
              v-if="item.type === 'input'"
              v-model="formList[item.prop]"
            ></el-input>

            <el-date-picker
              v-if="item.type === 'date-picker'"
              v-model="formList[item.prop]"
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            ></el-date-picker>

            <el-select
              v-if="item.type === 'select'"
              :placeholder="item?.placeholder"
              style="width: 100%"
              v-model="formList[item.prop]"
            >
              <el-option
                v-for="optionItem in item.options"
                :key="optionItem.value"
                :label="optionItem.label"
                :value="optionItem.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </template>

        <!-- <el-form-item label="部门名称" prop="name">
          <el-input
            placeholder="请输入部门名称"
            v-model="formList.name"
          />
        </el-form-item>
        <el-form-item label="领导" prop="leader">
          <el-input
            placeholder="请输入领导"
            v-model="formList.leader"
          />
        </el-form-item>
        <el-form-item label="部门" prop="departmentId">
          <el-select
            placeholder="请选择上级部门"
            v-model="formList.parentId"
            style="width: 100%"
          >
            <el-option
              v-for="item in entireDepartments"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item> -->
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">
            取消
          </el-button>
          <el-button type="primary" @click="configHandler">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useMainStore } from '@/store/main/main'
import { storeToRefs } from 'pinia'
import { useSystemStore } from '@/store/main/system/syetem'
import { ElMessage, type ElForm } from 'element-plus'
// import type { IModalConfigProp } from './type'

export interface IModalConfig {
  pageName: string
  headers: any
  formItems: any[]
}

export interface IModalConfigProp {
  modalConfig: IModalConfig
}


const props = defineProps<IModalConfigProp>()

const dialogVisible = ref(false)

const formList = reactive<any>({})

props.modalConfig.formItems.forEach((item) => {
  formList[item.prop] = item.default ?? ''
})


const isNewRef = ref(false)
let currentRowId: number

const setDialogVisible = (
  isNew: boolean,
  rowFormData?: any
) => {
  dialogVisible.value = true

  isNewRef.value = isNew

  // 如果是编辑
  if (!isNew) {
    currentRowId = rowFormData.id

    for (const key in formList) {
      formList[key] = rowFormData[key]
    }
  }
}

defineExpose({ setDialogVisible })

// 点击确定
const systemStore = useSystemStore()
const formRef = ref<InstanceType<typeof ElForm>>()

const configHandler = () => {
  formRef.value?.validate((valid, fields) => {
    if (valid) {
      dialogVisible.value = false

      if (isNewRef.value) {
        // 新建操作
        systemStore.postNewDataAction(
          props.modalConfig.pageName,
          formList
        )
      } else {
        // 编辑操作
        systemStore.editDataAction(
          props.modalConfig.pageName,
          currentRowId,
          formList
        )
      }

      emit('newUserFinishHandler')
    } else {
      ElMessage({
        message: '请填写正确格式',
        type: 'warning',
      })
    }
  })
}
const emit = defineEmits(['newUserFinishHandler'])
</script>
<style lang="less" scoped></style>
