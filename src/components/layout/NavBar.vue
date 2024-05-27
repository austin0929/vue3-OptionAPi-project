<template>
  <div class="container mb-6">
    <div class="bg-black fixed-top py-3">
      <nav class="navbar navbar-expand-lg navbar-light container px-3 px-0">
        <router-link to="/" class="navbar-brand text-light fw-bold">
          <img src="/public/daddy.jpg" width="30" alt="logo-img" />
          FishDaddy</router-link
        >
        <button
          class="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/about" class="nav-item nav-link me-4 text-light"
              ><span class="navBarHover">關於我們</span></router-link
            >
            <router-link to="/products" class="nav-item nav-link me-4 text-light"
              ><span class="navBarHover">產品列表</span></router-link
            >
            <router-link to="/blogs" class="nav-item nav-link me-4 text-light"
              ><span class="navBarHover">部落格</span></router-link
            >
            <router-link to="/bookmark" class="icon-Hover">
              <a href="#" class="nav-item custom-nav-link me-5"
                ><i class="bi bi-heart position-relative">
                  <span
                    style="padding-left: 6px"
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                    v-if="!bookmark.length == 0"
                    >{{ bookmark.length }}
                    <span class="visually-hidden">unread messages</span>
                  </span></i
                ></a
              >
            </router-link>

            <router-link to="/cart">
              <div class="icon-Hover">
                <a href="#" class="nav-item custom-nav-link"
                  ><i class="bi bi-cart3 position-relative">
                    <span
                      style="padding-left: 6px"
                      class="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                      v-if="!carts.length == 0"
                    >
                      {{ carts.length }}
                      <span class="visually-hidden">unread messages</span>
                    </span></i
                  ></a
                >
              </div>
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import cartStore from '@/stores/cartStore.js'
import { mapState, mapActions } from 'pinia'
import bookmarkStore from '@/stores/bookmarkStore'

export default {
  computed: {
    ...mapState(cartStore, ['carts']),
    ...mapState(bookmarkStore, ['bookmark'])
  },
  methods: {
    ...mapActions(bookmarkStore, ['getBookmark']),
    ...mapActions(cartStore, ['getCart'])
  },
  watch: {
    $route () {
      const navbarCollapse = document.querySelector('.navbar-collapse')
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show')
      } else {
        navbarCollapse.classList.add('show')
      }
    }
  },
  mounted () {
    this.getBookmark()
    this.getCart()
  }
}
</script>
