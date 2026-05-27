export type InsuranceInfo = {
  ownershipChanged: boolean;
  hasDiscountTransfer: boolean;
  plateNumber: string;
  nationalId: string;
  previousThirdPartyDiscount: number;
  driverAccidentDiscount: number;
};

export type TaskImages = {
  main: string;
  gallery: string[];
};

export type TaskDetail = {
  insuranceInfo: InsuranceInfo;
  images: TaskImages;
};

export type TaskDetailsMap = Record<number, TaskDetail>;