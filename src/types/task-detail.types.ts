export type CarPlate = {
  firstPart: string;
  letter: string;
  secondPart: string;
  cityCode: string;
};

export type InsuranceInfo = {
  ownershipChanged: boolean;

  hasDiscountTransfer: boolean;

  plateNumber: CarPlate;

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

export type TaskId = number;

export type TaskDetailsMap = Record<TaskId, TaskDetail>;