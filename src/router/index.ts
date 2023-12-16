// router/index.ts
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import Layout from "../views/Layout.vue";
import DataTable from "../components/DataTable.vue";
import ProductDetail from "../views/ProductDetail.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "", name: "Dashboard", component: DataTable },
      { path: "labtest", name: "LabTest", component: DataTable },
      { path: "appointment", name: "Appointment", component: DataTable },
      { path: "medicineorder", name: "MedicineOrder", component: DataTable },
      { path: "message", name: "Message", component: DataTable },
      { path: "payment", name: "Payment", component: DataTable },
      { path: "settings", name: "Settings", component: DataTable },
      {
        path: "product/:id",
        name: "ProductDetail",
        component: ProductDetail,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
