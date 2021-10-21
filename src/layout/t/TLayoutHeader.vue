<template>
  <div class="t-layout-header">
    <div class="t-layout-header__left">
      <img :src="logoImageSrc" alt="" width="24" height="24"/>
      <p style="font-size: 24px;">{{ title }}</p>
    </div>
    <div class="t-layout-header__mid"></div>
    <div class="t-layout-header__right">
      <el-dropdown
          @command="handleCommand"
          class="t-layout-header__right-context-title">
        <span>
          {{ contextTitle }}
          <i class="el-icon-arrow-down"/>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="item in contextMenu"
                            :key="item.id"
                            :command="item.id">
            {{ item.name }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "TLayoutHeader",
  props: {
    logoImageSrc: {},
    title: {
      type: String,
    },
    contextTitle: {
      type: String,
    },
    contextMenu: {
      type: Array
    }
  },
  computed: {},
  methods: {
    handleCommand(itemCommand) {
      this.$emit('contextMenuSelect', itemCommand);
    }
  }
};
</script>

<style scoped>
.t-layout-header {
  width: 100%;
  /* height:; height由外部TLayout中的t-layout-header-style定义 */
  display: flex;

  background-color: #006fde;
}

/* 左部样式 */
.t-layout-header__left {
  width: 250px;
  height: 100%;

  display: flex;
}

.t-layout-header__left img {
  width: 40px;
  height: 40px;

  margin: 10px 0 0 20px;
}
.t-layout-header__left p {
  font-size: 22px;
  margin: 14px 0 0 10px;

  color: white;
}

/* 中部样式 */
.t-layout-header__mid {
  width: calc(100% - 250px - 250px); /* 减去left和right的宽度 */
  height: 100%;
}

/* 右部样式 */
.t-layout-header__right {
  width: 250px;
  height: 100%;

  display: flex;
  flex-direction: row-reverse;
}

.t-layout-header__right-context-title {
  font-size: 14px;
  color: white;
  margin-top: 20px;
  margin-right: 15px;
}
.t-layout-header__right-context-title:hover {
  cursor: pointer;
}

</style>
