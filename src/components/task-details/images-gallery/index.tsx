import { useMemo, useRef } from "react";

import SectionCard from "@/components/shared/section-card";
import ImageCard from "../image-card";

import type { TaskImages } from "@/types/task-detail.types";

interface Props {
  data: TaskImages;
}

const MAX_VISIBLE_IMAGES = 4;

function ImagesGallery({ data }: Props) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const images = data.gallery || [];

  const galleryItems = useMemo(() => {
    const filled = [...images];

    while (filled.length < MAX_VISIBLE_IMAGES) {
      filled.push(null as never);
    }

    return filled.slice(0, MAX_VISIBLE_IMAGES);
  }, [images]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -240 : 240,
      behavior: "smooth",
    });
  };

  return (
    <SectionCard title="تصاویر">
      <div className="space-y-6">
        {data.main && (
          <div className="flex justify-center">
            <ImageCard image={data.main} title="کارت ماشین" large />
          </div>
        )}

        <div className="relative">
          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            className="
              absolute right-0 top-1/2 z-10
              -translate-y-1/2
              rounded-lg border border-gray-200
              bg-white p-2 shadow-sm
              transition hover:bg-gray-50
            "
          >
            ‹
          </button>

          {/* THUMBNAILS */}
          <div
            ref={scrollRef}
            className="
              flex items-center gap-4 overflow-x-auto
              scroll-smooth px-10 pb-2
              scrollbar-hide
            "
          >
            {galleryItems.map((img, index) => (
              <div key={index} className="shrink-0">
                {img ? (
                  <ImageCard image={img} />
                ) : (
                  <div
                    className="
                      flex h-20 w-33.5
                      items-center justify-center
                      rounded-xl border 
                      border-gray-300 bg-gray-100
                    "
                  ></div>
                )}
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll("right")}
            className="
              absolute left-0 top-1/2 z-10
              -translate-y-1/2
              rounded-lg border border-gray-200
              bg-white p-2 shadow-sm
              transition hover:bg-gray-50
            "
          >
            ›
          </button>
        </div>
      </div>
    </SectionCard>
  );
}

export default ImagesGallery;
