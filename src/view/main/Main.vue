<template>
  <div class="Main">
    <h2>Main</h2>
    <button @click="exitLoginHandler">退出登录</button>
  </div>
</template>

<script setup lang="ts">
import { LOGIN_TOKEN } from '@/global/constants';
import { router } from '@/router';
import { localCache } from '@/utils/cache';

const exitLoginHandler = () => {
  localCache.removeCache(LOGIN_TOKEN)
  router.push('/login')
}
</script>
<style lang="less" scoped></style>
