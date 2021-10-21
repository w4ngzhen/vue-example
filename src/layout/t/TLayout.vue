<template>
  <div class="t-layout">
    <t-layout-header
        class="t-layout-header-style"
        :logoImageSrc="headerLogoImageSrc"
        :title="headerTitle"
        :context-title="headerContextTitle"
        :context-menu="headerContextMenu"
        @contextMenuSelect="headerContextMenuSelect"
    ></t-layout-header>
    <div class="t-layout-body">
      <t-layout-aside
          class="t-layout-body-aside"
          :aside-menu="asideMenu"
          @select="asideMenuSelect"
      />
      <div
          class="t-layout-body-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import TLayoutAside from "./TLayoutAside";
import TLayoutHeader from "./TLayoutHeader";
import logo from '../../assets/images/logo.png';

export default {
  name: "TLayout",
  components: {TLayoutHeader, TLayoutAside},
  computed: {

    headerLogoImageSrc() {
      return logo;
    },

    headerTitle() {
      return 'T样式布局';
    },

    headerContextTitle() {
      return '这是右侧下拉菜单';
    },

    headerContextMenu() {
      return [
        {id: 'menuItem1', name: '帮助'},
        {id: 'menuItem2', name: '退出'},
      ];
    },
    asideMenu() {
      return [
        {path: '/t-layout/home', name: 'Home'},
        {path: '/t-layout/table-list', name: 'TableList'},
        {
          path: '/t-layout/sub/', name: '子菜单', children: [
            {path: '/t-layout/sub-menu/sub-menu-page', name: '子菜单页面'}
          ]
        }
      ];
    }
  },
  methods: {
    headerContextMenuSelect(id) {
      this.$message.success('headerContextMenuSelect: ' + id);
    },
    asideMenuSelect(indexPath, indexPathArray) {
      console.log('asideMenuSelect', indexPath, indexPathArray);
      this.$router.push(indexPath);
    }
  }
};
</script>

<style scoped>
.t-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.t-layout-header-style {
  width: 100%;
  height: 60px;
}

.t-layout-body {
  width: 100%;
  height: calc(100% - 60px); /* 100%减去 t-layout-header-style 高度 */
  display: flex;
  flex-direction: row;
}

.t-layout-body-aside {
  width: 200px;
  height: 100%;
}

.t-layout-body-content {
  width: calc(100% - 200px); /* 减去t-layout-body-aside宽度 */
  height: 100%;
}
</style>
