<template>
    <!-- <div v-if="errors.length > 0" class="text-red-500 text-center">
        <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
    </div> -->
    <h1 class="text-3xl font-bold mb-4 text-center pt-10 pb-10 font-hinamincho text-yellow-500 ">Chuyển đến tài khoản ngân hàng để Nạp Thẻ</h1>
    <div class="flex justify-center items-center h-screen pt-10">
        <img src="../assets/img/napthe.jpg" class="flex justify-center items-center h-screen" alt="Nap The">
    </div>
      <!-- <div class="flex flex-col space-y-4">
        <div class="flex space-x-4">
          <button 
            v-for="value in values" 
            :key="value"
            @click="selectedValue = value"
            :class="{
              'bg-blue-500 hover:bg-blue-700 text-white': selectedValue === value,
              'bg-gray-200 hover:bg-gray-300 text-gray-700': selectedValue !== value
            }"
            class="px-4 py-2 rounded"
          >
            {{ value }}
          </button>
        </div>
  
        <select v-model="selectedValue" class="border border-gray-300 rounded-md px-4 py-2">
          <option v-for="value in values" :key="value" :value="value">
            {{ value }}
          </option>
        </select>
  
        <p>Bạn đã chọn: {{ selectedValue }}</p>
  
        <button 
          @click="napThe" 
          :class="{ 'bg-gray-400': isLoading, 'bg-slate-700 text-yellow-500': !isLoading }" 
          class="px-4 py-2 rounded"
        >
          <span v-if="isLoading">Đang nạp...</span>
          <span v-else>Nạp Thẻ</span>
        </button>
      </div>-->
    
  </template>
  
  <script>
  export default {
    data() {
      return {
        values: [10000, 20000, 50000, 100000],
        selectedValue: null,
        isLoading: false,
        errors: []
      }
    },
    methods: {
      napThe() {
        this.errors = [];
        // Validate dữ liệu
        if (!this.selectedValue) {
            this.errors.push('Vui lòng chọn mệnh giá');
        }
        if (this.errors.length === 0) {
            // Gọi API của VNPAY
            this.isLoading = true;
            // ... code gọi API VNPAY ...
            setTimeout(() => {
              this.isLoading = false;
              alert('Nạp thẻ thành công!');
            }, 2000);
        }
        // Gọi API để nạp thẻ
      }
    }
  }
  </script>