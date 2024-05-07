<template>
  <div class="position-relative py-8 mb-6">
    <BannerSection></BannerSection>
    <div class="container d-flex flex-column">
      <div class="row justify-content-center my-auto">
        <div class="col-md-4 text-center">
          <h2 class="fw-bold mb-3 text-light h1">購物車</h2>
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
            <ol class="breadcrumb d-flex justify-content-center">
              <li class="breadcrumb-item"><a href="#" class="aboutHover">首頁</a></li>
              <li class="breadcrumb-item text-light" aria-current="page">
                <a href="#" class="aboutHover">購物車</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <!-- cart -->
  <div class="container">
    <div class="row mb-5">
      <div class="col-md-8">
        <div>
          <table class="table border">
            <thead>
              <tr>
                <th></th>
                <th>產品</th>
                <th>單價</th>
                <th width="140">數量</th>
                <th width="70" class="text-end">總價</th>
              </tr>
            </thead>
            <tbody style="line-height: 38px">
              <tr v-for="cart in carts" :key="cart.id">
                <td class="text-center">
                  <a href="#" @click.prevent="delCartProduct(cart)"><i class="bi bi-trash"></i></a>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      class="object-fit-cover d-none d-lg-inline-block me-3"
                      height="50"
                      width="100"
                      alt="card-img"
                      :src="cart.product.imageUrl"
                    />
                    <h2 class="h6 mt-2 mt-lg-0">{{ cart.product.title }}</h2>
                  </div>
                </td>
                <td class="text-primary">$ {{ cart.product.origin_price }}</td>
                <td>
                  <div class="input-group bg-light border">
                    <div class="input-group-prepend">
                      <button
                        class="btn btn-light border-end rounded-0 py-2"
                        type="button"
                        id="button-addon1"
                        @click="updateQty(cart, false)"
                      >
                        <i class="bi bi-dash"></i>
                      </button>
                    </div>
                    <input
                      type="number"
                      class="form-control border-0 text-center my-auto shadow-none bg-light"
                      placeholder=""
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      v-model.number="cart.qty"
                      value="1"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn btn-light rounded-0 border-start py-2"
                        type="button"
                        id="button-addon2"
                        @click="updateQty(cart, true)"
                      >
                        <i class="bi bi-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td class="text-primary text-end">$ {{ cart.product.price * cart.qty }}</td>
              </tr>
            </tbody>
          </table>
          <div class="text-end">
            <button
              class="btn btn-primary"
              :disabled="carts.length === 0"
              @click.prevent="toCheckout"
            >
              結帳去
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-4 mt-md-0">
        <div class="d-flex justify-content-between">
          <h2 class="h4">購物車清單</h2>
          <button class="btn btn-dark" type="button" @click.prevent="delAllCart">清空購物車</button>
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
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="請輸入優惠碼"
            v-model="coupon"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-primary"
            type="button"
            id="button-addon2"
            :disabled="carts.length === 0"
            @click.prevent="addCoupon"
          >
            送出
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
import cartStore from '@/stores/cartStore.js'
import { mapActions, mapState } from 'pinia'
import BannerSection from '@/components/layout/BannerSection.vue'

export default {
  components: {
    BannerSection
  },
  data() {
    return {
      isAddOrDelNum: false,
      cartData: {},
      coupon: 'happy'
    }
  },
  computed: {
    ...mapState(cartStore, ['carts', 'totalPrice'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'delCartProduct', 'delAllCart', 'updateQty']),
    addCoupon() {
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
    toCheckout() {
      this.$router.push('/checkout')
    }
  },
  mounted() {
    this.getCart()
  }
}
</script>