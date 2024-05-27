<template>
  <VueLoadingVue :active="isLoading"></VueLoadingVue>
  <div>
    <div class="layoutBanner mb-md-5 mb-3">
      <div class="container">
        <div class="row justify-content-center my-auto">
          <div class="col-md-4 text-center layout-Banner-Text">
            <h2 class="fw-bold mb-3 text-light h1">產品列表</h2>
            <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
              <ol class="breadcrumb d-flex justify-content-center">
                <li class="breadcrumb-item">
                  <a href="#" class="aboutHover">首頁</a>
                </li>
                <li class="breadcrumb-item text-light" aria-current="page">
                  產品列表
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-lg-3 mb-3">
        <div class="bg-info text-secondary p-4 rounded border">
          <h2 class="fw-bold h5">產品列表</h2>
          <hr />
          <ul class="px-0">
            <li class="mb-3">
              <router-link class="productLinkHover" :to="`/products`"
                >全部產品</router-link
              >
            </li>
            <li class="mb-3" v-for="category in categories" :key="category">
              <router-link
                class="productLinkHover"
                :to="`/products?category=${category}`"
                >{{ category }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-9">
        <div class="searchAndSort">
          <div class="d-flex mb-3">
            <input
              class="form-control"
              v-model.trim="searchKeyword"
              type="search"
              placeholder="產品搜尋"
              @blur="searchProduct"
            />
          </div>
          <div class="productSelect ms-auto mb-3">
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="selectPrice"
              @change="sortPrice"
            >
              <option selected disabled>價格</option>
              <option value="1">低到高</option>
              <option value="2">高到低</option>
            </select>
          </div>
        </div>
        <div class="row mb-md-5 mb-3">
          <div
            class="col-lg-4 col-md-6"
            v-for="product in products"
            :key="product.id"
          >
            <div class="card border p-2 mb-4 position-relative">
              <router-link :to="`/product/${product.id}`">
                <img
                  height="200"
                  :src="product.imageUrl"
                  class="card-img-top rounded mb-3 object-fit-cover cardHover"
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
              </router-link>
              <div>
                <a href="#" class="p-2 bookmark-icon">
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
  <Pagination :pages="pagination" @update-page="getProducts"></Pagination>
</template>

<script>
import Pagination from '@/components/PaginationComponent.vue'
import cartStore from '@/stores/cartStore.js'
import bookmarkStore from '@/stores/bookmarkStore.js'
import { mapActions } from 'pinia'
import VueLoadingVue from '@/components/VueLoading.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  components: {
    Pagination,
    VueLoadingVue
  },
  data () {
    return {
      products: [],
      searchKeyword: '',
      selectPrice: '價格',
      pagination: {},
      isLoading: false,
      categories: ['漢堡', '披薩', '飲料', '牛排', '沙拉']
    }
  },
  methods: {
    ...mapActions(bookmarkStore, ['addBookmark']),
    ...mapActions(cartStore, ['addToCart']),
    getProducts (page = 1) {
      this.isLoading = true
      const { category = '' } = this.$route.query
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/products?category=${category}&page=${page}`
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.searchKeyword = ''
            this.products = res.data.products
            this.pagination = res.data.pagination
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
    searchProduct () {
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`
      this.$http
        .get(api)
        .then((res) => {
          this.products = res.data.products
          const getSearchItem = this.products.filter((item) =>
            item.title
              .trim()
              .toLowerCase()
              .includes(this.searchKeyword.toLowerCase())
          )
          if (getSearchItem.length > 0) {
            this.products = getSearchItem
          } else {
            this.$swal('錯誤', '抱歉，沒有找到符合條件的產品。', 'error')
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.$swal('錯誤', '你所查看的API不存在', 'error')
          }
        })
    },
    sortedProducts () {
      let getSortPrice = ''
      this.products.sort((a, b) => {
        if (this.selectPrice === '1') {
          return (getSortPrice = a.price - b.price)
        } else if (this.selectPrice === '2') {
          return (getSortPrice = b.price - a.price)
        }
        return getSortPrice
      })
    }
  },
  computed: {
    sortPrice () {
      return this.sortedProducts()
    }
  },
  watch: {
    '$route.query': {
      handler () {
        this.getProducts()
      },
      deep: true
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
