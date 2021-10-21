<template>
  <el-menu
      vue-router
      mode="vertical"
      :default-active="currentPath"
      @select="select"
      :collapse="false"
  >
    <template v-for="item in asideMenu">
      <!-- 没有子菜单，则使用ElMenuItem -->
      <el-menu-item v-if="!item.children"
                    :key="item.path"
                    :index="item.path">
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
      <!-- 否则使用submenu子菜单 -->
      <el-submenu v-else
                  :key="item.path"
                  :index="item.path">
        <span slot="title">{{ item.name }}</span>
        <el-menu-item v-for="childMenu in item.children"
                      :key="childMenu.path"
                      :index="childMenu.path">
          <span slot="title">{{ childMenu.name }}</span>
        </el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: "TLayoutAside",
  props: {
    asideMenu: {
      type: Array,
    }
  },
  computed: {
    currentPath() {
      return this.$route.path;
    }
  },
  methods: {
    select(indexPath, indexPathArray) {
      this.$emit('select', indexPath, indexPathArray);
    }
  }
};
</script>

<style scoped>

</style>
