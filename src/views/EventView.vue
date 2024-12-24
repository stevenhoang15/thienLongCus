<template>
    <div class="flex h-screen bg-slate-600 font-sans">
      <aside class="w-1/5 p-4 bg-slate-600">
        <ul class="text-center text-xl">
            <li class="menu-item">
                <a href="#" @click="filterContent('all')" class="menu-link">
                    <img src="../assets/img/homeSR.png" alt="Icon 1" class="menu-icon">
                    <span>Tất cả</span>
                </a>
            </li>

            <li class="menu-item">
                <a href="#" @click="filterContent('updates')" class="menu-link">
                    <img src="../assets/img/homeSR.png" alt="Icon 1" class="menu-icon">
                    <span>Cập nhật</span>
                </a>
            </li>

            <li class="menu-item">
                <a href="#" @click="filterContent('sales')" class="menu-link">
                    <img src="../assets/img/homeSR.png" alt="Icon 1" class="menu-icon">
                    <span>Mở bán</span>
                </a>
            </li>

            <li class="menu-item">
                <a href="#" @click="filterContent('all')" class="menu-link">
                    <img src="../assets/img/homeSR.png" alt="Icon 1" class="menu-icon">
                    <span>Sự kiện</span>
                </a>
            </li>

            <li class="menu-item">
                <a href="#" @click="filterContent('updates')" class="menu-link">
                    <img src="../assets/img/homeSR.png" alt="Icon 1" class="menu-icon">
                    <span>Giải đấu</span>
                </a>
            </li>

            <li class="menu-item">
                <a href="#" @click="filterContent('sales')" class="menu-link">
                    <img src="../assets/img/homeSR.png" alt="Icon 1" class="menu-icon">
                    <span>Cẩm nang</span>
                </a>
            </li>
          </ul>
      </aside>
  
      <main class="flex-1 p-4 overflow-y-auto">
        <!-- <div class="h-1/3 bg-gray-300 mb-4">
          <carousel :items="sliderImages" />
        </div> -->
  
        <Carousel :itemsToShow="1" :wrapAround="true" :autoplay="3000" class="mb-4">
            <Slide v-for="slide in slides" :key="slide">
            <div class="carousel__item">
                <img :src="slide" alt="Slide" class="w-full h-full">
            </div>
            </Slide>

            <!-- <template #addons>
                <Navigation></Navigation>
                <Pagination />
            </template> -->
        </Carousel>

        <div v-for="article in filteredArticles" :key="article.id" class="bg-white p-4 rounded mb-4 shadow">
          <h3>{{ article.title }}</h3>
          <p>{{ article.content }}</p>
          </div>
      </main>
    </div>
  </template>

<script setup>
import { ref, computed } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css'; // Import CSS
const articles = ref([
  { id: 1, title: 'Bài viết 1', content: 'Nội dung bài viết 1...', category: 'updates' },
  { id: 2, title: 'Bài viết 2', content: 'Nội dung bài viết 2...', category: 'sales' },
  { id: 3, title: 'Bài viết 3', content: 'Nội dung bài viết 3...', category: 'updates' },
  // ...
]);

const filter = ref('all');

const filteredArticles = computed(() => {
  if (filter.value === 'all') {
    return articles.value;
  } else {
    return articles.value.filter(article => article.category === filter.value);
  }
});

const filterContent = (category) => {
    filter.value = category;
}

const slides = ref([
    'src/assets/img/homeSR.png',
    'src/assets/img/homeNew.jpg',
    'src/assets/img/homeNew.jpg',
])
</script>

<style scoped>
.carousel__item {
  height: 300px; /* Đặt chiều cao tối thiểu cho item */
  width: 100%;
  display: flex;
  justify-content: center; /* Canh giữa nội dung theo chiều ngang */
  align-items: center; /* Canh giữa nội dung theo chiều dọc */
}

.slide-image {
  height: 100%; /* Ảnh lấp đầy chiều cao của item */
  object-fit: fill; /* Hoặc cover, fill tùy theo nhu cầu */
}

.aside-menu {
  width: 250px; /* Chiều rộng của menu bên */
  background-color: #f0f0f0; /* Màu nền của menu bên */
  padding: 10px;
}

.aside-menu ul {
  list-style: none; /* Loại bỏ dấu chấm mặc định của list */
  padding: 0;
  margin: 0;
}

.menu-item {
  margin-bottom: 20px; /* Khoảng cách giữa các mục menu */
}

.menu-icon {
  width: 40px;
  height: 40px;
  margin-right: 50px; /* Khoảng cách giữa icon và text */
}

.menu-link {
  display: flex; /* Để icon và text nằm trên cùng một hàng */
  align-items: center; /* Canh giữa icon và text theo chiều dọc */
  padding: 10px;
  border-radius: 5px; /* Bo tròn góc */
  text-decoration: none; /* Loại bỏ gạch chân mặc định của link */
  color: #a19407; /* Màu chữ */
  background-color: #fff; /* Màu nền của hộp chữ nhật */
  transition: background-color 0.3s ease; /* Hiệu ứng chuyển màu mượt mà */
}

.menu-link:hover {
  background-color: #d5d0d0; /* Màu nền khi hover */
  color: #a19407; /* Màu chữ khi hover */
}

.menu-item.active .menu-link {
  background-color: #d5d0d0; /* Màu nền khi active */
  color: #ed3a3a; /* Màu chữ khi active */
}

</style>