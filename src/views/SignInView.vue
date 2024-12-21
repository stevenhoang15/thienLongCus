<template>
    <div class="flex items-center justify-center h-screen bg-slate-900 font-sans">
      <div class="bg-white p-10 rounded-lg shadow-md w-96">
        <h2 class="text-2xl font-bold mb-6">Đăng ký</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">Tên tài khoản</label>
            <input type="text" id="phone" v-model="phone" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Nhập số điện thoại">
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Mật khẩu</label>
            <input type="password" id="password" v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Nhập mật khẩu">
          </div>
          <div class="mb-4">
            <label for="confirmPassword" class="block text-gray-700 text-sm font-bold mb-2">Xác nhận mật khẩu</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Nhập lại mật khẩu">
          </div>
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" :disabled="!isValid">
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
      const phone = ref('');
      const password = ref('');
      const confirmPassword = ref('');
  
      const isValid = computed(() => {
        return phone.value && password.value && password.value === confirmPassword.value;
      });
  
      const handleSubmit = () => {
        if (isValid.value) {
          console.log('Đăng ký thành công:', { phone: phone.value, password: password.value });
          // Ở đây bạn có thể gọi API để đăng ký người dùng
        } else {
          alert('Vui lòng nhập đầy đủ thông tin và xác nhận lại mật khẩu');
        }
      };
  
      return {
        phone,
        password,
        confirmPassword,
        isValid,
        handleSubmit
      };
    }
  }
  </script>