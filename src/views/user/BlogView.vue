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
  <div class="position-relative py-8 mb-6">
    <BannerSection />
    <div class="container d-flex flex-column">
      <div class="row justify-content-center my-auto">
        <div class="col-md-4 text-center">
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

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10 mb-5">
        <div>
          <img
            :src="article.image"
            alt="blog-img"
            class="object-fit-cover rounded mb-4"
            height="600"
            width="100%"
          />
          <h2 class="mb-4 fw-bold">
            {{ article.title }}
          </h2>
        </div>
        <div class="mb-md-5 mb-4">
          <ul class="d-flex text-secondary px-0">
            <li class="me-3"><i class="bi bi-person-circle me-1"></i>{{ article.author }}</li>
            <li><i class="bi bi-calendar3 me-1"></i>{{ $filters.date(article.create_at) }}</li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div style="line-height: 2.5rem">
          <p class="text-secondary mb-5">
            {{ article.description }}
          </p>
          <p class="text-secondary mb-5">
            {{ article.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerSection from '@/components/layout/BannerSection.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  components: {
    BannerSection
  },
  data () {
    return {
      articleId: '',
      article: {},
      isLoading: false
    }
  },
  methods: {
    getBlog () {
      this.isLoading = true
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/article/${this.articleId}`
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            setTimeout(() => {
              this.isLoading = false
            }, 800)
            this.article = res.data.article
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.$swal('錯誤', '你所查看的API不存在', 'error')
          }
        })
    }
  },
  mounted () {
    this.articleId = this.$route.params.id
    this.getBlog()
  }
}
</script>
