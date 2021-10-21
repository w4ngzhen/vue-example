import VueRouter from 'vue-router';
import TLayout from "../layout/t/TLayout";
import TLayoutHomePage from "../views/layout/t/TLayoutHomePage";
import TLayoutSubMenuPage from "../views/layout/t/TLayoutSubMenuPage";

const router = new VueRouter({
  routes: [
    {
      path: '/t-layout',
      component: TLayout,
      redirect: '/t-layout/home',
      children: [
        {
          path: '/t-layout/home',
          component: TLayoutHomePage
        },
        {
          path: '/t-layout/sub-menu/sub-menu-page',
          component: TLayoutSubMenuPage
        }
      ]
    }
  ]
});
export default router;
