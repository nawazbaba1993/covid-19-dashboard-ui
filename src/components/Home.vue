<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <div class="logo">
        <h3 class="logo_text">COVID-19 DASHBOARD</h3>
      </div>
      <div style="float: right;">
        <a-button v-if="loggedin" type="primary" shape="circle" icon="user" size="large"/>
        <span v-else>
          <a-button type="primary" shape="round" icon="login" @click="login">
            Login
          </a-button>
          <a-divider type="vertical" />
          <a-button type="primary" shape="round" icon="user-add" @click="register">
            Register
          </a-button>
        </span>
        
      </div>
    </a-layout-header>
    <a-layout-content style="padding: 20px 20px">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <router-view />
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      ©2021 Created by Nawaz
    </a-layout-footer>
  </a-layout>
</template>
<script>

export default {
  data() {
    return {
      loggedin: false,
    };
  },
  methods: {
    login() {
      this.$router.push({name:'login'});
    },
    register() {
      this.$router.push({name:'register'});
    },
  },
}
</script>

<style>
#components-layout-demo-top .logo .logo_text{
  /* width: wrap-text; */
  /* height: 31px; */
  /* background: rgba(255, 255, 255, 0.2); */
  /* margin: 16px 24px 16px 0; */
  /* padding: 10px; */
  float: left;
  /* text-align: center; */
  color: white;
}

</style>
