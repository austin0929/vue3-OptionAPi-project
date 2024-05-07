<template>
  <NavBar></NavBar>
  <router-view></router-view>
  <FooterSection></FooterSection>
</template>

<script>
import NavBar from '@/components/layout/NavBar.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
export default {
  components: {
    NavBar,
    FooterSection
  }
}
</script>