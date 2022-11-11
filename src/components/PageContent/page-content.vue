<template>
  <div class="content">
    <div class="list-title">
      <div class="left">
        {{
          props.contentConfig?.header.title ?? '数据列表'
        }}
      </div>
      <div class="right">
        <el-button type="primary" @click="newDataHandler">{{
          props.contentConfig?.header.btnTitle ?? '新建数据'
        }}</el-button>
      </div>
    </div>
    <el-table :data="list" style="width: 100%">
      <template
        v-for="item in props.contentConfig.contentList"
        key="prop"
      >
        <!-- 默认格式 -->
        <template v-if="item.type === 'default'">
          <el-table-column v-bind="item" />
        </template>

        <!-- selection选择器 -->
        <template v-if="item.type === 'selection'">
          <el-table-column v-bind="item" />
        </template>

        <!-- index索引 -->
        <template v-if="item.type === 'index'">
          <el-table-column v-bind="item" />
        </template>

        <!-- 时间 -->
        <template v-if="item.type === 'timer'">
          <el-table-column v-bind="item">
            <template #default="scope">
              {{ UTCToStr(scope.row.updateAt) }}
            </template>
          </el-table-column>
        </template>

        <!-- 操作按钮 -->
        <template v-if="item.type === 'handle'">
          <el-table-column v-bind="item">
            <template #default="scope">
              <el-button
                text
                type="primary"
                size="small"
                icon="edit"
                @click="editHandler(scope.row)"
                >编辑
              </el-button>
              <el-button
                text
                type="danger"
                size="small"
                icon="delete"
                @click="deleteHandler(scope.row.id)"
                >删除
              </el-button>
            </template>
          </el-table-column>
        </template>

        <!-- 自定义类型 -->
        <template v-if="item.type === 'custom'">
          <el-table-column v-bind="item">
            <template #default="scope">
              <!-- 插槽内row: 当前行的所有数据; data: 绑定的数据 -->
              <slot
                :name="item.slotName"
                :row="scope.row"
                :data="scope.row[item.prop]"
              ></slot>
            </template>
          </el-table-column>
        </template>
      </template>

      <!-- <el-table-column align="center" label="操作">
        <template #default="scope"> </template>
      </el-table-column> -->
    </el-table>

    <!-- 分页器 -->
    <div class="pageination">
      <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[5, 10, 20, 30]"
        small="small"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSystemStore } from '@/store/main/system/syetem'
import { storeToRefs } from 'pinia'
import { UTCToStr } from '@/utils/format'
import { ref } from 'vue'

interface IProps {
  contentConfig: {
    pageName: string
    header: {
      title?: string
      btnTitle?: string
    }
    contentList: any[]
  }
}

const props = defineProps<IProps>()

const systemStore = useSystemStore()
const { list, totalCount } = storeToRefs(systemStore)

const currentPage = ref(1)
const pageSize = ref(10)

// 发送分页请求
const fetchPageData = (query: any = {}) => {
  systemStore.postDataListAction(props.contentConfig.pageName, {
    offset: (currentPage.value - 1) * pageSize.value,
    size: pageSize.value,
    ...query,
  })
}
// 进入页面, 加载list数据
fetchPageData()

const handleSizeChange = (e: any) => {
  fetchPageData()
}
const handleCurrentChange = (e: any) => {
  fetchPageData()
}

defineExpose({ fetchPageData })

// 点击删除
const deleteHandler = (id: string) => {
  systemStore.deleteDataByIdAction(props.contentConfig.pageName, id)
}

// 点击编辑, 传入user父组件, 父组件调用userModal组件
const editHandler = (data: any) => {
  emit('editUserHandler', data)
}

// 点击新建
const newDataHandler = () => {
  emit('newDataHandler')
}

const emit = defineEmits([
  'newDataHandler',
  'editUserHandler',
])
</script>

<style lang="less" scoped>
.content {
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  .list-title {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
  }
  .pageination {
    width: 100;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
}
</style>
