import VueRouter from 'vue-router';
import TLayout from "../layout/t/TLayout";
import TLayoutHomePage from "../views/layout/t/TLayoutHomePage";
import TLayoutSubMenuPage from "../views/layout/t/TLayoutSubMenuPage";
import ClassicalPortalPage from "../views/layout/portal/classical/ClassicalPortalPage";
import Home from "../views/Home";

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
    },
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
    },
    {
      path: '/classical-portal-layout',
      component: ClassicalPortalPage
    }
  ]
});
export default router;
