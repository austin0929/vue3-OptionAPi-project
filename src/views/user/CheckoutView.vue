  <template>
  <VueLoading :active="isLoading"></VueLoading>
  <div>
    <div class="layoutBanner mb-md-5 mb-3">
      <div class="container">
        <div class="row justify-content-center my-auto">
          <div class="col-md-4 text-center layout-Banner-Text">
            <h2 class="fw-bold mb-3 text-light h1">訂單資訊</h2>
            <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
              <ol class="breadcrumb d-flex justify-content-center">
                <li class="breadcrumb-item"><a href="#" class="aboutHover">首頁</a></li>
                <li class="breadcrumb-item text-light" aria-current="page">訂單資訊</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row justify-content-center mb-md-5 mb-3">
      <div class="col-md-3 col-4">
        <div class="text-light text-center py-4 stepperActive">確認訂單</div>
      </div>
      <div class="col-md-3 col-4">
        <div class="text-light text-center py-4 bg-secondary">建立訂單</div>
      </div>
      <div class="col-md-3 col-4">
        <div class="text-light text-center py-4 bg-secondary">完成訂單</div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="border p-4 mb-md-5 mb-3">
          <h2 class="h4 mb-3">訂購人資料</h2>
          <VForm ref="form" v-slot="{ errors }" @submit="sendOrder">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <VField
                id="email"
                name="信箱"
                type="email"
                class="form-control bg-light"
                placeholder="請輸入 Email"
                rules="required|email"
                :class="{ 'is-invalid': errors['信箱'] }"
                v-model="form.user.email"
              ></VField>
              <ErrorMessage name="信箱" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <VField
                id="name"
                name="姓名"
                type="text"
                class="form-control bg-light"
                placeholder="請輸入姓名"
                rules="required"
                :class="{ 'is-invalid': errors['姓名'] }"
                v-model="form.user.name"
              ></VField>
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <VField
                id="tel"
                name="電話"
                type="text"
                class="form-control bg-light"
                placeholder="請輸入電話"
                :rules="isPhone"
                :class="{ 'is-invalid': errors['電話'] }"
                v-model="form.user.tel"
              ></VField>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <VField
                id="address"
                name="地址"
                type="text"
                class="form-control bg-light"
                placeholder="請輸入地址"
                rules="required"
                :class="{ 'is-invalid': errors['地址'] }"
                v-model="form.user.address"
              ></VField>
              <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <VField
                id="message"
                class="form-control bg-light"
                name="message"
                cols="30"
                rows="5"
                as="textarea"
                v-model="form.message"
              ></VField>
            </div>
            <div class="custom-btn-primary">
              <button type="submit" class="btn border w-100">送出訂單</button>
            </div>
          </VForm>
        </div>
      </div>
      <div class="col-md-6">
        <div class="p-4 border">
          <h2 class="h4 mb-3">訂單資訊</h2>
          <table class="table table-light">
            <thead>
              <tr>
                <th>產品</th>
                <th class="text-end">總計</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cart in carts" :key="cart.id">
                <td class="fw-bold">{{ cart.product.title }} x {{ cart.qty }}</td>
                <td class="text-end">$ {{ cart.product.origin_price }}</td>
              </tr>
              <tr>
                <td class="fw-bold">小計</td>
                <td class="text-end text-primary">$ {{ totalPrice.total }}</td>
              </tr>
              <tr>
                <td class="fw-bold">總計</td>
                <td class="text-end text-primary fw-bold">$ {{ totalPrice.final_total }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueLoading from '@/components/VueLoading.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  components: {
    VueLoading
  },
  data () {
    return {
      carts: [],
      totalPrice: {},
      isLoading: '',
      form: {
        user: {
          email: '',
          name: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getCart () {
      this.isLoading = true
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.carts = res.data.data.carts
            this.totalPrice = {
              total: res.data.data.total,
              final_total: res.data.data.final_total
            }
            setTimeout(() => {
              this.isLoading = false
            }, 1000)
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.$swal('錯誤', '你所查看的API不存在', 'error')
          }
        })
    },
    sendOrder () {
      this.isLoading = true
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/order`
      this.$http
        .post(api, { data: this.form })
        .then((res) => {
          if (res.data.success) {
            const orderId = res.data.orderId
            setTimeout(() => {
              this.isLoading = false
            }, 2000)
            this.$refs.form.resetForm()
            this.$router.push(`/order/${orderId}`)
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.$swal('失敗', '請檢察表單資訊', 'error')
          }
        })
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
