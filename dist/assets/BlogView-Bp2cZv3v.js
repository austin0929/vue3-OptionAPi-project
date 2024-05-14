import { B as r } from './BannerSection-DB9sHSmb.js'; import { _, c as u, d as l, w as h, b as e, t as i, e as c, F as m, x as v, r as n, o as b } from './index-DrL7xUhK.js'; const p = { VITE_APP_URL: 'https://vue3-course-api.hexschool.io/v2', VITE_APP_PATH: 'david555', BASE_URL: './', MODE: 'production', DEV: !1, PROD: !0, SSR: !1 }; const { VITE_APP_URL: f, VITE_APP_PATH: g } = p; const x = { components: { BannerSection: r }, data () { return { articleId: '', article: {}, isLoading: !1 } }, methods: { getBlog () { this.isLoading = !0; const o = `${f}/api/${g}/article/${this.articleId}`; this.$http.get(o).then(s => { s.data.success && (setTimeout(() => { this.isLoading = !1 }, 800), this.article = s.data.article) }).catch(s => { s.response.data.message && this.$swal('錯誤', '你所查看的API不存在', 'error') }) } }, mounted () { this.articleId = this.$route.params.id, this.getBlog() } }; const P = e('div', { class: 'loadingio-spinner-spin-nq4q5u6dq7r' }, [e('div', { class: 'ldio-x2uulkbinbj' }, [e('div', null, [e('div')]), e('div', null, [e('div')]), e('div', null, [e('div')]), e('div', null, [e('div')]), e('div', null, [e('div')]), e('div', null, [e('div')]), e('div', null, [e('div')]), e('div', null, [e('div')])])], -1); const V = { class: 'position-relative py-8 mb-6' }; const y = v('<div class="container d-flex flex-column"><div class="row justify-content-center my-auto"><div class="col-md-4 text-center"><h2 class="fw-bold mb-3 text-light h1">部落格</h2><nav style="--bs-breadcrumb-divider:&#39;&gt;&#39;;" aria-label="breadcrumb"><ol class="breadcrumb d-flex justify-content-center"><li class="breadcrumb-item"><a href="#" class="aboutHover">首頁</a></li><li class="breadcrumb-item text-light" aria-current="page">部落格</li></ol></nav></div></div></div>', 1); const B = { class: 'container' }; const w = { class: 'row justify-content-center' }; const L = { class: 'col-md-10 mb-5' }; const A = ['src']; const E = { class: 'mb-4 fw-bold' }; const I = { class: 'mb-md-5 mb-4' }; const S = { class: 'd-flex text-secondary px-0' }; const T = { class: 'me-3' }; const j = e('i', { class: 'bi bi-person-circle me-1' }, null, -1); const R = e('i', { class: 'bi bi-calendar3 me-1' }, null, -1); const D = e('li', null, null, -1); const N = e('li', null, null, -1); const $ = { style: { 'line-height': '2.5rem' } }; const k = { class: 'text-secondary mb-5' }; const q = { class: 'text-secondary mb-5' }; function H (o, s, U, C, t, F) { const a = n('VueLoading'); const d = n('BannerSection'); return b(), u(m, null, [l(a, { active: t.isLoading }, { default: h(() => [P]), _: 1 }, 8, ['active']), e('div', V, [l(d), y]), e('div', B, [e('div', w, [e('div', L, [e('div', null, [e('img', { src: t.article.image, alt: 'blog-img', class: 'object-fit-cover rounded mb-4', height: '600', width: '100%' }, null, 8, A), e('h2', E, i(t.article.title), 1)]), e('div', I, [e('ul', S, [e('li', T, [j, c(i(t.article.author), 1)]), e('li', null, [R, c(i(o.$filters.date(t.article.create_at)), 1)]), D, N])]), e('div', $, [e('p', k, i(t.article.description), 1), e('p', q, i(t.article.content), 1)])])])])], 64) } const z = _(x, [['render', H]]); export { z as default }
