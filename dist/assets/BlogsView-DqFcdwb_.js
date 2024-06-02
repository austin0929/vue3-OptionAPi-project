import { P as p } from './PaginationComponent-Idygglvc.js'; import { V as h } from './VueLoading-DTgNEhzE.js'; import { _ as v, c as n, d, b as t, F as m, v as b, x as f, r as u, o as c, g as P, t as a } from './index-z9VVAXen.js'; const V = { VITE_APP_URL: 'https://vue3-course-api.hexschool.io/v2', VITE_APP_PATH: 'david555', BASE_URL: '/vue3-OptionAPi-project/', MODE: 'production', DEV: !1, PROD: !0, SSR: !1 }; const { VITE_APP_URL: x, VITE_APP_PATH: y } = V; const B = { components: { PaginationComponent: p, VueLoading: h }, data () { return { articles: [], pagination: {}, isLoading: !1 } }, methods: { getBlogs (o = 1) { this.isLoading = !0; const l = `${x}/api/${y}/articles?page=${o}`; this.$http.get(l).then(s => { s.data.success && (setTimeout(() => { this.isLoading = !1 }, 800), this.articles = s.data.articles, this.pagination = s.data.pagination) }).catch(s => { s.response.data.message && this.$swal('錯誤', '你所查看的API不存在', 'error') }) }, toBlog (o) { this.$router.push(`/blog/${o.id}`) } }, mounted () { this.getBlogs() } }; const L = f('<div><div class="layoutBanner mb-md-5 mb-3"><div class="container"><div class="row justify-content-center my-auto"><div class="col-md-4 text-center layout-Banner-Text"><h2 class="fw-bold mb-3 text-light h1">部落格</h2><nav style="--bs-breadcrumb-divider:&#39;&gt;&#39;;" aria-label="breadcrumb"><ol class="breadcrumb d-flex justify-content-center"><li class="breadcrumb-item"><a href="#" class="aboutHover">首頁</a></li><li class="breadcrumb-item text-light" aria-current="page">部落格</li></ol></nav></div></div></div></div></div>', 1); const w = { class: 'container' }; const A = { class: 'row justify-content-center mb-lg-5 mb-1' }; const E = ['onClick']; const T = { class: 'col-md-5' }; const $ = ['src']; const j = { class: 'col-md-7' }; const C = { class: 'mb-4 fw-bold' }; const k = { class: 'mb-md-5 mb-3 text-secondary' }; const I = t('hr', null, null, -1); const R = { class: 'd-flex justify-content-between text-secondary' }; function S (o, l, s, U, i, r) { const _ = u('VueLoading'); const g = u('PaginationComponent'); return c(), n(m, null, [d(_, { active: i.isLoading }, null, 8, ['active']), L, t('div', w, [t('div', A, [(c(!0), n(m, null, b(i.articles, e => (c(), n('div', { class: 'col-lg-10 mb-4', key: e.id }, [t('a', { href: '#', class: 'row align-items-center', onClick: P(D => r.toBlog(e), ['prevent']) }, [t('div', T, [t('img', { src: e.image, alt: 'blog-img', class: 'object-fit-cover img-fluid rounded mb-md-0 mb-3' }, null, 8, $)]), t('div', j, [t('div', null, [t('h2', C, a(e.title), 1), t('p', k, a(e.description), 1), I, t('div', R, [t('span', null, a(e.author), 1), t('span', null, a(o.$filters.date(e.create_at)), 1)])])])], 8, E)]))), 128))])]), d(g, { pages: i.pagination, onUpdatePage: r.getBlogs }, null, 8, ['pages', 'onUpdatePage'])], 64) } const F = v(B, [['render', S]]); export { F as default }
