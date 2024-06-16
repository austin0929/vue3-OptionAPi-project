<template>
  <VueLoading :active="isLoading"/>
  <div>
    <div class="layoutBanner mb-md-5 mb-3">
      <div class="container">
        <div class="row justify-content-center my-auto">
          <div class="col-md-4 text-center layout-Banner-Text">
            <h2 class="fw-bold mb-3 text-light h1">{{ product.title }}</h2>
            <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
              <ol class="breadcrumb d-flex justify-content-center">
                <li class="breadcrumb-item">
                  <router-link to="/" class="layout-banner-txt-Hover">首頁</router-link>
                </li>
                <li class="breadcrumb-item text-light" aria-current="page">
                  <router-link to="/products" class="layout-banner-txt-Hover"
                    >產品列表</router-link
                  >
                </li>
                <li class="breadcrumb-item text-light" aria-current="page">
                  {{ product.title }}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-10">
        <div class="row">
          <div class="col-md-7">
            <img
              class="img-fluid rounded object-fit-cover"
              style="height: 350px; width: 100%"
              :src="productImg"
              alt="單一產品放大圖"
            />
            <div class="my-3 row">
              <img
                v-for="image in productImages"
                :key="image"
                class="img-fluid object-fit-cover imgSize col-3"
                style="height: 80px; cursor: pointer"
                :src="image"
                @click.prevent="productImg = image"
                alt="單一產品縮小圖"
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
            <p class="h4 fw-bold text-end text-primary">
              NT$ {{ product.price }}
            </p>
            <div class="row align-items-center mb-6">
              <div class="col-5">
                <div class="input-group my-3 bg-light border">
                  <div class="input-group-prepend">
                    <button
                      class="btn btn-light border-end rounded-0 py-2"
                      type="button"
                      id="button-addon1"
                      @click="productQty > 1 ? productQty-- : 1"
                    >
                      <i class="bi bi-dash"></i>
                    </button>
                  </div>
                  <input
                    type="number"
                    class="form-control border-0 text-center my-auto bg-light"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    min="1"
                    v-model="productQty"
                    readonly
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-light rounded-0 border-start py-2"
                      type="button"
                      id="button-addon2"
                      @click="productQty++"
                    >
                      <i class="bi bi-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-5 custom-btn-primary">
                <a
                  href="#"
                  class="text-nowrap btn w-100 py-2"
                  @click.prevent="addToCart(product, productQty)"
                  >加入購物車</a
                >
              </div>
              <div class="col-2">
                <div class="custom-btn-info">
                  <a
                    href="#"
                    class="btn w-100 py-2"
                    @click.prevent="addBookmark(product)"
                    ><i class="bi bi-heart"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border-primary border rounded p-3">
          <p>商品配送工作時間：</p>
          <p>
            ※
            本商店皆以宅配方式寄出商品，於每次出貨時，寄發出貨通知信，還請多加留意。
          </p>
          <p>
            ※
            商品配送時間一律為3-7個工作天送達商品。配送時間以每筆訂單完成付款時間開始算起，
          </p>
          <p>
            因商品數量有限，需要時間做調度作業，敬請見諒。 ※
            若有特別需求，請於下訂單時備註說明，以利出貨作業。
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
            <div
              class="col-lg-4 col-md-6"
              v-for="product in randomProducts"
              :key="product.id"
            >
              <div class="card border p-2 mb-4 position-relative">
                <a href="#" @click.prevent="chooseProduct(product)">
                  <img
                    height="200"
                    :src="product.imageUrl"
                    class="card-img-top rounded mb-3 object-fit-cover cardHover"
                    alt="其他相關產品圖"
                  />
                  <div class="card-body p-0">
                    <h4 class="text-dark">{{ product.title }}</h4>
                    <p class="card-text text-muted mb-2 text-truncate">
                      {{ product.description }}
                    </p>
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <span class="text-primary fw-bold me-2"
                          >$ {{ product.origin_price }}</span
                        >
                        <p class="mb-0 text-muted text-end d-inline-block">
                          <del>${{ product.origin_price }}</del>
                        </p>
                      </div>
                      <div class="custom-btn-primary">
                        <a
                          href="#"
                          class="btn"
                          @click.prevent="addToCart(product)"
                        >
                          <i class="bi bi-handbag"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <div>
                  <a href="#" class="p-2 bookmark-icon" @click.prevent>
                    <i
                      class="bi bi-heart-fill"
                      @click.prevent="addBookmark(product)"
                    ></i>
                  </a>
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
import VueLoading from '@/components/VueLoading.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  components: {
    VueLoading
  },
  data () {
    return {
      product: {},
      products: [],
      randomProducts: [],
      productImages: [],
      productImg: '',
      productId: '',
      productQty: 1,
      isLoading: false
    }
  },
  methods: {
    ...mapActions(cartStore, ['addToCart', 'updateQty']),
    ...mapActions(bookmarkStore, ['getBookmark', 'addBookmark']),
    getNewProductId (id) {
      this.productId = id
      this.getProduct()
    },
    chooseProduct (product) {
      this.product = { ...product }
      this.productImages = [...product.imagesUrl]
      this.productImg = product.imageUrl
    },
    getProducts () {
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
    getProduct () {
      this.isLoading = true
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${this.productId}`
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            setTimeout(() => {
              this.isLoading = false
            }, 1000)
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
    getRandomProducts () {
      const newRandomProducts = this.products.slice(0)
      const randomItems = []
      let index
      for (let i = 0; i < 3; i++) {
        index = Math.floor(Math.random() * newRandomProducts.length)
        randomItems.push(newRandomProducts[index])
        newRandomProducts.splice(index, 1)
      }

      this.randomProducts = randomItems
    }
  },
  watch: {
    products: {
      handler () {
        this.getRandomProducts()
      },
      deep: true
    }
  },
  computed: {
    ...mapState(cartStore, ['carts'])
  },
  mounted () {
    this.productId = this.$route.params.id
    this.getProduct()
    this.getProducts()
    this.getBookmark()
  }
}
</script>

<style lang="scss" scope>
  .custom-btn-info a {
  background-color: #f5f5f5;
  border: 1px solid #dee2e6;
}

.custom-btn-info a {
  &:hover {
      background-color: #CA0808;
      color: white;
    }
}

.bookmark-icon {
  position: absolute;
    right: 15px;
    top: 5px;
    font-size: 1.3rem;
    border-radius: 50%;
    width: 30px;
    height: 30px;
}
</style>
