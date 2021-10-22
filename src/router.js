import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from "vue-router";
import HomePage from "./components/HomePage.vue";
import Modal from "./components/Modal.vue";
import Form from "./components/Form.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
      children: [
        {
          path: "/form",
          component: Modal,
          props: {
            component: Form
          }
        }
      ]
    }
  ]
});

export default router;
