import{c as _}from"./cartStore-Bp0LImvg.js";import{_ as b,a as l,m as u,c as s,b as t,d as p,F as r,v as k,x as v,o as a,g as c,t as n,r as f}from"./index-DrL7xUhK.js";import{b as d}from"./bookmarkStore-BgG0JuZf.js";import{B as g}from"./BannerSection-DB9sHSmb.js";import"./index-Bnm8mFos.js";const x={components:{BannerSection:g},methods:{...l(_,["addToCart"]),...l(d,["getBookmark","delBookmark"])},computed:{...u(d,["bookmark","bookmarkDate"])},mounted(){this.getBookmark()}},y={class:"position-relative py-8 mb-6"},B=v('<div class="container d-flex flex-column"><div class="row justify-content-center my-auto"><div class="col-md-4 text-center"><h2 class="fw-bold mb-3 text-light h1">收藏列表</h2><nav style="--bs-breadcrumb-divider:&#39;&gt;&#39;;" aria-label="breadcrumb"><ol class="breadcrumb d-flex justify-content-center"><li class="breadcrumb-item"><a href="#" class="aboutHover">首頁</a></li><li class="breadcrumb-item text-light" aria-current="page">收藏列表</li></ol></nav></div></div></div>',1),w={class:"container"},S={class:"mb-5",style:{"min-width":"300px","overflow-x":"auto"}},C={class:"table",style:{width:"1100px"}},$=t("thead",null,[t("tr",null,[t("th"),t("th",null,"產品"),t("th",null,"收藏日期"),t("th",{width:"150"},"價格"),t("th",{width:"200",class:"text-end"})])],-1),V={style:{"line-height":"36px"}},j={class:"text-center"},D={href:"#"},N=["onClick"],F={class:"d-flex align-items-center"},T=["src"],A={class:"h6 mt-2 mt-lg-0"},E={class:"text-end"},H=["onClick"];function L(o,M,U,q,z,G){const m=f("BannerSection");return a(),s(r,null,[t("div",y,[p(m),B]),t("div",w,[t("div",S,[t("table",C,[$,t("tbody",V,[(a(!0),s(r,null,k(o.bookmark,(e,i)=>(a(),s("tr",{key:i},[t("td",j,[t("a",D,[t("i",{class:"bi bi-trash",onClick:c(h=>o.delBookmark(e,i),["prevent"])},null,8,N)])]),t("td",null,[t("div",F,[t("img",{class:"object-fit-cover d-none d-lg-inline-block me-3",height:"50",width:"100",alt:"bookmark-img",src:e.imageUrl},null,8,T),t("h2",A,n(e.title),1)])]),t("td",null,n(o.bookmarkDate),1),t("td",null,"$ "+n(e.origin_price),1),t("td",E,[t("button",{type:"button",class:"btn btn-primary",onClick:c(h=>o.addToCart(e),["prevent"])}," 加入購物車 ",8,H)])]))),128))])])])])],64)}const Q=b(x,[["render",L]]);export{Q as default};
