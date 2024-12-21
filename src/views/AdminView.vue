<template>
  <div id="date-range-picker" class="flex items-center">
    <!-- Start Date Picker -->
    <div class="relative">
      <label for="datepicker-range-start" class="block text-sm font-medium text-gray-700">Start Date</label>
      <Datepicker 
        v-model="startDate" 
        :format="dateFormat"
        placeholder="Select date start"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
      />
    </div>
    
    <span class="mx-4 text-gray-500">to</span>
    
    <!-- End Date Picker -->
    <div class="relative">
      <label for="datepicker-range-end" class="block text-sm font-medium text-gray-700">End Date</label>
      <Datepicker 
        v-model="endDate" 
        :format="dateFormat"
        placeholder="Select date end"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
      />
    </div>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
export default {
  components: { VueDatePicker },
  data() {
    return {
      startDate: null,
      endDate: null,
      dateFormat: 'yyyy-MM-dd', // Định dạng ngày tháng
    };
  },
};
</script>

<style>
/* Tuỳ chỉnh style nếu cần */
</style>
