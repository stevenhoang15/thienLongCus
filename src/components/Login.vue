<template>
  <div class="h-screen flex items-center justify-center bg-slate-900 font-sans">
    <div class="bg-white p-8 shadow-md w-96 rounded-md">
      <h2 v-if="isLoginForm" class="text-center text-2xl font-bold mb-6">Đăng nhập</h2>
      <h2 v-else>Đăng ký</h2>
      <form @submit.prevent="handleSubmit">
        <div v-if="isLoginForm">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-lg font-bold mb-2">Tên tài khoản</label>
            <input type="email" id="email" class="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Tên tài khoản">
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700 text-lg font-bold mb-2">
              Mật khẩu
            </label>
            <input type="password" id="password" class="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="******">
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Đăng nhập
            </button>
            <a class="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="#">
              Quên mật khẩu?
            </a>
          </div>
        </div>
        <div v-else>
          </div>
      </form>
      <div class="pt-6">
        <p>Chưa có tài khoản? <a href="#" @click="navigateToSignin" class="underline hover:text-blue-500" >Đăng ký</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoginForm: true,
      // ... các biến khác để lưu trữ dữ liệu người dùng
    };
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      if (this.isLoginForm) {
        // Xử lý đăng nhập
        // ...
      } else {
        // Xử lý đăng ký
        // ...
      }
    },
    navigateToSignin() {
      this.$router.push("/signin");
    },
  }
}
</script>