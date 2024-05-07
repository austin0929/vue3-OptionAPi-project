<template>
  <div class="position-relative py-8 mb-6">
    <BannerSection></BannerSection>
    <div class="container d-flex flex-column">
      <div class="row justify-content-center my-auto">
        <div class="col-md-4 text-center">
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

  <!-- bookmark -->
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
              <a href="#"><i class="bi bi-trash" @click.prevent="delBookmark(mark, index)"></i></a>
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
            <td class="text-end">
              <button type="button" class="btn btn-primary" @click.prevent="addToCart(mark)">
                加入購物車
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import cartStore from '@/stores/cartStore'
import { mapActions, mapState } from 'pinia'
import bookmarkStore from '@/stores/bookmarkStore'
import BannerSection from '@/components/layout/BannerSection.vue'

export default {
  components: {
    BannerSection
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(bookmarkStore, ['getBookmark', 'delBookmark'])
  },
  computed: {
    ...mapState(bookmarkStore, ['bookmark', 'bookmarkDate'])
  },
  mounted() {
    this.getBookmark()
  }
}
</script>