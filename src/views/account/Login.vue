<template>
  <div id="login">
    <div class="form-wrap">
      <ul class="menu-tab">
        <li @click="toggleMenu(item.type)" :class="{'current':current_menu===item.type}" v-for="item in data.tab_menu" :key="item.type">{{ item.label }}</li>
      </ul>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item>
          <label class="form-label">用户名</label>
          <el-input v-model="form.item.username"></el-input>
        </el-form-item>
        <el-form-item>
          <label class="form-label">密码</label>
          <el-input type="password" v-model="form.item.password"></el-input>
        </el-form-item>
        <el-form-item v-if="current_menu === 'register'">
          <label class="form-label" >确认密码</label>
          <el-input type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <label class="form-label">验证码</label>
          <el-row :gutter="10">
            <el-col :span="14">
              <el-input v-model="form.item.code"></el-input>
            </el-col>
            <el-col :span="10">
              <el-button type="success" class="el-button-block">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" class="el-button-block">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted, watch } from 'vue';
export default {
  name: "Login",
  setup(props, { root }){
    const form = reactive({
      item: {
        username: '',
        password: '',
        passwords: '',
        code: ''
      }
    })
    const data = reactive({
      tab_menu: [
        { type: "login", label:"登录"},
        { type: "register", label: "注册"}
      ],
    })
    let current_menu = ref(data.tab_menu[0].type)

    const toggleMenu = ((type) => {
      current_menu.value = type;
    })
    return {
      data, current_menu, toggleMenu, form
    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  height: 100vh;
  background-color: #344a5f;
}
.form-wrap {
  width: 320px;
  padding-top: 100px;
  margin: auto;
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    padding: 10px 24px;
    margin: 0 10px;
    color: #fff;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    &.current {background-color: rgba(0,0,0,.1)}
  }
}
.form-label {
  display: block;
  color: #fff;
  font-size: 14px;
}
</style>