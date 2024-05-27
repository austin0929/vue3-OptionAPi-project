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
          <h5 class="modal-title text-light" id="exampleModalLabel">付款成功</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center">
          <i class="bi bi-check2-circle text-primary" style="font-size: 4rem"></i>
          <p>還想再逛逛嗎?</p>
        </div>
        <div class="modal-footer mx-auto">
          <button type="button" class="btn btn-dark" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click.prevent="toProducts">回賣場</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixins from '@/mixins/modalMixins'

export default {
  data () {
    return {
      modal: null
    }
  },
  methods: {
    toProducts () {
      this.$router.push('/products')
      this.hideModal()
    }
  },
  mixins: [modalMixins]
}
</script>
