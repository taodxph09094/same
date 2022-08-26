import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import { GiAbbotMeeple } from "react-icons/gi";
const dashboardRoutes = [
  {
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-alien-33",
    component: Upgrade,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Danh sách sản phẩm",
    icon: "nc-icon nc-notes",
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    icon: "nc-icon nc-notes",
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Danh sách đăng ký",
    icon: "nc-icon nc-cart-simple",
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Quản lý tài khoản",
    icon: "nc-icon nc-single-02",
    layout: "/admin",
  },
];

export default dashboardRoutes;
