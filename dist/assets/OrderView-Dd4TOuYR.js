import{B as b}from"./BannerSection-DB9sHSmb.js";import{_ as f,c as o,d as c,w as y,b as t,e as x,f as l,F as h,v as g,t as i,g as w,x as V,r as _,o as r}from"./index-DrL7xUhK.js";var L={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"david555",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:u,VITE_APP_PATH:m}=L,P={components:{BannerSection:b},data(){return{order:{},orderId:"",isLoading:""}},methods:{getOrder(){this.isLoading=!0;const n=`${u}/api/${m}/order/${this.orderId}`;this.$http.get(n).then(s=>{s.data.success&&(this.order=s.data.order,setTimeout(()=>{this.isLoading=!1},2e3))}).catch(s=>{s.response.data.message&&this.$swal("錯誤","你所查看的API不存在","error")})},payOrder(){this.isLoading=!0;const n=`${u}/api/${m}/pay/${this.orderId}`;this.$http.post(n).then(s=>{s.data.success&&(this.isLoading=!1,this.$swal("付款成功","感謝您的購買","success"),this.getOrder())}).catch(s=>{s.response.data.message&&this.$swal("錯誤","付款失敗","error")})}},mounted(){this.orderId=this.$route.params.id,this.getOrder()}},k=t("div",{class:"loadingio-spinner-spin-nq4q5u6dq7r"},[t("div",{class:"ldio-x2uulkbinbj"},[t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")])])],-1),E={class:"position-relative py-8 mb-6"},I=V('<div class="container d-flex flex-column"><div class="row justify-content-center my-auto"><div class="col-md-4 text-center"><h2 class="fw-bold mb-3 text-light h1">訂單</h2><nav style="--bs-breadcrumb-divider:&#39;&gt;&#39;;" aria-label="breadcrumb"><ol class="breadcrumb d-flex justify-content-center"><li class="breadcrumb-item"><a href="#" class="aboutHover">首頁</a></li><li class="breadcrumb-item text-light" aria-current="page"><a href="#" class="aboutHover">訂單明細</a></li></ol></nav></div></div></div>',1),O={class:"container mb-5"},A={key:0,class:"text-primary h6 mb-4"},B=t("i",{class:"bi bi-check-circle me-1"},null,-1),S={class:"border p-4"},T=t("h2",{class:"h5 mb-4"},"訂單明細",-1),N={class:"table border"},R=t("thead",null,[t("tr",null,[t("th",null,"產品"),t("th",{class:"text-end"},"總計")])],-1),C={class:"text-secondary"},D={class:"text-end"},H=t("td",{class:"w-50 border"},"總計",-1),$={class:"text-end text-primary fw-bold"},j={class:"container"},q={class:"border p-4 mb-5"},U=t("h3",{class:"h5 mb-4"},"訂購人資料",-1),F={key:0,class:"table border"},M=t("th",{width:"180"},"姓名",-1),z=t("th",{width:"180"},"Email",-1),G=t("th",{width:"180"},"電話",-1),J=t("th",{width:"180"},"地址",-1),K=t("th",{width:"180"},"備註",-1),Q=t("th",{width:"180"},"付款狀態",-1),W={key:0,class:"text-primary fw-bold"},X={key:1,class:"text-secondary fw-bold"},Y={class:"text-end",colspan:"6"};function Z(n,s,tt,et,e,a){const p=_("VueLoading"),v=_("BannerSection");return r(),o(h,null,[c(p,{active:e.isLoading},{default:y(()=>[k]),_:1},8,["active"]),t("div",E,[c(v),I]),t("div",O,[t("div",null,[e.order.is_paid?(r(),o("h2",A,[B,x("感謝您的訂購，訂單已經收到。 ")])):l("",!0)]),t("div",S,[T,t("table",N,[R,t("tbody",null,[(r(!0),o(h,null,g(e.order.products,d=>(r(),o("tr",{key:d.id},[t("td",C,i(d.product.title)+" x 1",1),t("td",D,"$ "+i(d.final_total),1)]))),128)),t("tr",null,[H,t("td",$,"$ "+i(e.order.total),1)])])])])]),t("div",j,[t("div",q,[U,e.order.user?(r(),o("table",F,[t("tbody",null,[t("tr",null,[M,t("td",null,i(e.order.user.name),1)]),t("tr",null,[z,t("td",null,i(e.order.user.email),1)]),t("tr",null,[G,t("td",null,i(e.order.user.tel),1)]),t("tr",null,[J,t("td",null,i(e.order.user.address),1)]),t("tr",null,[K,t("td",null,i(e.order.message),1)]),t("tr",null,[Q,e.order.is_paid?(r(),o("td",W,"已付款")):(r(),o("td",X,"未付款"))])]),t("tfoot",null,[t("tr",null,[t("td",Y,[e.order.is_paid?l("",!0):(r(),o("button",{key:0,class:"btn btn-primary",type:"button",onClick:s[0]||(s[0]=w((...d)=>a.payOrder&&a.payOrder(...d),["prevent"]))}," 確認付款 "))])])])])):l("",!0)])])],64)}const it=f(P,[["render",Z]]);export{it as default};
