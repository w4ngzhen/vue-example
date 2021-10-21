<template>
  <classical-portal-layout>

    <div slot="header" class="header-and-footer-div">
      <p>header slot：Web经典入口布局</p>
    </div>

    <el-tabs stretch>
      <el-tab-pane label="扫码登录">
        <img :src="qrCodeImage" class="qrcode-img" alt="" />
      </el-tab-pane>
      <el-tab-pane label="账号密码" disabled/>
    </el-tabs>

    <div slot="footer" class="header-and-footer-div">
      <p>footer slot</p>
    </div>

  </classical-portal-layout>
</template>

<script>
import ClassicalPortalLayout from "../../../../layout/portal/classical/ClassicPortalLayout";
import qrCode from '../../../../assets/images/qr-code.png';

export default {
  name: "ClassicalPortalPage",
  components: {ClassicalPortalLayout},
  computed: {
    qrCodeImage() {
      return qrCode;
    }
  }
};
</script>

<style scoped>
.header-and-footer-div {
  width: 100%;
  height: 100%;
  background-color: black;
  text-align: center;
}

.header-and-footer-div p {
  color: white;
  margin: 0;
}

.qrcode-img {
  width: 200px;
  margin: 20px 0 0 50px
}
</style>
