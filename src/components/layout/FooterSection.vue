<template>
  <!-- footer -->
  <div class="bg-dark py-5 mt-md-5 mt-3">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
        <router-link class="text-white h5 fw-bold" to="/">
          <img src="/src/assets/img/logo/logo.jpg" width="30" alt="logo圖" />
          FishDaddy</router-link
        >
        <ul class="d-flex list-unstyled mb-0 h4">
          <li>
            <a href="#" class="text-white mx-3" @click.prevent><i class="bi bi-facebook"></i></a>
          </li>
          <li>
            <a href="#" class="text-white mx-3" @click.prevent><i class="bi bi-instagram"></i></a>
          </li>
          <li>
            <a href="#" class="text-white ms-3" @click.prevent><i class="bi bi-line"></i></a>
          </li>
        </ul>
      </div>
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"
      >
        <div class="mb-md-0 mb-1">
          <router-link to="/login" class="mb-0 text-light navBarHover">後台登入</router-link>
          <p class="mb-0">02-4512-4787</p>
          <p class="mb-0">FishDaddy@mail.com</p>
        </div>
        <p class="mb-0">© 2024 FishDaddy All Rights Reserved.</p>
      </div>
    </div>
  </div>
  <button type="button" class="scrollTop" @click="scrollTop">
    <i class="bi bi-caret-up-square text-primary" style="font-size: 3rem"></i>
  </button>
</template>

<script>
export default {
  methods: {
    scrollTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
