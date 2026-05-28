// mocks/task-details.ts
import type { TaskDetailsMap } from "@/types/task-detail.types";

export const mockTaskDetails: TaskDetailsMap = {
    // ========== جزئیات تسک‌های ادمین ==========
    3035475: {
        insuranceInfo: {
            ownershipChanged: true,
            hasDiscountTransfer: true,
            plateNumber: {
                firstPart: "۵۵۵",
                letter: "الف",
                secondPart: "۵۵",
                cityCode: "۵۵",
            },
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
            plateNumber: {
                firstPart: "۲۲۲",
                letter: "ب",
                secondPart: "۲۲",
                cityCode: "۲۲",
            },
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
                "/images/insurance-card.png",
            ],
        },
    },

    20530002: {
        insuranceInfo: {
            ownershipChanged: true,
            hasDiscountTransfer: false,
            plateNumber: {
                firstPart: "۷۷۷",
                letter: "ج",
                secondPart: "۷۷",
                cityCode: "۷۷",
            },
            nationalId: "۵۱۰۰۰۷۸۹۳۲",
            previousThirdPartyDiscount: 70,
            driverAccidentDiscount: 20,
        },
        images: {
            main: "/images/car-card.png",
            gallery: ["/images/insurance-card.png"],
        },
    },

    20530003: {
        insuranceInfo: {
            ownershipChanged: false,
            hasDiscountTransfer: true,
            plateNumber: {
                firstPart: "۹۹۹",
                letter: "د",
                secondPart: "۹۹",
                cityCode: "۹۹",
            },
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

    // ========== جزئیات تسک‌های کاربر معمولی ==========
    20530004: {
        insuranceInfo: {
            ownershipChanged: false,
            hasDiscountTransfer: true,
            plateNumber: {
                firstPart: "۱۲۳",
                letter: "س",
                secondPart: "۴۵",
                cityCode: "۶۷",
            },
            nationalId: "۱۲۳۴۵۶۷۸۹۰",
            previousThirdPartyDiscount: 25,
            driverAccidentDiscount: 5,
        },
        images: {
            main: "/images/car-card.png",
            gallery: [
                "/images/insurance-card.png",
            ],
        },
    },

    20530005: {
        insuranceInfo: {
            ownershipChanged: true,
            hasDiscountTransfer: false,
            plateNumber: {
                firstPart: "۷۸۹",
                letter: "م",
                secondPart: "۰۱",
                cityCode: "۲۳",
            },
            nationalId: "۹۸۷۶۵۴۳۲۱۰",
            previousThirdPartyDiscount: 60,
            driverAccidentDiscount: 30,
        },
        images: {
            main: "/images/car-card.png",
            gallery: [
                "/images/insurance-card.png",
                "/images/insurance-card.png",
            ],
        },
    },

    20530006: {
        insuranceInfo: {
            ownershipChanged: true,
            hasDiscountTransfer: true,
            plateNumber: {
                firstPart: "۵۴۶",
                letter: "ص",
                secondPart: "۷۸",
                cityCode: "۹۰",
            },
            nationalId: "۵۵۴۴۳۳۲۲۱۱",
            previousThirdPartyDiscount: 45,
            driverAccidentDiscount: 25,
        },
        images: {
            main: "/images/car-card.png",
            gallery: [
                "/images/insurance-card.png",
                "/images/insurance-card.png",
                "/images/insurance-card.png",
            ],
        },
    },
};

// helper function
export const getTaskDetailsById = (taskId: number) => {
    return mockTaskDetails[taskId];
};