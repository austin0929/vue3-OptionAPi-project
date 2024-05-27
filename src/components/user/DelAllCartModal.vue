<template>
  <div
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="myModal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-primary">
          <h5 class="modal-title text-light" id="exampleModalLabel">刪除所有產品</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center">
          <i class="bi bi-exclamation-triangle-fill text-secondary" style="font-size: 4rem"></i>
          <p>確定刪除所有產品品項嗎?</p>
        </div>
        <div class="modal-footer mx-auto">
          <button type="button" class="btn btn-dark" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click.prevent="delAllCart">確定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixins from '@/mixins/modalMixins'
import { mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      modal: null
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
    delAllCart () {
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/carts`
      this.$http
        .delete(api)
        .then((res) => {
          if (res.data.success) {
            this.hideModal()
            this.getCart()
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.$swal('失敗', '刪除產品失敗', 'error')
          }
        })
    }
  },
  mixins: [modalMixins]
}
</script>
