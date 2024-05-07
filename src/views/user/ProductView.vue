<template>
  <div class="position-relative py-8 mb-6">
    <BannerSection></BannerSection>
    <div class="container d-flex flex-column">
      <div class="row justify-content-center my-auto">
        <div class="col-md-4 text-center">
          <h2 class="fw-bold mb-3 text-light h1">{{ product.title }}</h2>
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
            <ol class="breadcrumb d-flex justify-content-center">
              <li class="breadcrumb-item"><a href="#" class="aboutHover">首頁</a></li>
              <li class="breadcrumb-item text-light" aria-current="page">
                <a href="#" class="aboutHover">產品列表</a>
              </li>
              <li class="breadcrumb-item text-light" aria-current="page">{{ product.title }}</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <!-- product -->
  <div class="container mt-7">
    <div class="row justify-content-center mt-6">
      <div class="col-md-10">
        <div class="row">
          <div class="col-md-7">
            <img
              class="img-fluid rounded object-fit-cover"
              style="height: 350px; width: 100%"
              :src="productImg"
            />
            <div class="my-3 row">
              <img
                v-for="image in productImages"
                :key="image"
                class="img-fluid object-fit-cover imgSize col-3"
                style="height: 80px; cursor: pointer"
                :src="image"
                @click.prevent="productImg = image"
              />
            </div>
          </div>

          <div class="col-md-5 mt-3">
            <h2 class="fw-bold h1 mb-3">{{ product.title }}</h2>
            <p class="mb-3">
              {{ product.description }}
            </p>
            <p class="mb-0 text-muted text-end">
              <del>NT$ {{ product.origin_price }}</del>
            </p>
            <p class="h4 fw-bold text-end text-primary">NT$ {{ product.price }}</p>
            <div class="row align-items-center mb-6">
              <div class="col-5">
                <div class="input-group my-3 bg-light border">
                  <div class="input-group-prepend">
                    <button
                      class="btn btn-light border-end rounded-0 py-2"
                      type="button"
                      id="button-addon1"
                      @click.prevent="this.productQty > 1 ? this.productQty-- : 1"
                    >
                      <i class="bi bi-dash"></i>
                    </button>
                  </div>
                  <input
                    type="number"
                    class="form-control border-0 text-center my-auto shadow-none bg-light"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    min="1"
                    v-model="this.productQty"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-light rounded-0 border-start py-2"
                      type="button"
                      id="button-addon2"
                      @click.prevent="this.productQty++"
                    >
                      <i class="bi bi-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-5">
                <a
                  href="#"
                  class="text-nowrap btn w-100 py-2 btn-primary"
                  @click.prevent="addToCart(product, this.productQty)"
                  >加入購物車</a
                >
              </div>
              <div class="col-2">
                <a href="#" class="btn w-100 py-2 btn-info" @click.prevent="addBookmark(product)"
                  ><i class="bi bi-heart"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="border-primary border rounded p-3">
          <p>
            商品配送工作時間：<br />
            ※ 本商店皆以宅配方式寄出商品，於每次出貨時，寄發出貨通知信，還請多加留意。<br />
            ※ 商品配送時間一律為3-7個工作天送達商品。配送時間以每筆訂單完成付款時間開始算起，<br />
            因商品數量有限，需要時間做調度作業，敬請見諒。<br />
            ※ 若有特別需求，請於下訂單時備註說明，以利出貨作業。
          </p>
        </div>
        <div class="row my-5">
          <div class="col-md-4">
            <h2 class="mb-3">商品規格</h2>
            <ul class="px-0">
              <li>
                <p>款式：{{ product.title }}</p>
              </li>
              <li>
                <p>分類: {{ product.category }}</p>
              </li>
              <li>
                <p>內容: {{ product.content }}</p>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div>
          <h2 class="text-center mb-3 mt-5">相關產品</h2>
          <div class="row mb-6">
            <div class="col-lg-4 col-md-6" v-for="product in randomProducts" :key="product.id">
              <div class="card border p-2 mb-4 position-relative">
                <a href="#" @click.prevent>
                  <img
                    height="200"
                    :src="product.imageUrl"
                    class="card-img-top rounded mb-3 object-fit-cover cardHover"
                    @click="getNewProductId(product.id)"
                  />
                </a>
                <a href="#" class="p-2 bookmark-icon">
                  <i class="bi bi-heart-fill"></i>
                </a>
                <div class="card-body p-0">
                  <h4>{{ product.title }}</h4>
                  <p class="card-text text-muted mb-2 text-truncate">
                    {{ product.description }}
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <span class="text-primary fw-bold me-2">$ {{ product.origin_price }}</span>
                      <p class="mb-0 text-muted text-end d-inline-block">
                        <del>${{ product.origin_price }}</del>
                      </p>
                    </div>
                    <button type="type" class="btn btn-primary" @click.prevent="addToCart(product)">
                      <i class="bi bi-handbag"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from '@/stores/cartStore.js'
import { mapActions, mapState } from 'pinia'
import bookmarkStore from '@/stores/bookmarkStore'
import BannerSection from '@/components/layout/BannerSection.vue'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  components: {
    BannerSection
  },
  data() {
    return {
      product: {},
      products: [],
      randomProducts: [],
      productImages: [],
      productImg: '',
      productId: '',
      productQty: 1
    }
  },
  methods: {
    ...mapActions(cartStore, ['addToCart', 'updateQty']),
    ...mapActions(bookmarkStore, ['getBookmark', 'addBookmark']),
    getNewProductId(id) {
      this.productId = id
      this.getProduct()
    },
    getProducts() {
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/products`
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.$swal('錯誤', '你所查看的API不存在', 'error')
          }
        })
    },
    getProduct() {
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${this.productId}`
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product
            this.productImg = res.data.product.imageUrl
            this.productImages = res.data.product.imagesUrl
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.$swal('錯誤', '你所查看的API不存在', 'error')
          }
        })
    },
    getRandomProducts() {
      let newRandomProducts = this.products.slice(0) // 建立一個資料的副本，以免影響原始資料，從索引0開始
      let randomItems = []
      let index
      // 從原始資料中隨機選取元素，加入到randomItems陣列中
      for (let i = 0; i < 3; i++) {
        index = Math.floor(Math.random() * newRandomProducts.length)
        randomItems.push(newRandomProducts[index])
        newRandomProducts.splice(index, 1) // 從newRandomProducts中移除已選取的元素
      }

      this.randomProducts = randomItems
    }
  },
  watch: {
    products: {
      handler() {
        // 當products數據發生變化時重新計算隨機四筆資料
        this.getRandomProducts()
      },
      deep: true // 監聽對象的深度監聽，用於監聽對象內部數據的變化
    }
  },
  computed: {
    ...mapState(cartStore, ['carts'])
  },
  mounted() {
    this.productId = this.$route.params.id
    this.getProduct()
    this.getProducts()
    this.getBookmark()
  }
}
</script>