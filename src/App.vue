<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
  <el-button type="primary">主要按钮</el-button>
</template>

<style lang="scss">
#app {
}
</style>
