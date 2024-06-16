<template>
  <VueLoading :active="isLoading"></VueLoading>
  <div class="container">
    <div class="text-end my-md-5 my-3 custom-btn-primary">
      <button class="btn btn-lg" type="button" @click="openArticleModal">新增文章</button>
    </div>
    <table class="table table-striped articleTable">
      <thead>
        <tr>
          <th width="10"></th>
          <th width="10"></th>
          <th>標題</th>
          <th>描述</th>
          <th width="100">作者</th>
          <th width="100">發布日期</th>
          <th width="150" class="text-center">狀態</th>
          <th width="100">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.id">
          <td class="pt-3">
            <a href="#" @click.prevent="delArticle(article)"
              ><i class="bi bi-x h3 text-danger"></i
            ></a>
          </td>
          <td></td>
          <td>
            <img class="" width="80" height="50" :src="article.image" alt="後台部落格圖"/>
            {{ article.title }}
          </td>
          <td>
            <p class="text-truncate d-block" style="width: 300px">{{ article.description }}</p>
          </td>
          <td>{{ article.author }}</td>
          <td>{{ $filters.date(article.create_at) }}</td>
          <td>
            <div class="bg-success text-center activeRounded" v-if="article.isPublic">
              <span>公開</span>
            </div>
            <div class="bg-warning text-center activeRounded" v-else>
              <span>不公開</span>
            </div>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-outline-dark"
              @click.prevent="openArticleEditModal(article)"
            >
              編輯
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <ArticleModal ref="articleModal" :article="tempArticle" @update-article="updateArticle" />
</template>

<script>
import ArticleModal from '@/components/admin/ArticleModal.vue'
import VueLoading from '@/components/VueLoading.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      tempArticle: {},
      articles: [],
      isNewArticle: false,
      isLoading: false
    }
  },
  components: {
    ArticleModal,
    VueLoading
  },
  methods: {
    openArticleEditModal (article) {
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article/${article.id}`
      this.$http
        .get(api)
        .then((res) => {
          this.tempArticle = res.data.article
          this.isNewArticle = false
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.$swal('錯誤', '你所查看的API不存在', 'error')
          }
        })
      const articleModal = this.$refs.articleModal
      articleModal.showModal()
    },
    openArticleModal () {
      this.tempArticle = {}
      const openModal = this.$refs.articleModal
      this.isNewArticle = true
      openModal.showModal()
    },
    updateArticle (article) {
      this.tempArticle = article
      let api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article`
      let methodsHttp = 'post'
      if (!this.isNewArticle) {
        api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article/${this.tempArticle.id}`
        methodsHttp = 'put'
      }
      this.$http[methodsHttp](api, { data: this.tempArticle })
        .then((res) => {
          if (res.data.success) {
            this.$refs.articleModal.hideModal()
            this.getArticles()
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.$swal('錯誤', '無法新增或修改產品', 'error')
          }
        })
    },
    getArticles () {
      this.isLoading = true
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/articles`
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.articles = res.data.articles
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
    delArticle (article) {
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article/${article.id}`
      this.$http
        .delete(api)
        .then((res) => {
          if (res.data.success) {
            this.getArticles()
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.$swal('錯誤', '刪除文章失敗', 'error')
          }
        })
    }
  },
  mounted () {
    this.getArticles()
  }
}
</script>

<style lang="scss" scope>
  .articleTable {
  line-height: 40px;
}

.activeRounded {
  border-radius: 50px;
}
</style>
