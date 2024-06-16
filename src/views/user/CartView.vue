<template>
  <VueLoading :active="isLoading"/>
  <div>
    <div class="layoutBanner mb-md-5 mb-3">
      <div class="container">
        <div class="row justify-content-center my-auto">
          <div class="col-md-4 text-center layout-Banner-Text">
            <h2 class="fw-bold mb-3 text-light h1">購物車</h2>
            <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
              <ol class="breadcrumb d-flex justify-content-center">
                <li class="breadcrumb-item"><a href="#" class="layout-banner-txt-Hover" @click.prevent>首頁</a></li>
                <li class="breadcrumb-item text-light" aria-current="page">購物車</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>

  <template v-if="carts.length === 0">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div
            class="border text-center py-3 rounded"
            style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
          >
            <h3 class="mb-3">購物車清單</h3>
            <i class="bi bi-box-seam h1 mb-3 d-block"></i>
            <p class="mb-3">目前購物車內無產品，請先選購!</p>
            <router-link to="/products" class="custom-btn-primary">
              <button type="button" class="btn">開始購物</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>

  <template v-if="carts.length">
    <div class="container">
      <div class="row mb-md-5 mb-3">
        <div class="col-md-8">
          <div>
            <table class="table border">
              <thead>
                <tr>
                  <th></th>
                  <th>產品</th>
                  <th>單價</th>
                  <th class="table-qty-width">數量</th>
                  <th class="text-end">總價</th>
                </tr>
              </thead>
              <tbody style="line-height: 38px">
                <tr v-for="cart in carts" :key="cart.id">
                  <td class="text-center">
                    <a href="#" @click.prevent="delCartProduct(cart)"
                      ><i class="bi bi-trash"></i
                    ></a>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <img
                        class="object-fit-cover d-none d-lg-inline-block me-3"
                        height="50"
                        width="100"
                        alt="購物車產品圖"
                        :src="cart.product.imageUrl"
                      />
                      <h2 class="mt-2 mt-lg-0 table-cart-font">
                        {{ cart.product.title }}
                      </h2>
                    </div>
                  </td>
                  <td class="text-primary table-cart-font">$ {{ cart.product.origin_price }}</td>
                  <td>
                    <div class="bg-light d-flex">
                      <button class="qtyButton" type="button" @click="updateQty(cart, false)">
                        <i class="bi bi-dash"></i>
                      </button>
                      <input
                        type="number"
                        class="text-center my-auto qtyInput"
                        aria-label="Example text with button addon"
                        v-model.number="cart.qty"
                        value="1"
                        readonly
                      />
                      <button class="qtyButton" type="button" @click="updateQty(cart, true)">
                        <i class="bi bi-plus"></i>
                      </button>
                    </div>
                  </td>
                  <td class="text-primary text-end table-cart-font">$ {{ cart.product.price * cart.qty }}</td>
                </tr>
              </tbody>
            </table>
            <div class="text-end custom-btn-primary">
              <button class="btn" :disabled="carts.length === 0" type="button" @click="toCheckout">
                結帳去
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-4 mt-md-0">
          <div class="d-flex justify-content-between custom-btn-dark">
            <h2 class="h4">購物車清單</h2>
            <button class="btn" type="button" @click="delAllCart">清空購物車</button>
          </div>
          <hr />
          <div class="d-flex justify-content-between mb-1" v-for="cart in carts" :key="cart.name">
            <span>{{ cart.product.title }}</span>
            <span>NT$ {{ cart.product.origin_price }}</span>
          </div>
          <hr />
          <div class="d-flex justify-content-between mb-1">
            <span>小計</span>
            <span>NT$ {{ totalPrice.total }}</span>
          </div>
          <div class="d-flex justify-content-between mb-4">
            <span class="fw-bold h5">總計</span>
            <span class="fw-bold h6 text-primary">NT$ {{ totalPrice.final_total }}</span>
          </div>
          <div class="input-group mb-3 custom-btn-primary">
            <input
              type="text"
              class="form-control"
              placeholder="請輸入優惠碼"
              v-model="coupon"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn"
              type="button"
              id="button-addon2"
              :disabled="carts.length === 0"
              @click="addCoupon"
            >
              使用
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  <DelAllCartModal ref="delAllCartModal"/>
</template>

<script>
import cartStore from '@/stores/cartStore.js'
import { mapActions, mapState } from 'pinia'
import DelAllCartModal from '@/components/user/DelAllCartModal.vue'
import VueLoading from '@/components/VueLoading.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  components: {
    DelAllCartModal,
    VueLoading
  },
  data () {
    return {
      isAddOrDelNum: false,
      cartData: {},
      coupon: 'happy',
      isLoading: false
    }
  },
  computed: {
    ...mapState(cartStore, ['carts', 'totalPrice'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'delCartProduct', 'delAllCart', 'updateQty']),
    addCoupon () {
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/coupon`
      const couponCode = {
        code: this.coupon
      }
      this.$http
        .post(api, { data: couponCode })
        .then((res) => {
          if (res.data.success) {
            this.$swal('成功', '成功加入優惠券', 'success')
            this.getCart()
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.$swal('失敗', '找不到優惠券', 'error')
          }
        })
    },
    delAllCart () {
      if (this.carts.length === 0) {
        this.$swal('失敗', '購物車內無任何產品', 'error')
        return
      }
      const openDelCartModal = this.$refs.delAllCartModal
      openDelCartModal.showModal()
    },
    toCheckout () {
      this.$router.push('/checkout')
    }
  },
  mounted () {
    this.getCart()
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  }
}
</script>

<style lang="scss" scope>
  .qtyButton {
  width: 50px;
  height: 100%;
  border: 1px solid #d3d4d5;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    width: 40px;
  }
}

.table-cart-font {
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 11px;
      padding-top: 5px;
  }
}

.table-qty-width {
  width: 140px;

  @media (max-width: 768px) {
    width: 70px;
  }
}

.qtyButton:hover {
  background-color: #d3d4d5;
}

.qtyInput {
  width: 50px;
  border: 1px solid #d3d4d5;
  background-color: #f8f9fa;
  outline: none;

  @media (max-width: 768px) {
    width: 40px;
  }
}
</style>
