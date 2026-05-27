import type { TaskDetailsMap } from "@/types/task-detail.types";

export const mockTaskDetails: TaskDetailsMap = {
  3035475: {
    insuranceInfo: {
      ownershipChanged: true,
      hasDiscountTransfer: true,
      plateNumber: "۵۵۵ الف ۵۵ ایران ۵۵",
      nationalId: "۴۵۳۰۰۷۶۵۸۹",
      previousThirdPartyDiscount: 50,
      driverAccidentDiscount: 50,
    },
    images: {
      main: "/images/car-card.png",
      gallery: [
        "/images/insurance-card.png",
        "/images/insurance-card.png",
     
      ],
    },
  },

  20530001: {
    insuranceInfo: {
      ownershipChanged: false,
      hasDiscountTransfer: false,
      plateNumber: "۲۲۲ ب ۲۲ ایران ۲۲",
      nationalId: "۶۱۲۰۰۳۴۵۹۱",
      previousThirdPartyDiscount: 30,
      driverAccidentDiscount: 10,
    },
    images: {
      main: "/images/car-card.png",
      gallery: [
        "/images/insurance-card.png",
         "/images/insurance-card.png", 
         "/images/insurance-card.png",
         "/images/insurance-card.png",
         "/images/insurance-card.png"],
    },
  },

  20530002: {
    insuranceInfo: {
      ownershipChanged: true,
      hasDiscountTransfer: false,
      plateNumber: "۷۷۷ ج ۷۷ ایران ۷۷",
      nationalId: "۵۱۰۰۰۷۸۹۳۲",
      previousThirdPartyDiscount: 70,
      driverAccidentDiscount: 20,
    },
    images: {
      main: "/images/car-card.png",
      gallery: [
        "/images/insurance-card.png",
      ],
    },
  },

  20530003: {
    insuranceInfo: {
      ownershipChanged: false,
      hasDiscountTransfer: true,
      plateNumber: "۹۹۹ د ۹۹ ایران ۹۹",
      nationalId: "۴۰۱۰۰۵۶۷۸۹",
      previousThirdPartyDiscount: 40,
      driverAccidentDiscount: 15,
    },
    images: {
      main: "/images/car-card.png",
      gallery: [
        "/images/insurance-card.png",
        "/images/insurance-card.png",
        "/images/insurance-card.png",
        "/images/insurance-card.png",
      ],
    },
  },
};