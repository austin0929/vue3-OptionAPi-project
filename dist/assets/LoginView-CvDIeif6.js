import { _ as p, c as u, b as t, g as m, y as c, z as d, d as _, w as h, r as f, o as v, e as w } from './index-z9VVAXen.js'; import { _ as x } from './daddy-UXQ7WjGa.js'; const b = { VITE_APP_URL: 'https://vue3-course-api.hexschool.io/v2', VITE_APP_PATH: 'david555', BASE_URL: '/vue3-OptionAPi-project/', MODE: 'production', DEV: !1, PROD: !0, SSR: !1 }; const { VITE_APP_URL: g } = b; const V = { data () { return { user: { username: '', password: '' } } }, methods: { signIn () { const n = `${g}/admin/signin`; this.$http.post(n, this.user).then(e => { if (e.data.success) { const { token: r, expired: a } = e.data; document.cookie = `vuetoken=${r}; expires=${new Date(a)};`, this.$router.push('/admin/products') } }).catch(e => { e.response.data.message && this.$swal('無此使用者', '請重新登入', 'error') }) } } }; const k = { class: 'container' }; const P = { class: 'row justify-content-center align-items-center vh-100' }; const y = { class: 'col-5' }; const E = t('div', { class: 'text-center mb-3' }, [t('img', { src: x, width: '90', alt: 'logo-img' }), t('h1', { class: 'fw-bold text-center' }, 'FishDaddy'), t('span', { class: 'h3 text-center d-block fw-normal text-secondary' }, '管理者登入')], -1); const A = { class: 'text-center mt-3' }; const D = t('button', { class: 'btn btn-primary mx-3', type: 'submit' }, '登入', -1); function I (n, e, r, a, o, i) { const l = f('router-link'); return v(), u('div', k, [t('div', P, [t('div', y, [E, t('form', { onSubmit: e[2] || (e[2] = m((...s) => i.signIn && i.signIn(...s), ['prevent'])) }, [c(t('input', { type: 'text', class: 'form-control mb-3', placeholder: '請輸入信箱', 'onUpdate:modelValue': e[0] || (e[0] = s => o.user.username = s) }, null, 512), [[d, o.user.username]]), c(t('input', { type: 'password', name: 'password', placeholder: '請輸入密碼', class: 'form-control', 'onUpdate:modelValue': e[1] || (e[1] = s => o.user.password = s) }, null, 512), [[d, o.user.password]]), t('div', A, [_(l, { class: 'btn btn-dark', to: '/' }, { default: h(() => [w('回賣場')]), _: 1 }), D])], 32)])])]) } const U = p(V, [['render', I]]); export { U as default }
