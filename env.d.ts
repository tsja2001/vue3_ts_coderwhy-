/// <reference types="vite/client" />
declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: defineComponent;
  export default component;
}

declare module "particlesjs"{
  const Particles: any
  export default Particles
}

declare module '*.mjs'
