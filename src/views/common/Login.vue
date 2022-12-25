<template>
  <div
    class="h-screen flex bg-gray-100 items-center justify-center overflow-hidden"
  >
  <!-- TODO: Form Validator -->
    <CJCard class="p-6 shadow-xl" style="width: 400px; height: 300px">
      <div class="flex flex-col justify-center items-center">
        <div class="select-none text-4xl mb-8 font-light text-center">登录</div>
        <div class="flex flex-col gap-y-4 mb-4 w-full">
          <el-input
            style="height: 2.8rem"
            v-model="user.account"
            placeholder="您的账户名"
          />
          <el-input
            style="height: 2.8rem"
            v-model="user.password"
            type="password"
            placeholder="在此输入密码"
          />
        </div>

        <div class="select-none flex my-4 justify-center items-center w-full">
          <div class="flex-grow-0">
            <a class="text-indigo-300 cursor-pointer text-base" @click="goToForgotPassword">忘记密码？</a>
          </div>
          <div class="flex-grow"></div>
          <div class="flex-grow-0">
            <CJBtn @click="submit" class="mx-1" rounded type="primary"
              >登录</CJBtn
            >
          </div>
        </div>
      </div>
    </CJCard>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-input) {
  & .el-input__wrapper {
    box-shadow: none;
    @apply bg-gray-100;
  }
    .is-focus{
    }
}
</style>
<script>
import CJCard from "@/components/CJCard.vue";
import CJBtn from "@/components/CJBtn.vue";
export default {
  name: "Login",
  components: { CJCard, CJBtn },
  data: () => ({
    valid: false,
    rememberMe: false,
    user: {
      account: "",
      password: "",
    },
    rules: {
      basicRules: [(v) => !!v || "Required"],
    },
    isAlertSeen: false,
    alertMessage: "",
    alertDialog: false,
  }),
  methods: {
    async submit() {
      // if (this.$refs.loginForm.validate()) {
        debugger;
        await this.$store.dispatch("user/userLogin", this.user);
        await this.$store.dispatch("user/getInfo");
        await this.$store.dispatch(
          "user/generatePermittedRouteList",
          this.$store.state.user.role
        );
        this.$router.push({ path: "/" });
      // }
    },
    resetForm() {
      this.$refs.loginForm.reset();
      this.isAlertSeen = false;
    },
    goToForgotPassword() {
      this.$router.push("/forgot_password");
    },
  },
};
</script>

