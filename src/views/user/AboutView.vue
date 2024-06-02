<template>
  <VueLoading :active="isLoading"></VueLoading>
  <div>
    <div class="layoutBanner mb-md-5 mb-3">
      <div class="container">
        <div class="row justify-content-center my-auto">
          <div class="col-md-4 text-center layout-Banner-Text">
            <h2 class="fw-bold mb-3 text-light h1">關於我們</h2>
            <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
              <ol class="breadcrumb d-flex justify-content-center">
                <li class="breadcrumb-item">
                  <a href="#" class="aboutHover">首頁</a>
                </li>
                <li class="breadcrumb-item text-light" aria-current="page">
                  關於我們
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container aboutLineHeight">
    <h2 class="fw-bold text-center mb-md-5 mb-3">關於我們</h2>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="mb-5">
          <h3 class="fw-bolder h4">品牌起源</h3>
          <p>
            我們餐廳的品牌起源於一個充滿熱情和創造力的故事。
            數十年前，一位對美食充滿熱愛的創業者在一個小小的廚房裡
            開始了他的料理之旅。他對食材的熱情和對烹飪的堅持，啟發了
            他創建自己的品牌的夢想。這個品牌起源於對美食的熱愛和對飲
            食文化的深刻理解。通過不斷的嘗試和創新，他成功地打造了一個獨特
            而迷人的餐飲品牌。這個品牌不僅僅是一個餐廳，更是一個承載著美好回憶和
            共享美食樂趣的文化標誌。我们的餐廳致力于提供高品质的美食和卓越
            的服务，以滿足每位顧客的味蕾需求，並將美食的樂趣帶給更多的人們。
          </p>
        </div>
        <div class="mb-5">
          <h3 class="fw-bolder h4">品牌信念</h3>
          <p>
            我們餐廳的品牌信念源於對美食、
            服務和社區的深刻理解和承諾。我們相信每一道菜都
            應該蘊含著用心和熱情，每一位顧客都應該得到溫暖和
            尊重的待遇。我們堅信食材的品質是一切的基礎，因此我們
            致力於選擇最優質、最新鮮的食材，並將它們轉化為美味的料理
            。我們的服務宗旨是以顧客為中心，無論是在餐廳內用餐還是外賣
            服務，我們都力求提供愉悅的用餐體驗。此外，我們深知餐廳與
            社區的聯繫，因此我們積極參與社區活動，支持當地文化和慈善事業
            ，希望能為社區帶來積極的影響和改變。總的來說，我們的品牌信念是
            以美食為媒介，傳達愛和溫暖，為顧客營造一個美好的用餐體驗，並與社區共同成長和繁榮。
          </p>
        </div>
        <div class="mb-md-5 mb-3">
          <h3 class="fw-bolder h4">品質把關</h3>
          <p>
            我們餐廳對品質的把關是我們經營的核
            心價值之一。從食材的選擇到菜品的呈現，我們始終
            堅持最嚴格的標準，確保每一道菜都是令人滿意的。首先
            ，我們致力於選擇優質的食材，嚴格把關產品的新鮮度和質
            量，確保每一個食材都是安全健康的。在烹飪過程中，我們的廚師
            們精湛的廚藝和專業素養確保了每一道菜的美味和品質。此外，我們對食品
            安全和衛生也絲毫不馬虎，嚴格執行衛生標準，確保每一位顧客都能放心
            享用我們的美食。除此之外，我們還不斷接受顧客的反饋和建議，不斷改
            進和提升我們的菜品和服務品質，以滿足顧客的需求和期望。總之，我們餐
            廳始終以品質為先，以顧客滿意為目標，努力成為顧客信賴的首選餐廳。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueLoading from '@/components/VueLoading.vue'
export default {
  components: {
    VueLoading
  },
  data () {
    return {
      isLoading: false
    }
  },
  mounted () {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  }
}
</script>
