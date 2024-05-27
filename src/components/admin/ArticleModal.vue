<template>
  <div class="modal fade" tabindex="-1" ref="myModal">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-primary">
          <h5 class="modal-title text-light">新增文章</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-6 mb-3">
                  <label for="title" class="form-label">文章名稱</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="tempArticle.title"
                    placeholder="請輸入文章名稱"
                    id="title"
                  />
                </div>
                <div class="col-6">
                  <label for="author" class="form-label">作者名稱</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入作者名稱"
                    id="author"
                    v-model="tempArticle.author"
                  />
                </div>
                <div class="col-6 mb-3">
                  <label for="img" class="form-label">請輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control mb-3"
                    placeholder="請輸入圖片網址"
                    id="img"
                    v-model="tempArticle.image"
                  />
                  <img :src="tempArticle.image" class="w-25 h-50" alt="article-modal-img" />
                </div>
                <div class="col-6 mb-3">
                  <label for="tag" class="form-label">標籤</label>
                  <ul class="d-flex p-0 custom-btn-primary">
                    <li v-for="item in tags" :key="item">
                      <button class="btn me-2" type="button" @click.prevent="addTag(item)">
                        {{ item }}
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="col-12 mb-3">
                  <label for="description" class="form-label">文章描述</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入文章描述"
                    id="description"
                    v-model="tempArticle.description"
                  />
                </div>
                <div class="col-12">
                  <label for="content" class="form-label">文章內容</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    v-model="tempArticle.content"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="mt-2">
                  <input
                    id="isPublic"
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempArticle.isPublic"
                  />
                  <label class="form-check-label ms-1" for="isPublic">是否公開</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-dark" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="updateArticle">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixins from '@/mixins/modalMixins'

export default {
  props: {
    article: Object
  },
  data () {
    return {
      modal: null,
      tempArticle: {
        isPublic: true
      },
      tags: ['漢堡', '披薩', '飲料', '牛排', '沙拉']
    }
  },
  methods: {
    updateArticle () {
      const getTime = Math.floor(Date.now() / 1000)
      this.tempArticle.create_at = getTime
      this.$emit('update-article', this.tempArticle)
    },
    addTag (item) {
      this.tempArticle.tag = [item]
    },
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  watch: {
    article () {
      this.tempArticle = {
        ...this.article,
        isPublic: this.article.isPublic || false
      }
    }
  },
  mixins: [modalMixins]
}
</script>
