import{c as p}from"./cartStore-DGG_fZuK.js";import{a as g,_ as C,o as a,c as n,b as t,e as x,x as P,m as w,d as _,w as V,g as b,F as h,v,t as i,y as f,z as y,r as m}from"./index-CoW_epj6.js";import{m as T}from"./modalMixins-DdrMPlSF.js";import{V as E}from"./VueLoading-61m2rGh4.js";import"./index-Bzn_gtXS.js";var L={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"david555",BASE_URL:"/vue3-OptionAPi-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:M,VITE_APP_PATH:D}=L,R={data(){return{modal:null}},methods:{...g(p,["getCart"]),delAllCart(){const s=`${M}/api/${D}/carts`;this.$http.delete(s).then(o=>{o.data.success&&(this.hideModal(),this.getCart())}).catch(o=>{o.response.data.message&&this.$swal("失敗","刪除產品失敗","error")})}},mixins:[T]},I={class:"modal fade",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"myModal"},U={class:"modal-dialog",role:"document"},j={class:"modal-content"},S=P('<div class="modal-header bg-primary"><h5 class="modal-title text-light" id="exampleModalLabel">刪除所有產品</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body text-center"><i class="bi bi-exclamation-triangle-fill text-secondary" style="font-size:4rem;"></i><p>確定刪除所有產品品項嗎?</p></div>',2),B={class:"modal-footer mx-auto"},N=t("button",{type:"button",class:"btn btn-dark","data-bs-dismiss":"modal"},"取消",-1);function q(s,o,d,A,c,l){return a(),n("div",I,[t("div",U,[t("div",j,[S,t("div",B,[N,t("button",{type:"button",class:"btn btn-primary",onClick:o[0]||(o[0]=x((...u)=>l.delAllCart&&l.delAllCart(...u),["prevent"]))},"確定")])])])],512)}const O=C(R,[["render",q]]);var H={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"david555",BASE_URL:"/vue3-OptionAPi-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:Q,VITE_APP_PATH:z}=H,F={components:{DelAllCartModal:O,VueLoading:E},data(){return{isAddOrDelNum:!1,cartData:{},coupon:"happy",isLoading:!1}},computed:{...w(p,["carts","totalPrice"])},methods:{...g(p,["getCart","delCartProduct","delAllCart","updateQty"]),addCoupon(){const s=`${Q}/api/${z}/coupon`,o={code:this.coupon};this.$http.post(s,{data:o}).then(d=>{d.data.success&&(this.$swal("成功","成功加入優惠券","success"),this.getCart())}).catch(d=>{d.response.data.message&&this.$swal("失敗","找不到優惠券","error")})},delAllCart(){if(this.carts.length===0){this.$swal("失敗","購物車內無任何產品","error");return}this.$refs.delAllCartModal.showModal()},toCheckout(){this.$router.push("/checkout")}},mounted(){this.getCart(),this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},1e3)}},G=P('<div><div class="layoutBanner mb-md-5 mb-3"><div class="container"><div class="row justify-content-center my-auto"><div class="col-md-4 text-center layout-Banner-Text"><h2 class="fw-bold mb-3 text-light h1">購物車</h2><nav style="--bs-breadcrumb-divider:&#39;&gt;&#39;;" aria-label="breadcrumb"><ol class="breadcrumb d-flex justify-content-center"><li class="breadcrumb-item"><a href="#" class="aboutHover">首頁</a></li><li class="breadcrumb-item text-light" aria-current="page">購物車</li></ol></nav></div></div></div></div></div>',1),J={key:0,class:"container"},K={class:"row justify-content-center"},W={class:"col-md-8"},X={class:"border text-center py-3 rounded",style:{"box-shadow":"0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"}},Y=t("h3",{class:"mb-3"},"購物車清單",-1),Z=t("i",{class:"bi bi-box-seam h1 mb-3 d-block"},null,-1),tt=t("p",{class:"mb-3"},"目前購物車內無產品，請先選購!",-1),et=t("button",{type:"button",class:"btn"},"開始購物",-1),st={key:1,class:"container"},ot={class:"row mb-md-5 mb-3"},lt={class:"col-md-8"},at={class:"table border"},nt=t("thead",null,[t("tr",null,[t("th"),t("th",null,"產品"),t("th",null,"單價"),t("th",{class:"table-qty-width"},"數量"),t("th",{class:"text-end"},"總價")])],-1),it={style:{"line-height":"38px"}},dt={class:"text-center"},ct=["onClick"],rt=t("i",{class:"bi bi-trash"},null,-1),ut=[rt],_t={class:"d-flex align-items-center"},ht=["src"],mt={class:"mt-2 mt-lg-0 table-cart-font"},pt={class:"text-primary"},bt={class:"bg-light d-flex"},vt=["onClick"],ft=t("i",{class:"bi bi-dash"},null,-1),yt=[ft],gt=["onUpdate:modelValue"],Ct=["onClick"],xt=t("i",{class:"bi bi-plus"},null,-1),Pt=[xt],At={class:"text-primary text-end"},$t={class:"text-end custom-btn-primary"},kt=["disabled"],wt={class:"col-md-4 mt-4 mt-md-0"},Vt={class:"d-flex justify-content-between custom-btn-dark"},Tt=t("h2",{class:"h4"},"購物車清單",-1),Et=t("hr",null,null,-1),Lt=t("hr",null,null,-1),Mt={class:"d-flex justify-content-between mb-1"},Dt=t("span",null,"小計",-1),Rt={class:"d-flex justify-content-between mb-4"},It=t("span",{class:"fw-bold h5"},"總計",-1),Ut={class:"fw-bold h6 text-primary"},jt={class:"input-group mb-3 custom-btn-primary"},St=["disabled"];function Bt(s,o,d,A,c,l){const u=m("VueLoading"),$=m("router-link"),k=m("DelAllCartModal");return a(),n(h,null,[_(u,{active:c.isLoading},null,8,["active"]),G,s.carts.length===0?(a(),n("div",J,[t("div",K,[t("div",W,[t("div",X,[Y,Z,tt,_($,{to:"/products",class:"custom-btn-primary"},{default:V(()=>[et]),_:1})])])])])):b("",!0),s.carts.length?(a(),n("div",st,[t("div",ot,[t("div",lt,[t("div",null,[t("table",at,[nt,t("tbody",it,[(a(!0),n(h,null,v(s.carts,e=>(a(),n("tr",{key:e.id},[t("td",dt,[t("a",{href:"#",onClick:x(r=>s.delCartProduct(e),["prevent"])},ut,8,ct)]),t("td",null,[t("div",_t,[t("img",{class:"object-fit-cover d-none d-lg-inline-block me-3",height:"50",width:"100",alt:"card-img",src:e.product.imageUrl},null,8,ht),t("h2",mt,i(e.product.title),1)])]),t("td",pt,"$ "+i(e.product.origin_price),1),t("td",null,[t("div",bt,[t("button",{class:"qtyButton",type:"button",onClick:r=>s.updateQty(e,!1)},yt,8,vt),f(t("input",{type:"number",class:"text-center my-auto qtyInput","aria-label":"Example text with button addon","onUpdate:modelValue":r=>e.qty=r,value:"1",readonly:""},null,8,gt),[[y,e.qty,void 0,{number:!0}]]),t("button",{class:"qtyButton",type:"button",onClick:r=>s.updateQty(e,!0)},Pt,8,Ct)])]),t("td",At,"$ "+i(e.product.price*e.qty),1)]))),128))])]),t("div",$t,[t("button",{class:"btn",disabled:s.carts.length===0,type:"button",onClick:o[0]||(o[0]=(...e)=>l.toCheckout&&l.toCheckout(...e))}," 結帳去 ",8,kt)])])]),t("div",wt,[t("div",Vt,[Tt,t("button",{class:"btn",type:"button",onClick:o[1]||(o[1]=(...e)=>l.delAllCart&&l.delAllCart(...e))},"清空購物車")]),Et,(a(!0),n(h,null,v(s.carts,e=>(a(),n("div",{class:"d-flex justify-content-between mb-1",key:e.name},[t("span",null,i(e.product.title),1),t("span",null,"NT$ "+i(e.product.origin_price),1)]))),128)),Lt,t("div",Mt,[Dt,t("span",null,"NT$ "+i(s.totalPrice.total),1)]),t("div",Rt,[It,t("span",Ut,"NT$ "+i(s.totalPrice.final_total),1)]),t("div",jt,[f(t("input",{type:"text",class:"form-control",placeholder:"請輸入優惠碼","onUpdate:modelValue":o[2]||(o[2]=e=>c.coupon=e),"aria-label":"Recipient's username","aria-describedby":"button-addon2"},null,512),[[y,c.coupon]]),t("button",{class:"btn",type:"button",id:"button-addon2",disabled:s.carts.length===0,onClick:o[3]||(o[3]=(...e)=>l.addCoupon&&l.addCoupon(...e))}," 使用 ",8,St)])])])])):b("",!0),_(k,{ref:"delAllCartModal"},null,512)],64)}const zt=C(F,[["render",Bt]]);export{zt as default};
