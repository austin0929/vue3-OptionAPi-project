<template>
  <VueLoading :active="isLoading"></VueLoading>
  <div class="container">
    <div class="text-end my-md-5 my-3 custom-btn-primary">
      <button class="btn btn-lg" @click="openModal(true)">新增產品</button>
    </div>
    <table class="table table-striped productTable">
      <thead>
        <tr>
          <th width="10"></th>
          <th width="10"></th>
          <th>產品名稱</th>
          <th>原價</th>
          <th>售價</th>
          <th width="150">狀態</th>
          <th width="100">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td class="pt-3">
            <a href="#"
              ><i class="bi bi-x h3 text-danger" @click.prevent="delProduct(product)"></i
            ></a>
          </td>
          <td></td>
          <td>
            <img class="" width="80" height="50" :src="product.imageUrl" />
            {{ product.title }}
          </td>
          <td>{{ product.origin_price }}</td>
          <td>{{ product.price }}</td>
          <td>
            <div class="bg-success text-center activeRounded" v-if="product.is_enabled">
              <span>啟用</span>
            </div>
            <div class="bg-warning text-center activeRounded" v-else>
              <span>未啟用</span>
            </div>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-outline-dark"
              @click.prevent="openModal(false, product)"
            >
              編輯
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <Pagination :pages="pagination" @update-page="getProducts"></Pagination>
  <ProductModal
    ref="modalComponent"
    :product="tempProduct"
    @update-product="updateProduct"
  ></ProductModal>
</template>

<script>
import Pagination from '@/components/PaginationComponent.vue'
import ProductModal from '@/components/admin/ProductModal.vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import VueLoading from '@/components/VueLoading.vue'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  components: {
    Pagination,
    ProductModal,
    VueLoading
  },
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNewProduct: false,
      isLoading: false
    }
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/products?page=${page}`
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
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
    openModal (isNew, product) {
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...product }
      }
      this.isNewProduct = isNew
      const modal = this.$refs.modalComponent
      modal.showModal()
    },
    updateProduct (product) {
      this.tempProduct = product
      let api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product`
      let httpMethods = 'post'
      if (!this.isNewProduct) {
        api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${product.id}`
        httpMethods = 'put'
      }
      this.$http[httpMethods](api, { data: this.tempProduct })
        .then((res) => {
          if (res.data.success) {
            toast('更新產品狀態', {
              theme: 'auto',
              type: 'success',
              autoClose: 1000,
              hideProgressBar: true,
              dangerouslyHTMLString: true
            })
            const closeModal = this.$refs.modalComponent
            closeModal.hideModal()
            this.getProducts()
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            toast('新增產品失敗', {
              theme: 'auto',
              type: 'error',
              autoClose: 1000,
              hideProgressBar: true,
              dangerouslyHTMLString: true
            })
          }
        })
    },
    delProduct (product) {
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${product.id}`
      this.$http
        .delete(api)
        .then((res) => {
          if (res.data.success) {
            this.getProducts()
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.$swal('錯誤', '刪除產品失敗', 'error')
          }
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
