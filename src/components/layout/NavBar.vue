<template>
  <div class="container">
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
            <router-link to="/products" class="nav-item nav-link me-4 text-light navBarHover"
              ><span class="navBarHover">產品列表</span></router-link
            >
            <router-link to="/blogs" class="nav-item nav-link me-4 text-light navBarHover"
              ><span class="navBarHover">部落格</span></router-link
            >
            <router-link to="/bookmark">
              <a href="#" class="nav-item nav-link me-4 navBarHover"
                ><i class="bi bi-heart position-relative text-light navBarHover">
                  <span
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    v-if="!bookmark.length == 0"
                    >{{ bookmark.length }}
                    <span class="visually-hidden">unread messages</span>
                  </span></i
                ></a
              >
            </router-link>

            <a href="#" class="nav-item nav-link me-4 navBarHover" @click.prevent="haveCartData"
              ><i class="bi bi-cart3 position-relative text-light navBarHover">
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  v-if="!carts.length == 0"
                >
                  {{ carts.length }}
                  <span class="visually-hidden">unread messages</span>
                </span></i
              ></a
            >
            >
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
    ...mapActions(cartStore, ['getCart']),
    haveCartData () {
      if (this.carts.length === 0) {
        this.$swal('購物車無資料', '請先選購商品', 'error')
        return
      }
      this.$router.push('/cart')
    }
  },
  mounted () {
    this.getBookmark()
    this.getCart()
  }
}
</script>
