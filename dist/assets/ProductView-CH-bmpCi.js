import { c as m } from './cartStore-By7gJ-wg.js'; import { _ as P, a as b, m as I, c as n, d as u, b as t, t as c, w as g, F as p, v, y as C, z as T, g as l, r as f, o as d } from './index-z9VVAXen.js'; import { b as V } from './bookmarkStore-igs1B4g_.js'; import { V as A } from './VueLoading-DTgNEhzE.js'; import './index-CwHr2tNN.js'; const L = { VITE_APP_URL: 'https://vue3-course-api.hexschool.io/v2', VITE_APP_PATH: 'david555', BASE_URL: '/vue3-OptionAPi-project/', MODE: 'production', DEV: !1, PROD: !0, SSR: !1 }; const { VITE_APP_URL: y, VITE_APP_PATH: k } = L; const B = { components: { VueLoading: A }, data () { return { product: {}, products: [], randomProducts: [], productImages: [], productImg: '', productId: '', productQty: 1, isLoading: !1 } }, methods: { ...b(m, ['addToCart', 'updateQty']), ...b(V, ['getBookmark', 'addBookmark']), getNewProductId (i) { this.productId = i, this.getProduct() }, getProducts () { const i = `${y}/api/${k}/products`; this.$http.get(i).then(s => { s.data.success && (this.products = s.data.products) }).catch(s => { s.response.data.message && this.$swal('錯誤', '你所查看的API不存在', 'error') }) }, getProduct () { this.isLoading = !0; const i = `${y}/api/${k}/product/${this.productId}`; this.$http.get(i).then(s => { s.data.success && (setTimeout(() => { this.isLoading = !1 }, 1e3), this.product = s.data.product, this.productImg = s.data.product.imageUrl, this.productImages = s.data.product.imagesUrl) }).catch(s => { s.response.data.message && this.$swal('錯誤', '你所查看的API不存在', 'error') }) }, getRandomProducts () { const i = this.products.slice(0); const s = []; let r; for (let a = 0; a < 3; a++)r = Math.floor(Math.random() * i.length), s.push(i[r]), i.splice(r, 1); this.randomProducts = s } }, watch: { products: { handler () { this.getRandomProducts() }, deep: !0 } }, computed: { ...I(m, ['carts']) }, mounted () { this.productId = this.$route.params.id, this.getProduct(), this.getProducts(), this.getBookmark() } }; const E = { class: 'layoutBanner mb-md-5 mb-3' }; const j = { class: 'container' }; const Q = { class: 'row justify-content-center my-auto' }; const R = { class: 'col-md-4 text-center layout-Banner-Text' }; const S = { class: 'fw-bold mb-3 text-light h1' }; const U = { style: { '--bs-breadcrumb-divider': "'>'" }, 'aria-label': 'breadcrumb' }; const N = { class: 'breadcrumb d-flex justify-content-center' }; const D = { class: 'breadcrumb-item' }; const H = t('a', { href: '#', class: 'aboutHover' }, '首頁', -1); const M = { class: 'breadcrumb-item text-light', 'aria-current': 'page' }; const O = t('a', { href: '#', class: 'aboutHover' }, '產品列表', -1); const z = { class: 'breadcrumb-item text-light', 'aria-current': 'page' }; const F = { class: 'container' }; const $ = { class: 'row justify-content-center mt-5' }; const q = { class: 'col-md-10' }; const G = { class: 'row' }; const J = { class: 'col-md-7' }; const K = ['src']; const W = { class: 'my-3 row' }; const X = ['src', 'onClick']; const Y = { class: 'col-md-5 mt-3' }; const Z = { class: 'fw-bold h1 mb-3' }; const tt = { class: 'mb-3' }; const st = { class: 'mb-0 text-muted text-end' }; const ot = { class: 'h4 fw-bold text-end text-primary' }; const et = { class: 'row align-items-center mb-6' }; const it = { class: 'col-5' }; const ct = { class: 'input-group my-3 bg-light border' }; const nt = { class: 'input-group-prepend' }; const dt = t('i', { class: 'bi bi-dash' }, null, -1); const rt = [dt]; const lt = { class: 'input-group-append' }; const at = t('i', { class: 'bi bi-plus' }, null, -1); const ut = [at]; const pt = { class: 'col-5 custom-btn-primary' }; const _t = { class: 'col-2' }; const ht = { class: 'custom-btn-info' }; const mt = t('i', { class: 'bi bi-heart' }, null, -1); const bt = [mt]; const gt = t('div', { class: 'border-primary border rounded p-3' }, [t('p', null, '商品配送工作時間：'), t('p', null, ' ※ 本商店皆以宅配方式寄出商品，於每次出貨時，寄發出貨通知信，還請多加留意。 '), t('p', null, ' ※ 商品配送時間一律為3-7個工作天送達商品。配送時間以每筆訂單完成付款時間開始算起， '), t('p', null, ' 因商品數量有限，需要時間做調度作業，敬請見諒。 ※ 若有特別需求，請於下訂單時備註說明，以利出貨作業。 ')], -1); const vt = { class: 'row my-5' }; const ft = { class: 'col-md-4' }; const yt = t('h2', { class: 'mb-3' }, '商品規格', -1); const kt = { class: 'px-0' }; const xt = t('hr', null, null, -1); const wt = t('h2', { class: 'text-center mb-3 mt-5' }, '相關產品', -1); const Pt = { class: 'row mb-6' }; const It = { class: 'card border p-2 mb-4 position-relative' }; const Ct = ['src', 'onClick']; const Tt = t('a', { href: '#', class: 'p-2 bookmark-icon' }, [t('i', { class: 'bi bi-heart-fill' })], -1); const Vt = { class: 'card-body p-0' }; const At = { class: 'card-text text-muted mb-2 text-truncate' }; const Lt = { class: 'd-flex justify-content-between align-items-center' }; const Bt = { class: 'text-primary fw-bold me-2' }; const Et = { class: 'mb-0 text-muted text-end d-inline-block' }; const jt = { class: 'custom-btn-primary' }; const Qt = ['onClick']; const Rt = t('i', { class: 'bi bi-handbag' }, null, -1); const St = [Rt]; function Ut (i, s, r, a, o, x) { const w = f('VueLoading'); const _ = f('router-link'); return d(), n(p, null, [u(w, { active: o.isLoading }, null, 8, ['active']), t('div', null, [t('div', E, [t('div', j, [t('div', Q, [t('div', R, [t('h2', S, c(o.product.title), 1), t('nav', U, [t('ol', N, [t('li', D, [u(_, { to: '/' }, { default: g(() => [H]), _: 1 })]), t('li', M, [u(_, { to: '/products' }, { default: g(() => [O]), _: 1 })]), t('li', z, c(o.product.title), 1)])])])])])])]), t('div', F, [t('div', $, [t('div', q, [t('div', G, [t('div', J, [t('img', { class: 'img-fluid rounded object-fit-cover', style: { height: '350px', width: '100%' }, src: o.productImg }, null, 8, K), t('div', W, [(d(!0), n(p, null, v(o.productImages, e => (d(), n('img', { key: e, class: 'img-fluid object-fit-cover imgSize col-3', style: { height: '80px', cursor: 'pointer' }, src: e, onClick: l(h => o.productImg = e, ['prevent']) }, null, 8, X))), 128))])]), t('div', Y, [t('h2', Z, c(o.product.title), 1), t('p', tt, c(o.product.description), 1), t('p', st, [t('del', null, 'NT$ ' + c(o.product.origin_price), 1)]), t('p', ot, ' NT$ ' + c(o.product.price), 1), t('div', et, [t('div', it, [t('div', ct, [t('div', nt, [t('button', { class: 'btn btn-light border-end rounded-0 py-2', type: 'button', id: 'button-addon1', onClick: s[0] || (s[0] = e => o.productQty > 1 ? o.productQty-- : 1) }, rt)]), C(t('input', { type: 'number', class: 'form-control border-0 text-center my-auto bg-light', 'aria-label': 'Example text with button addon', 'aria-describedby': 'button-addon1', min: '1', 'onUpdate:modelValue': s[1] || (s[1] = e => o.productQty = e), readonly: '' }, null, 512), [[T, o.productQty]]), t('div', lt, [t('button', { class: 'btn btn-light rounded-0 border-start py-2', type: 'button', id: 'button-addon2', onClick: s[2] || (s[2] = e => o.productQty++) }, ut)])])]), t('div', pt, [t('a', { href: '#', class: 'text-nowrap btn w-100 py-2', onClick: s[3] || (s[3] = l(e => i.addToCart(o.product, o.productQty), ['prevent'])) }, '加入購物車')]), t('div', _t, [t('div', ht, [t('a', { href: '#', class: 'btn w-100 py-2', onClick: s[4] || (s[4] = l(e => i.addBookmark(o.product), ['prevent'])) }, bt)])])])])]), gt, t('div', vt, [t('div', ft, [yt, t('ul', kt, [t('li', null, [t('p', null, '款式：' + c(o.product.title), 1)]), t('li', null, [t('p', null, '分類: ' + c(o.product.category), 1)]), t('li', null, [t('p', null, '內容: ' + c(o.product.content), 1)])])])]), xt, t('div', null, [wt, t('div', Pt, [(d(!0), n(p, null, v(o.randomProducts, e => (d(), n('div', { class: 'col-lg-4 col-md-6', key: e.id }, [t('div', It, [t('a', { href: '#', onClick: s[5] || (s[5] = l(() => {}, ['prevent'])) }, [t('img', { height: '200', src: e.imageUrl, class: 'card-img-top rounded mb-3 object-fit-cover cardHover', onClick: h => x.getNewProductId(e.id) }, null, 8, Ct)]), Tt, t('div', Vt, [t('h4', null, c(e.title), 1), t('p', At, c(e.description), 1), t('div', Lt, [t('div', null, [t('span', Bt, '$ ' + c(e.origin_price), 1), t('p', Et, [t('del', null, '$' + c(e.origin_price), 1)])]), t('div', jt, [t('button', { type: 'type', class: 'btn', onClick: h => i.addToCart(e) }, St, 8, Qt)])])])])]))), 128))])])])])])], 64) } const zt = P(B, [['render', Ut]]); export { zt as default }
