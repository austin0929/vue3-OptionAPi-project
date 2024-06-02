<template>
  <VueLoading :active="isLoading"></VueLoading>
  <div>
    <div class="layoutBanner mb-md-5 mb-3">
      <div class="container">
        <div class="row justify-content-center my-auto">
          <div class="col-md-4 text-center layout-Banner-Text">
            <h2 class="fw-bold mb-3 text-light h1">訂單明細</h2>
            <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
              <ol class="breadcrumb d-flex justify-content-center">
                <li class="breadcrumb-item">
                  <a href="#" class="aboutHover">首頁</a>
                </li>
                <li class="breadcrumb-item text-light" aria-current="page">
                  訂單明細
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row justify-content-center mb-md-5 mb-3">
      <div class="col-md-3 col-4">
        <div class="text-light text-center py-4 bg-secondary">確認訂單</div>
      </div>
      <div class="col-md-3 col-4">
        <div
          class="text-light text-center py-4"
          :class="order.is_paid === false ? 'stepperActive' : 'stepperDefault'"
        >
          建立訂單
        </div>
      </div>
      <div class="col-md-3 col-4">
        <div
          class="text-light text-center py-4"
          :class="order.is_paid === true ? 'stepperActive' : 'stepperDefault'"
        >
          完成訂單
        </div>
      </div>
    </div>
  </div>

  <div class="container mb-md-5 mb-3">
    <div class="row justify-content-center">
      <div class="col-md-8 mb-5">
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
                <td class="text-end text-primary fw-bold">
                  $ {{ order.total }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-8">
        <div class="border p-4 mb-md-5 mb-3">
          <h3 class="h5 mb-4">訂購人資料</h3>
          <template v-if="order.user">
            <table class="table border">
              <tbody>
                <tr>
                  <th width="180">姓名 <span class="text-primary">*</span></th>
                  <td>{{ order.user.name }}</td>
                </tr>
                <tr>
                  <th width="180">Email <span class="text-primary">*</span></th>
                  <td>{{ order.user.email }}</td>
                </tr>
                <tr>
                  <th width="180">電話 <span class="text-primary">*</span></th>
                  <td>{{ order.user.tel }}</td>
                </tr>
                <tr>
                  <th width="180">地址 <span class="text-primary">*</span></th>
                  <td>{{ order.user.address }}</td>
                </tr>
                <tr>
                  <th width="180">備註</th>
                  <td>{{ order.message }}</td>
                </tr>
                <tr>
                  <th width="180">付款狀態</th>
                  <td class="text-primary fw-bold" v-if="order.is_paid">
                    已付款
                  </td>
                  <td class="text-secondary fw-bold" v-else>未付款</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td class="text-end" colspan="6">
                    <button
                      class="btn btn-primary"
                      type="button"
                      @click="payOrder"
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
    </div>
  </div>
  <PayOrderModal ref="payOrderModal"></PayOrderModal>
</template>

<script>
import PayOrderModal from '@/components/user/PayOrderModal.vue'
import VueLoading from '@/components/VueLoading.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  components: {
    PayOrderModal,
    VueLoading
  },
  data () {
    return {
      order: {},
      orderId: '',
      isLoading: false
    }
  },
  methods: {
    getOrder () {
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
    payOrder () {
      this.isLoading = true
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/pay/${this.orderId}`
      this.$http
        .post(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            const openPayOrderModal = this.$refs.payOrderModal
            openPayOrderModal.showModal()
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
  mounted () {
    this.orderId = this.$route.params.id
    this.getOrder()
  }
}
</script>
