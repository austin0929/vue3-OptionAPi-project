import{V as l}from"./VueLoading-61m2rGh4.js";import{_ as n,c as r,d,b as e,t as i,f as a,F as _,x as m,r as h,o as u}from"./index-CoW_epj6.js";var b={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"david555",BASE_URL:"/vue3-OptionAPi-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:p,VITE_APP_PATH:v}=b,f={components:{VueLoading:l},data(){return{articleId:"",article:{},isLoading:!1}},methods:{getBlog(){this.isLoading=!0;const o=`${p}/api/${v}/article/${this.articleId}`;this.$http.get(o).then(s=>{s.data.success&&(setTimeout(()=>{this.isLoading=!1},800),this.article=s.data.article)}).catch(s=>{s.response.data.message&&this.$swal("錯誤","你所查看的API不存在","error")})}},mounted(){this.articleId=this.$route.params.id,this.getBlog()}},g=m('<div><div class="layoutBanner mb-md-5 mb-3"><div class="container"><div class="row justify-content-center my-auto"><div class="col-md-4 text-center layout-Banner-Text"><h2 class="fw-bold mb-3 text-light h1">部落格文章</h2><nav style="--bs-breadcrumb-divider:&#39;&gt;&#39;;" aria-label="breadcrumb"><ol class="breadcrumb d-flex justify-content-center"><li class="breadcrumb-item"><a href="#" class="aboutHover">首頁</a></li><li class="breadcrumb-item text-light" aria-current="page">部落格文章</li></ol></nav></div></div></div></div></div>',1),x={class:"container"},V={class:"row justify-content-center"},P={class:"col-md-10 mb-md-5 mb-3"},y=["src"],L={class:"mb-4 fw-bold"},A={class:"mb-md-5 mb-3"},B={class:"d-flex text-secondary px-0"},T={class:"me-3"},E=e("i",{class:"bi bi-person-circle me-1"},null,-1),I=e("i",{class:"bi bi-calendar3 me-1"},null,-1),w=e("li",null,null,-1),j=e("li",null,null,-1),R={style:{"line-height":"2.5rem"}},S={class:"text-secondary mb-5"},D={class:"text-secondary mb-5"};function N(o,s,$,H,t,O){const c=h("VueLoading");return u(),r(_,null,[d(c,{active:t.isLoading},null,8,["active"]),g,e("div",x,[e("div",V,[e("div",P,[e("div",null,[e("img",{src:t.article.image,alt:"blog-img",class:"object-fit-cover rounded mb-4",height:"600",width:"100%"},null,8,y),e("h2",L,i(t.article.title),1)]),e("div",A,[e("ul",B,[e("li",T,[E,a(i(t.article.author),1)]),e("li",null,[I,a(i(o.$filters.date(t.article.create_at)),1)]),w,j])]),e("div",R,[e("p",S,i(t.article.description),1),e("p",D,i(t.article.content),1)])])])])],64)}const F=n(f,[["render",N]]);export{F as default};
