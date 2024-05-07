import { defineStore } from 'pinia'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axios from 'axios';
import Swal from 'sweetalert2'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default defineStore('cartStore', {
    state: () => ({
        carts: [],
        totalPrice: {}
    }),
    actions: {
        getCart() {
            const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`
            axios.get(api)
                .then((res) => {
                    if (res.data.success) {
                        this.carts = res.data.data.carts
                        this.totalPrice = {
                            total: res.data.data.total,
                            final_total: res.data.data.final_total
                        }
                    }
                })
                .catch((err) => {
                    if (err.response.data.message) {
                        Swal.fire('錯誤', '你所查看的API不存在', 'error')
                    }
                })
        },
        addToCart(product, qty = 1) {
            const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`
            const cart = {
                product_id: product.id,
                qty
            }
            axios.post(api, { data: cart })
                .then((res) => {
                    if (res.data.success) {
                        toast("成功加入購物車", {
                            theme: 'auto',
                            type: 'success',
                            autoClose: 1000,
                            hideProgressBar: true,
                            dangerouslyHTMLString: true
                        })
                        this.getCart()
                    }
                })
                .catch((err) => {
                    if (err.response.data.message) {
                        Swal.fire('錯誤', '加入購物車失敗', 'error')
                    }
                })
        },
        delCartProduct(product) {
            const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${product.id}`
            axios.delete(api)
                .then((res) => {
                    if (res.data.success) {
                        this.getCart()
                    }
                })
                .catch((err) => {
                    if (err.response.data.message) {
                        Swal.fire('錯誤', '刪除購物車失敗', 'error')
                    }
                })
        },
        delAllCart() {
            const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/carts`
            axios.delete(api)
                .then((res) => {
                    if (res.data.success) {
                        toast("已清空購物車", {
                            theme: 'auto',
                            type: 'success',
                            autoClose: 1000,
                            hideProgressBar: true,
                            dangerouslyHTMLString: true
                        })
                        this.getCart()
                    }
                })
                .catch((err) => {
                    if (err.response.data.message) {
                        toast("購物車無資料", {
                            theme: 'auto',
                            type: 'error',
                            autoClose: 1000,
                            hideProgressBar: true,
                            dangerouslyHTMLString: true
                        })
                    }
                })
        },
        updateQty(cart, isAddOrDelNum) {
            this.isAddOrDelNum = isAddOrDelNum
            const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${cart.id}`
            if (this.isAddOrDelNum) {
                this.cartData = {
                    product_id: cart.product_id,
                    qty: (cart.qty += 1)
                }
            } else {
                this.cartData = {
                    product_id: cart.product_id,
                    qty: cart.qty > 1 ? cart.qty -= 1 : 1
                }
            }
            axios.put(api, { data: this.cartData })
                .then((res) => {
                    if (res.data.success) {
                        this.getCart()
                    }
                })
                .catch((err) => {
                    if (err.response.data.message) {
                        this.$swal('錯誤', '更新購物車失敗', 'error')
                    }
                })
        }
    }
})
