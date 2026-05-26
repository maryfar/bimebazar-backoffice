import SectionCard from "@/components/shared/section-card";
import CarCard from "@/assets/images/car-card.png";
import InsuranceCard from "@/assets/images/insurance-card.png";
import ImageCard from "../image-card";

function ImagesGallery() {
  return (
    <SectionCard title="تصاویر">
      <div className="space-y-6">
        <div className="flex justify-center">
          <ImageCard image={CarCard} title="کارت ماشین" large />
        </div>

        <div className="flex items-center gap-4 overflow-x-auto pb-2">
          <ImageCard image={InsuranceCard} />

          <ImageCard image={InsuranceCard} />

          <ImageCard image={InsuranceCard} />

          <ImageCard image={InsuranceCard} />
        </div>
      </div>
    </SectionCard>
  );
}

export default ImagesGallery;
