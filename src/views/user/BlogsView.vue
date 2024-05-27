<template>
  <VueLoading :active="isLoading"></VueLoading>
  <div>
    <div class="layoutBanner mb-md-5 mb-3">
      <div class="container">
        <div class="row justify-content-center my-auto">
          <div class="col-md-4 text-center layout-Banner-Text">
            <h2 class="fw-bold mb-3 text-light h1">部落格</h2>
            <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
              <ol class="breadcrumb d-flex justify-content-center">
                <li class="breadcrumb-item"><a href="#" class="aboutHover">首頁</a></li>
                <li class="breadcrumb-item text-light" aria-current="page">部落格</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row justify-content-center mb-lg-5 mb-1">
      <div class="col-lg-10 mb-4" v-for="article in articles" :key="article.id">
        <a href="#" class="row align-items-center" @click.prevent="toBlog(article)">
          <div class="col-md-5">
            <img
              :src="article.image"
              alt="blog-img"
              class="object-fit-cover img-fluid rounded mb-md-0 mb-3"
            />
          </div>
          <div class="col-md-7">
            <div>
              <h2 class="mb-4 fw-bold">{{ article.title }}</h2>
              <p class="mb-md-5 mb-3 text-secondary">{{ article.description }}</p>
              <hr />
              <div class="d-flex justify-content-between text-secondary">
                <span>{{ article.author }}</span>
                <span>{{ $filters.date(article.create_at) }}</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
  <PaginationComponent :pages="pagination" @update-page="getBlogs"></PaginationComponent>
</template>

<script>
import PaginationComponent from '@/components/PaginationComponent.vue'
import VueLoading from '@/components/VueLoading.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  components: {
    PaginationComponent,
    VueLoading
  },
  data () {
    return {
      articles: [],
      pagination: {},
      isLoading: false
    }
  },
  methods: {
    getBlogs (page = 1) {
      this.isLoading = true
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/articles?page=${page}`
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            setTimeout(() => {
              this.isLoading = false
            }, 800)
            this.articles = res.data.articles
            this.pagination = res.data.pagination
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.$swal('錯誤', '你所查看的API不存在', 'error')
          }
        })
    },
    toBlog (article) {
      this.$router.push(`/blog/${article.id}`)
    }
  },
  mounted () {
    this.getBlogs()
  }
}
</script>
