<template>
  <h2 class="text-2xl font-semibold text-center mt-10">Thông Tin Nạp Thẻ</h2>
  <div class="bg-white rounded-lg shadow-md font-sans flex items-center justify-center h-fit">
<!-- @submit.prevent="handleSubmit" -->
    <form class="w-1/2">
      <div class="mb-4">
        <label for="username" class="block text-gray-700 font-medium mb-2">Tên Tài Khoản:</label>
        <input type="text" id="username" v-model="form.username" required
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nhập tên tài khoản" />
        <div v-if="errors.username" class="text-red-500 text-sm mt-1">{{ errors.username }}</div>
      </div>

      <div class="mb-4">
        <label for="amount" class="block text-gray-700 font-medium mb-2">Số Tiền Giao Dịch (VNĐ):</label>
        <input type="number" id="amount" v-model.number="form.amount" required min="0"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <div v-if="errors.amount" class="text-red-500 text-sm mt-1">{{ errors.amount }}</div>
          <p class="text-gray-500 text-sm mt-1">Đang nhập: {{ formatCurrency(form.amount) }} VNĐ</p>
      </div>

      <div class="mb-4">
        <label for="gold" class="block text-gray-700 font-medium mb-2">Số Vàng Cộng Vào:</label>
        <input type="text" id="gold" :value="formattedGold" readonly
          class="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-500"
          placeholder="Số vàng được tính tự động" />
      </div>

      <div v-if="message" class="mb-4" :class="message.type === 'success' ? 'text-green-500' : 'text-red-500'">
        {{ message.text }}
      </div>

      <button type="submit" @click="navigateNapThe"
        class="w-full mb-40 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300">
        Nạp Thẻ
      </button>
    </form>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const form = reactive({
            username: '',
            amount: 100000,
        });

        const errors = reactive({
            username: '',
            amount: '',
        });

        const message = ref(null);

        const formatCurrency = (value) => {
            if (!value) return '0';
            return value.toLocaleString('vi-VN'); // Định dạng tiền VNĐ
        };

        const formattedGold = computed(() => {
            const gold = form.amount ? form.amount * 10 : 0;
            return gold.toLocaleString('en-US'); // Định dạng số với dấu phẩy
        });

        const handleSubmit = () => {
            errors.username = '';
            errors.amount = '';

            if (!form.username) {
                errors.username = 'Vui lòng nhập tên tài khoản.';
            }
            if (!form.amount || form.amount <= 0) {
                errors.amount = 'Vui lòng nhập số tiền hợp lệ.';
            }

            if (errors.username || errors.amount) {
                return;
            }

            console.log('Dữ liệu form:', form, formattedGold.value);
            message.value = { type: 'loading', text: 'Đang xử lý...' };

            axios.post('/api/recharge', { ...form, gold: formattedGold.value.replace(/,/g, '') }) // Gửi số không định dạng lên server
            .then(response => {
                console.log(response.data);
                message.value = { type: 'success', text: 'Nạp thẻ thành công!' };
                form.username = '';
                form.amount = 100000;
                router.push('/napthe');
            })
            .catch(error => {
                console.error(error);
                message.value = { type: 'error', text: 'Đã có lỗi xảy ra. Vui lòng thử lại.' };
            });
        };

        function navigateNapThe(){
            this.$router.push('/napthe');
        }
        // function getGold() {
        //     axios.get('/api/gold')
        //     .then(response => {
        //         console.log(response.data);
        //         formattedGold.value = response.data.gold;
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
        // }

        return {
            form,
            errors,
            message,
            formatCurrency,
            formattedGold,
            handleSubmit,
            navigateNapThe
        };
    },
};
</script>