<template>
  <div class="login">
    <canvas class="background"></canvas>
    <LoginPanel></LoginPanel>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Particles from 'particlesjs'
import LoginPanel from './c-cpns/login-panel.vue';

onMounted(() => {
  Particles.init({
    selector: '.background',
    color: ['#f0f0f0'],
    connectParticles: true,
    speed: 0.3,
    maxParticles: 70,
    sizeVariations: 2
  })
})
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .background {
    background: #121C6B;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
}
</style>
