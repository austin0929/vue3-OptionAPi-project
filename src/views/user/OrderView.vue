<template>
  <VueLoading :active="isLoading"
    ><div class="loadingio-spinner-spin-nq4q5u6dq7r">
      <div class="ldio-x2uulkbinbj">
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
      </div>
    </div>
  </VueLoading>
  <div class="position-relative py-8 mb-6">
    <BannerSection></BannerSection>
    <div class="container d-flex flex-column">
      <div class="row justify-content-center my-auto">
        <div class="col-md-4 text-center">
          <h2 class="fw-bold mb-3 text-light h1">訂單</h2>
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
            <ol class="breadcrumb d-flex justify-content-center">
              <li class="breadcrumb-item"><a href="#" class="aboutHover">首頁</a></li>
              <li class="breadcrumb-item text-light" aria-current="page">
                <a href="#" class="aboutHover">訂單明細</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <!-- order -->
  <div class="container mb-5">
    <div>
      <h2 class="text-primary h6 mb-4" v-if="order.is_paid">
        <i class="bi bi-check-circle me-1"></i>感謝您的訂購，訂單已經收到。
      </h2>
    </div>
    <div class="border p-4">
      <h2 class="h5 mb-4">訂單明細</h2>
      <table class="table border">
        <thead>
          <tr>
            <th>產品</th>
            <th class="text-end">總計</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in order.products" :key="product.id">
            <td class="text-secondary">{{ product.product.title }} x 1</td>
            <td class="text-end">$ {{ product.final_total }}</td>
          </tr>
          <tr>
            <td class="w-50 border">總計</td>
            <td class="text-end text-primary fw-bold">$ {{ order.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- 訂購人資料 -->
  <div class="container">
    <div class="border p-4 mb-5">
      <h3 class="h5 mb-4">訂購人資料</h3>
      <template v-if="order.user">
        <table class="table border">
          <tbody>
            <tr>
              <th width="180">姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th width="180">Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th width="180">電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th width="180">地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th width="180">備註</th>
              <td>{{ order.message }}</td>
            </tr>
            <tr>
              <th width="180">付款狀態</th>
              <td class="text-primary fw-bold" v-if="order.is_paid">已付款</td>
              <td class="text-secondary fw-bold" v-else>未付款</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td class="text-end" colspan="6">
                <button
                  class="btn btn-primary"
                  type="button"
                  @click.prevent="payOrder"
                  v-if="!order.is_paid"
                >
                  確認付款
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </template>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
import BannerSection from '@/components/layout/BannerSection.vue'

export default {
  components: {
    BannerSection
  },
  data() {
    return {
      order: {},
      orderId: '',
      isLoading: ''
    }
  },
  methods: {
    getOrder() {
      this.isLoading = true
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/order/${this.orderId}`
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order
            setTimeout(() => {
              this.isLoading = false
            }, 2000)
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.$swal('錯誤', '你所查看的API不存在', 'error')
          }
        })
    },
    payOrder() {
      this.isLoading = true
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/pay/${this.orderId}`
      this.$http
        .post(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.$swal('付款成功', '感謝您的購買', 'success')
            this.getOrder()
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.$swal('錯誤', '付款失敗', 'error')
          }
        })
    }
  },
  mounted() {
    this.orderId = this.$route.params.id
    this.getOrder()
  }
}
</script>