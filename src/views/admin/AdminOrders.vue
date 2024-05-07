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
  <table class="table table-striped mt-4">
    <thead>
      <tr>
        <th></th>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th width="150">應付金額</th>
        <th width="">是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="orders">
        <tr v-for="order in orders" :key="order.id">
          <td>
            <a href="#"><i class="bi bi-x h3 text-danger" @click.prevent="delOrder(order)"></i></a>
          </td>
          <td>{{ $filters.date(order.create_at) }}</td>
          <td>
            <span>{{ order.user.email }}</span>
          </td>
          <td>
            <ul class="list-unstyled" v-for="product in order.products" :key="product.id">
              <li>{{ product.product.title }} /{{ product.qty }} {{ product.product.unit }}</li>
            </ul>
          </td>
          <td class="text-right">{{ order.total }}</td>
          <td>
            <div class="bg-success text-center activeRounded" v-if="order.is_paid">
              <span>已付款</span>
            </div>
            <div class="bg-warning text-center activeRounded" v-else>
              <span>未付款</span>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-dark btn-sm" @click.prevent="openModal(order)">檢視</button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <OrderModal ref="modal" :order="tempOrder"></OrderModal>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
import OrderModal from '@/components/admin/OrderModal.vue'
export default {
  components: {
    OrderModal
  },
  data() {
    return {
      orders: [],
      tempOrder: {},
      isLoading: ''
    }
  },
  methods: {
    getOrders() {
      this.isLoading = true
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/orders`
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            setTimeout(() => {
              this.isLoading = false
            }, 800)
            this.orders = res.data.orders
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.$swal('錯誤', '無法取得資料', 'error')
          }
        })
    },
    openModal(order) {
      this.tempOrder = { ...order }
      const openOrderModal = this.$refs.modal
      openOrderModal.showModal()
    },
    delOrder(order) {
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/order/${order.id}`
      this.$http
        .delete(api)
        .then((res) => {
          if (res.data.success) {
            this.getOrders()
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.$swal('錯誤', '訂單刪除失敗', 'error')
          }
        })
    }
  },
  mounted() {
    this.getOrders()
  }
}
</script>