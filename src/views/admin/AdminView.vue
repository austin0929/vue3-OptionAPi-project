<template>
  <div class="ps-2 container-fluid">
    <div class="row vh-100">
      <ul class="col-2 bg-secondary text-light my-0">
        <h1 class="fw-bold h2 my-4">後台管理面板</h1>
        <li class="list-group-item h3 mb-3">
          <router-link to="/admin/products" class="list-group-item h3">產品列表</router-link>
        </li>
        <li class="list-group-item h3 mb-3">
          <router-link to="/admin/orders" class="list-group-item h3">訂單資料</router-link>
        </li>
        <li class="list-group-item h3 mb-3">
          <router-link to="/admin/coupons" class="list-group-item h3">優惠券</router-link>
        </li>
        <li class="list-group-item h3 mb-3">
          <router-link to="/admin/article" class="list-group-item h3">文章</router-link>
        </li>
        <li>
          <button type="button" class="list-group-item h3" @click.prevent="logout">登出</button>
        </li>
      </ul>
      <div class="col-8 offset-md-1">
        <router-view v-if="productsStatus"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL } = import.meta.env

export default {
  data() {
    return {
      productsStatus: false
    }
  },
  methods: {
    logout() {
      const api = `${VITE_APP_URL}/logout`
      this.$http
        .post(api)
        .then((res) => {
          if (res.data.success) {
            document.cookie = 'vuetoken=; expires=;'
            this.$swal('登出', '已成功登出', 'success')
            this.$router.push('/login')
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.$swal('錯誤', '請重新登入', 'error')
          }
        })
    }
  },
  mounted() {
    const api = `${VITE_APP_URL}/api/user/check`
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)vuetoken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = myCookie
    this.$http
      .post(api)
      .then((res) => {
        this.productsStatus = res.data.success
      })
      .catch((err) => {
        if (err.response.data.message) {
          this.$router.push('/login')
          this.$swal('發生錯誤', '請重新登入', 'error')
        }
      })
  }
}
</script>