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
  <div class="text-end my-4">
    <button type="button" class="btn btn-primary btn-lg" @click.prevent="openCouponModal(true)">
      新增優惠券
    </button>
  </div>
  <table class="table mt-4 table-striped">
    <thead>
      <tr>
        <th width="100"></th>
        <th width="300">名稱</th>
        <th width="150">折扣百分比</th>
        <th width="150">到期日</th>
        <th width="100">是否啟用</th>
        <th width="80">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="coupon in coupons" :key="coupon.id">
        <td>
          <a href="#"><i class="bi bi-x h3 text-danger" @click.prevent="delCoupon(coupon)"></i></a>
        </td>
        <td>{{ coupon.title }}</td>
        <td>{{ coupon.percent }}</td>
        <td class="text-right">{{ $filters.date(coupon.due_date) }}</td>
        <td>
          <div class="bg-success text-center activeRounded" v-if="coupon.is_enabled">
            <span>啟用</span>
          </div>
          <div class="bg-warning text-center activeRounded" v-else>
            <span>未啟用</span>
          </div>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              @click.prevent="openCouponModal(false, coupon)"
            >
              編輯
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <CouponModal ref="couponModal" :coupon="tempCoupon" @update-coupon="updateCoupon"></CouponModal>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
import CouponModal from '@/components/admin/CouponModal.vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
export default {
  components: {
    CouponModal
  },
  data() {
    return {
      tempCoupon: {},
      coupons: [],
      isNewCoupon: false,
      isLoading: false
    }
  },
  methods: {
    getCoupons() {
      this.isLoading = true
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupons`
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.coupons = res.data.coupons
            setTimeout(() => {
              this.isLoading = false
            }, 800)
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.$swal('錯誤', '你所查看的API不存在', 'error')
          }
        })
    },
    openCouponModal(isNewCoupon, coupon) {
      if (isNewCoupon) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
      } else {
        this.tempCoupon = { ...coupon }
      }
      this.isNewCoupon = isNewCoupon
      const openModal = this.$refs.couponModal
      openModal.showModal()
    },
    updateCoupon(coupon) {
      this.tempCoupon = { ...coupon }
      let api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon`
      let httpMethods = 'post'
      if (!this.isNewCoupon) {
        api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon/${coupon.id}`
        httpMethods = 'put'
      }
      this.$http[httpMethods](api, { data: this.tempCoupon })
        .then((res) => {
          if (res.data.success) {
            toast('更新優惠券成功', {
              theme: 'auto',
              type: 'success',
              autoClose: 1000,
              hideProgressBar: true,
              dangerouslyHTMLString: true
            })
            this.getCoupons()
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            toast('新增優惠券失敗', {
              theme: 'auto',
              type: 'error',
              autoClose: 1000,
              hideProgressBar: true,
              dangerouslyHTMLString: true
            })
          }
        })
    },
    delCoupon(coupon) {
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon/${coupon.id}`
      this.$http
        .delete(api)
        .then((res) => {
          if (res.data.success) {
            this.getCoupons()
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.$swal('刪除失敗', '請新重操作', 'error')
          }
        })
    }
  },
  mounted() {
    this.getCoupons()
  }
}
</script>