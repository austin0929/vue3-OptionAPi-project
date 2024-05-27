import{P as L}from"./PaginationComponent-Idygglvc.js";import{c as A}from"./cartStore-By7gJ-wg.js";import{b as S}from"./bookmarkStore-igs1B4g_.js";import{_ as T,a as v,c as n,d,b as t,w as _,F as p,v as g,y as b,z as C,A as $,x as B,r as m,o as l,e as f,t as u,g as P}from"./index-z9VVAXen.js";import{V as E}from"./VueLoading-DTgNEhzE.js";import"./index-CwHr2tNN.js";var U={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"david555",BASE_URL:"/vue3-OptionAPi-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:y,VITE_APP_PATH:w}=U,I={components:{Pagination:L,VueLoadingVue:E},data(){return{products:[],searchKeyword:"",selectPrice:"價格",pagination:{},isLoading:!1,categories:["漢堡","披薩","飲料","牛排","沙拉"]}},methods:{...v(S,["addBookmark"]),...v(A,["addToCart"]),getProducts(o=1){this.isLoading=!0;const{category:s=""}=this.$route.query,i=`${y}/api/${w}/products?category=${s}&page=${o}`;this.$http.get(i).then(r=>{r.data.success&&(this.searchKeyword="",this.products=r.data.products,this.pagination=r.data.pagination,setTimeout(()=>{this.isLoading=!1},800))}).catch(r=>{r.response.data.message&&this.$swal("錯誤","你所查看的API不存在","error")})},searchProduct(){const o=`${y}/api/${w}/products/all`;this.$http.get(o).then(s=>{this.products=s.data.products;const i=this.products.filter(r=>r.title.trim().toLowerCase().includes(this.searchKeyword.toLowerCase()));i.length>0?this.products=i:this.$swal("錯誤","抱歉，沒有找到符合條件的產品。","error")}).catch(s=>{s.response.data.message&&this.$swal("錯誤","你所查看的API不存在","error")})},sortedProducts(){let o="";this.products.sort((s,i)=>this.selectPrice==="1"?o=s.price-i.price:this.selectPrice==="2"?o=i.price-s.price:o)}},computed:{sortPrice(){return this.sortedProducts()}},watch:{"$route.query":{handler(){this.getProducts()},deep:!0}},created(){this.getProducts()}},D=B('<div><div class="layoutBanner mb-md-5 mb-3"><div class="container"><div class="row justify-content-center my-auto"><div class="col-md-4 text-center layout-Banner-Text"><h2 class="fw-bold mb-3 text-light h1">產品列表</h2><nav style="--bs-breadcrumb-divider:&#39;&gt;&#39;;" aria-label="breadcrumb"><ol class="breadcrumb d-flex justify-content-center"><li class="breadcrumb-item"><a href="#" class="aboutHover">首頁</a></li><li class="breadcrumb-item text-light" aria-current="page"> 產品列表 </li></ol></nav></div></div></div></div></div>',1),H={class:"container"},j={class:"row"},K={class:"col-lg-3 mb-3"},R={class:"bg-info text-secondary p-4 rounded border"},M=t("h2",{class:"fw-bold h5"},"產品列表",-1),N=t("hr",null,null,-1),O={class:"px-0"},q={class:"mb-3"},F={class:"col-lg-9"},z={class:"searchAndSort"},G={class:"d-flex mb-3"},J={class:"productSelect ms-auto mb-3"},Q=t("option",{selected:"",disabled:""},"價格",-1),W=t("option",{value:"1"},"低到高",-1),X=t("option",{value:"2"},"高到低",-1),Y=[Q,W,X],Z={class:"row mb-md-5 mb-3"},tt={class:"card border p-2 mb-4 position-relative"},et=["src"],st={class:"card-body p-0"},ot={class:"text-dark"},it={class:"card-text text-muted mb-2 text-truncate"},rt={class:"d-flex justify-content-between align-items-center"},at={class:"text-primary fw-bold me-2"},ct={class:"mb-0 text-muted text-end d-inline-block"},nt={class:"custom-btn-primary"},dt=["onClick"],lt=t("i",{class:"bi bi-handbag"},null,-1),ut=[lt],ht={href:"#",class:"p-2 bookmark-icon"},_t=["onClick"];function pt(o,s,i,r,a,c){const x=m("VueLoadingVue"),h=m("router-link"),k=m("Pagination");return l(),n(p,null,[d(x,{active:a.isLoading},null,8,["active"]),D,t("div",H,[t("div",j,[t("div",K,[t("div",R,[M,N,t("ul",O,[t("li",q,[d(h,{class:"productLinkHover",to:"/products"},{default:_(()=>[f("全部產品")]),_:1})]),(l(!0),n(p,null,g(a.categories,e=>(l(),n("li",{class:"mb-3",key:e},[d(h,{class:"productLinkHover",to:`/products?category=${e}`},{default:_(()=>[f(u(e),1)]),_:2},1032,["to"])]))),128))])])]),t("div",F,[t("div",z,[t("div",G,[b(t("input",{class:"form-control","onUpdate:modelValue":s[0]||(s[0]=e=>a.searchKeyword=e),type:"search",placeholder:"產品搜尋",onBlur:s[1]||(s[1]=(...e)=>c.searchProduct&&c.searchProduct(...e))},null,544),[[C,a.searchKeyword,void 0,{trim:!0}]])]),t("div",J,[b(t("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":s[2]||(s[2]=e=>a.selectPrice=e),onChange:s[3]||(s[3]=(...e)=>c.sortPrice&&c.sortPrice(...e))},Y,544),[[$,a.selectPrice]])])]),t("div",Z,[(l(!0),n(p,null,g(a.products,e=>(l(),n("div",{class:"col-lg-4 col-md-6",key:e.id},[t("div",tt,[d(h,{to:`/product/${e.id}`},{default:_(()=>[t("img",{height:"200",src:e.imageUrl,class:"card-img-top rounded mb-3 object-fit-cover cardHover"},null,8,et),t("div",st,[t("h4",ot,u(e.title),1),t("p",it,u(e.description),1),t("div",rt,[t("div",null,[t("span",at,"$ "+u(e.origin_price),1),t("p",ct,[t("del",null,"$"+u(e.origin_price),1)])]),t("div",nt,[t("a",{href:"#",class:"btn",onClick:P(V=>o.addToCart(e),["prevent"])},ut,8,dt)])])])]),_:2},1032,["to"]),t("div",null,[t("a",ht,[t("i",{class:"bi bi-heart-fill",onClick:P(V=>o.addBookmark(e),["prevent"])},null,8,_t)])])])]))),128))])])])]),d(k,{pages:a.pagination,onUpdatePage:c.getProducts},null,8,["pages","onUpdatePage"])],64)}const yt=T(I,[["render",pt]]);export{yt as default};