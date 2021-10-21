<template>
  <div class="classical-portal-page">
    <div class="classical-portal-page-header">
      <slot name="header"/>
    </div>
    <div class="classical-portal-page-body">
      <div class="classical-portal-page-content">
        <div class="classical-portal-page-content__left">
          <img :src="image" alt="">
        </div>
        <div class="classical-portal-page-content__right">
          <div class="classical-portal-page-content__right-login-tab">
            <slot/>
          </div>
        </div>
      </div>
    </div>
    <div class="classical-portal-page-footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
import logo from '../../../assets/images/vue-logo.svg';

export default {
  name: "ClassicalPortalLayout",
  props: {
    image: {
      default() {
        return logo;
      }
    },
  },
};
</script>

<style scoped>

/* 经典 header - body - footer 结构 */
.classical-portal-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.classical-portal-page-header {
  width: 100%;
  height: 100px;
}

.classical-portal-page-footer {
  width: 100%;
  height: 60px;
}

.classical-portal-page-body {
  width: 100%;
  height: calc(100% - 100px - 60px); /* 减去header高度和footer高度 */

  display: flex;
  justify-content: center;
}

/* body中的内容 */
.classical-portal-page-content {
  width: 800px;
  height: 100%;

  display: flex;
}

.classical-portal-page-content__left {
  width: calc(100% - 300px); /* 减去右侧登录模块宽度 */
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.classical-portal-page-content__left img {
  height: 300px;
}

.classical-portal-page-content__right {
  width: 300px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.classical-portal-page-content__right-login-tab {

  width: 100%;
  height: 300px;

  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

</style>
