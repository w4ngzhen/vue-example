<template>
  <div class="home">
    <div class="menu-card"
         v-for="(menu, idx) in menus"
         :key="menu.url"
         :style="{
           marginLeft: (idx === 0) ? '0px' : '10px',
           color: (menu.url) ? 'white' : 'black',
           backgroundColor: (menu.url) ? '#006def' : '#5aa7dc'
         }"
         @click="open(menu)"
    >
      <p>{{ menu.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    menus() {
      return [
        {
          name: 'ElementUI',
          url: 'https://element.eleme.cn/#/zh-CN/component/installation'
        },
        {
          name: 'vue.js',
          url: 'https://vuejs.org/'
        },
        {
          name: 'flex布局',
          url: 'https://www.runoob.com/w3cnote/flex-grammar.html'
        },
        {name: 'T型布局', path: '/t-layout/home'},
        {name: 'Web经典入口布局', path: '/classical-portal-layout'},
      ];
    }
  },
  methods: {
    open(menu) {
      if (menu.path) {
        this.$router.push(menu.path);
      } else {
        window.open(menu.url);
      }
    }
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}

.menu-card {
  width: 150px;
  height: 80px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.menu-card:hover {
  cursor: pointer;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.menu-card p {
  margin: 0;
}
</style>
