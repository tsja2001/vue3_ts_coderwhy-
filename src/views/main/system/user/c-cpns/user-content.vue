<template>
  <div class="content">
    <div class="list-title">
      <div class="left">用户列表</div>
      <div class="right">
        <el-button type="primary" @click="newUserHandler">新建用户</el-button>
      </div>
    </div>
    <el-table :data="userList" style="width: 100%">
      <el-table-column type="selection" />
      <el-table-column type="index" />
      <el-table-column
        align="center"
        prop="name"
        label="姓名"
        width="150px"
      />
      <el-table-column
        align="center"
        prop="realname"
        label="真实姓名"
        width="150px"
      />
      <el-table-column
        align="center"
        prop="cellphone"
        label="手机号"
        width="180px"
      />
      <el-table-column align="center" label="状态">
        <template #default="slop">
          <el-button size="small" v-if="slop.row.enable"
            >禁用</el-button
          >
          <el-button size="small" v-else>启用</el-button>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        width="170px"
        label="创建时间"
      >
        <template #default="scope">
          {{ UTCToStr(scope.row.createAt) }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        width="170px"
        label="修改时间"
      >
        <template #default="scope">
          {{ UTCToStr(scope.row.updateAt) }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        width="200px"
        label="操作"
      >
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

const systemStore = useSystemStore()
const { userList, totalCount } = storeToRefs(systemStore)

const currentPage = ref(1)
const pageSize = ref(10)

// 发送分页请求
const fetchPageData = (query: any = {}) => {
  systemStore.postUserListAction({
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
  systemStore.deleteUserByIdAction(id)

  fetchPageData()
}

// 点击编辑, 传入user父组件, 父组件调用userModal组件
const editHandler = (data: any) => {
  emit('editHandler', data)
}

// 点击新建
const newUserHandler = () => {
  emit('newUserHandler')
}

const emit = defineEmits(['newUserHandler', 'editHandler'])
</script>

<style lang="less" scoped>
.content {
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  .list-title{
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
