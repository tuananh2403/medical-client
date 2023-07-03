import path from "./path";
export const navigation = [
  {
    id: 1,
    value: "Trang Chủ",
    path: ``,
  },
  {
    id: 2,
    value: "Sản Phẩm",
    path: `/${path.PRODUCTS}`,
  },
  {
    id: 3,
    value: "Giới Thiệu",
    path: `/${path.INTRODUCTION}`,
  },
  {
    id: 4,
    value: "Thông tin Thuốc",
    path: `/${path.FAQS}`,
  },
  {
    id: 5,
    value: "Tin Tức",
    path: `/${path.BLOGS}`,
  },
  {
    id: 6,
    value: "Trợ Giúp",
    path: `/${path.FAQS}`,
  },
  {
    id: 7,
    value: "Liên Hệ",
    path: `/${path.FAQS}`,
  },
  {
    id: 8,
    value: "Chuyên Gia",
    path: `/${path.FAQS}`,
  },
  {
    id: 9,
    value: "Báo chí nói về chúng tôi",
    path: `/${path.FAQS}`,
  },
];

export const adminSidebar = [
  {
    id: 1,
    type: "single",
    text: "Dashboard",
    path: `/${path.ADMIN}/${path.DASHBOARD}`,
  },
  {
    id: 2,
    type: "single",
    text: "Manage User",
    path: `/${path.ADMIN}/${path.MANAGE_USER}`,
  },
  {
    id: 3,
    type: "parent",
    text: "Manage Product",
    submenu: [
      {
        text: "Create Product",
        path: `/${path.ADMIN}/${path.CREATE_PRODUCT}`,
      },
      {
        text: "Manage Product",
        path: `/${path.ADMIN}/${path.MANAGE_PRODUCT}`,
      },
    ],
  },
  {
    id: 4,
    type: "single",
    text: "Manage Order",
    path: `/${path.ADMIN}/${path.MANAGE_ORDER}`,
  },
];
