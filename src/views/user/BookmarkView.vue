<template>
  <VueLoading :active="isLoading"></VueLoading>
  <div>
    <div class="layoutBanner mb-md-5 mb-3">
      <div class="container">
        <div class="row justify-content-center my-auto">
          <div class="col-md-4 text-center layout-Banner-Text">
            <h2 class="fw-bold mb-3 text-light h1">收藏列表</h2>
            <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
              <ol class="breadcrumb d-flex justify-content-center">
                <li class="breadcrumb-item"><a href="#" class="aboutHover">首頁</a></li>
                <li class="breadcrumb-item text-light" aria-current="page">收藏列表</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>

  <template v-if="bookmark.length === 0">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div
            class="border text-center py-3 rounded"
            style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
          >
            <h3 class="mb-3">收藏清單</h3>
            <i class="bi bi-box-seam h1 mb-3 d-block"></i>
            <p class="mb-3">目前收藏清單內無產品!</p>
            <router-link to="/products" class="custom-btn-primary">
              <button type="button" class="btn">挑選產品</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>

  <template v-if="bookmark.length">
    <div class="container">
      <div class="mb-5" style="min-width: 300px; overflow-x: auto">
        <table class="table" style="width: 1100px">
          <thead>
            <tr>
              <th></th>
              <th>產品</th>
              <th>收藏日期</th>
              <th width="150">價格</th>
              <th width="200" class="text-end"></th>
            </tr>
          </thead>
          <tbody style="line-height: 36px">
            <tr v-for="(mark, index) in bookmark" :key="index">
              <td class="text-center">
                <a href="#"
                  ><i class="bi bi-trash" @click.prevent="delBookmark(mark, index)"></i
                ></a>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <img
                    class="object-fit-cover d-none d-lg-inline-block me-3"
                    height="50"
                    width="100"
                    alt="bookmark-img"
                    :src="mark.imageUrl"
                  />
                  <h2 class="h6 mt-2 mt-lg-0">{{ mark.title }}</h2>
                </div>
              </td>
              <td>{{ bookmarkDate }}</td>
              <td>$ {{ mark.origin_price }}</td>
              <td class="text-end custom-btn-primary">
                <button type="button" class="btn" @click="addToCart(mark)">加入購物車</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
</template>

<script>
import cartStore from '@/stores/cartStore'
import { mapActions, mapState } from 'pinia'
import bookmarkStore from '@/stores/bookmarkStore'
import VueLoading from '@/components/VueLoading.vue'

export default {
  components: {
    VueLoading
  },
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(bookmarkStore, ['getBookmark', 'delBookmark'])
  },
  computed: {
    ...mapState(bookmarkStore, ['bookmark', 'bookmarkDate'])
  },
  mounted () {
    this.getBookmark()
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  }
}
</script>
