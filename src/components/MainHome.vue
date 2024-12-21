<template>
  <div class="relative">
    <img src="../assets/img/homeSR.png" alt="Silkroad Online" class="h-full object-cover animated-bg w-full">
    <div class="absolute top-0 left-0 right-0 bottom-0 bg-black/50 flex justify-center items-center animate-pulse">
      <div class="text-yellow-500 font-bold text-center font-tegomin p-4 text-3xl md:text-2xl sm:text-xl absolute top-0">
        Server: VƯƠNG GIẢ VÔ SONG
      </div>

      <div class="flex flex-gap-4 sm:flex-row flex-col absolute top-1/2 text-6xl translate-y-16 animate-pulse mb-4">
        <div class="text-yellow-500 font-bold text-center font-tegomin p-4">
          Open Beta
        </div>
  
        <div class="bg-gray-800 p-4 rounded-lg text-yellow-500 font-bold text-center font-tegomin ">
          {{ days }}
        </div>
  
        <div class="text-yellow-500 font-bold text-center font-tegomin p-4 ">
          Ngày
        </div>

        <div class="bg-gray-800 p-4 rounded-lg text-yellow-500 font-bold text-center font-tegomin ">
          {{ hours }}
        </div>
  
        <div class="text-yellow-500 font-bold text-center font-tegomin p-4 ">
          Giờ
        </div>

        <div class="bg-gray-800 p-4 rounded-lg text-yellow-500 font-bold text-center font-tegomin ">
          {{ minutes }}
        </div>
  
        <div class="text-yellow-500 font-bold text-center font-tegomin p-4 ">
          Phút
        </div>

        <div class="bg-gray-800 p-4 rounded-lg text-yellow-500 font-bold text-center font-tegomin ">
          {{ seconds }}
        </div>
  
        <div class="text-yellow-500 font-bold text-center font-tegomin p-4 ">
          Giây
        </div>
      </div>

      <div class="flex flex-gap-4 absolute top-1/2 text-4xl translate-y-40 animate-pulse mt-4">
        <div class="text-yellow-500 font-bold text-center font-tegomin p-4 ">
          Server Test
        </div>
  
        <div class="bg-gray-800 p-4 rounded-lg text-yellow-500 font-bold text-center font-tegomin ">
          {{ testDays }}
        </div>
  
        <div class="text-yellow-500 font-bold text-center font-tegomin p-4">
          Ngày
        </div>

        <div class="bg-gray-800 p-4 rounded-lg text-yellow-500 font-bold text-center font-tegomin">
          {{ testHours }}
        </div>
  
        <div class="text-yellow-500 font-bold text-center font-tegomin p-4">
          Giờ
        </div>

        <div class="bg-gray-800 p-4 rounded-lg text-yellow-500 font-bold text-center font-tegomin">
          {{ testMinutes }}
        </div>
  
        <div class="text-yellow-500 font-bold text-center font-tegomin p-4">
          Phút
        </div>

        <div class="bg-gray-800 p-4 rounded-lg text-yellow-500 font-bold text-center font-tegomin">
          {{ testSeconds }}
        </div>
  
        <div class="text-yellow-500 font-bold text-center font-tegomin p-4">
          Giây
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import { ref, onMounted, onUnmounted, computed } from 'vue';

  export default {
    setup() {
    // Lấy giá trị từ LocalStorage nếu có
    const savedTimerCount = localStorage.getItem('timerCount');
    const savedTestDayTimer = localStorage.getItem('testDayTimer');

    const timerCount = ref(savedTimerCount ? parseInt(savedTimerCount) : 100 * 24 * 60 * 60);
    const testDayTimer = ref(savedTestDayTimer ? parseInt(savedTestDayTimer) : 7 * 24 * 60 * 60);
    const timerInterval = ref(null);
    const testTimerInterval = ref(null);

    // ... (các computed property như trong câu trả lời trước)
    const days = computed(() => Math.floor(timerCount.value / (24 * 60 * 60)));
    const hours = computed(() => Math.floor((timerCount.value % (24 * 60 * 60)) / (60 * 60)));
    const minutes = computed(() => Math.floor((timerCount.value % (60 * 60)) / 60));
    const seconds = computed(() => timerCount.value % 60);

    const testDays = computed(() => Math.floor(testDayTimer.value / (24 * 60 * 60)));
    const testHours = computed(() => Math.floor((testDayTimer.value % (24 * 60 * 60)) / (60 * 60)));
    const testMinutes = computed(() => Math.floor((testDayTimer.value % (60 * 60)) / 60));
    const testSeconds = computed(() => testDayTimer.value % 60);

    onMounted(() => {
      // Khởi tạo interval
      timerInterval.value = setInterval(() => {
        if (timerCount.value > 0) {
          timerCount.value--;
          localStorage.setItem('timerCount', timerCount.value); // Lưu vào LocalStorage
        } else {
          clearInterval(timerInterval.value);
        }
      }, 1000);
      // ... (tương tự cho testTimerInterval)
      testTimerInterval.value = setInterval(() => {
        if (testDayTimer.value > 0) {
          testDayTimer.value--;
          localStorage.setItem('testDayTimer', testDayTimer.value); // Lưu vào LocalStorage
        } else {
          clearInterval(testTimerInterval.value);
        }
      }, 1000);
    });

    onUnmounted(() => {
      clearInterval(timerInterval.value);
      clearInterval(testTimerInterval.value);
    });

    return {
      days,
      hours,
      minutes,
      seconds,
      testDays,
      testHours,
      testMinutes,
      testSeconds,
    };
  },
//   data() {
//     return {
//       timerCount: 100 * 24 * 60 * 60, // 100 days in seconds;
//       testDayTimer: 7 * 24 * 60 * 60
//     };
//   },

//   watch: {
//     timerCount: {
//       handler(value) {
//         if (value > 0) {
//           setTimeout(() => {
//             this.timerCount--;
//           }, 1000); // Update every second
//         }
//       },
//       immediate: true
//     },
//     testDayTimer: {
//       handler(value) {
//         if (value > 0) {
//           setTimeout(() => {
//             this.testDayTimer--;
//           }, 1000);
//         }
//       },
//       immediate: true
//     }
//   },

//   computed: {
//     days() {
//       return Math.floor(this.timerCount / (24 * 60 * 60));
//     },
//     hours() {
//       return Math.floor((this.timerCount % (24 * 60 * 60)) / (60 * 60));
//     },
//     minutes() {
//       return Math.floor((this.timerCount % (60 * 60)) / 60);
//     },
//     seconds() {
//       return this.timerCount % 60;
//     },
//     testDays() {
//       return Math.floor(this.testDayTimer / (24 * 60 * 60));
//     },
//     testHours() {
//       return Math.floor((this.testDayTimer % (24 * 60 * 60)) / (60 * 60));
//     },
//     testMinutes() {
//       return Math.floor((this.testDayTimer % (60 * 60)) / 60);
//     },
//     testSeconds() {
//       return this.testDayTimer % 60;
//     }

//   }
  }

</script>
  
<style scoped>
</style>
  