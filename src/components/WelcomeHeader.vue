<template>
  <div class="bg-gradient-to-r from-pink-50 to-yellow-50 text-center py-6 rounded-lg shadow-sm">
    <!-- Tiêu đề -->
    <h1 class="text-pink-500 font-bold text-2xl md:text-3xl">
      Chào mừng bạn đến với trò chơi phi tiêu
    </h1>
    <!-- Subtitle -->
    <h2 class="text-pink-400 italic text-lg md:text-xl mt-2">
      Thế hệ mới (Next Style Darts)
    </h2>
    <!-- Thời gian hiện tại -->
    <p class="text-gray-600 mt-4">
      Hiện giờ là <span class="font-semibold">{{ currentTime }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "WelcomeHeader",
  data() {
    return {
      currentTime: this.getCurrentTime(),
    };
  },
  methods: {
    getCurrentTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      return `${hours}:${minutes}:${seconds} ngày ${day}/${month}/${year}`;
    },
  },
  mounted() {
    setInterval(() => {
      this.currentTime = this.getCurrentTime();
    }, 1000);
  },

  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
</style>

