<template>
    <nav class="bg-gray-800">
    <div class="container mx-auto px-4 py-2 flex justify-between items-center font-tegomin">
      <a href="/" @click.prevent="$router.push('/')" class="text-yellow-500 font-bold text-xl">Siêu phẩm 2025: Thiên Long SRO</a>
      <ul class="flex space-x-4">
        <li>
          <a href="#" class="text-yellow-500 hover:text-white">SỰ KIỆN</a>
        </li>

        <li>
          <a href="#" @click="navigateToLogin" class="text-yellow-500 hover:text-white">ĐĂNG NHẬP</a>
        </li>
        <li>
          <a href="https://www.facebook.com/ghienbongdaofficial" target="_blank" class="text-yellow-500 hover:text-white">FANPAGE</a>
        </li>
        <li>
          <a href="https://www.tiktok.com/search?q=L%C3%AA%20Tu%E1%BA%A5n%20Khang&t=1734424368088" target="_blank" class="text-yellow-500 hover:text-white">TIKTOK</a>
        </li>
        <li>
          <a href="#" class="text-yellow-500 hover:text-white">GIFTCODE</a>
        </li>

        <li>
          <a href="#" @click="navigateNapThe" class="text-yellow-500 hover:text-white">NẠP THẺ</a>
        </li>

      </ul>
    </div>
  </nav>
  </template>
  
  <script>
    export default {
    name: "Header",
    methods: {
    reloadPage() {
      // Reload lại toàn bộ trang
      window.location.reload();
    },
    navigateToLogin() {
      this.$router.push("/login");
    },
    navigateNapThe() {
      this.$router.push("/napthe");
    },
    navigateAdmin() {
      this.$router.push("/admin");
    }
  }
  };
  </script>
  
  <style scoped>
  </style>
  