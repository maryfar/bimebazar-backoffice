interface ImageCardProps {
  image: string;
  title?: string;
  large?: boolean;
}

function ImageCard({ image, title, large = false }: ImageCardProps) {
  return (
    <div
      className={`
        overflow-hidden  rounded-2xl border border-gray-200 bg-white
        ${large ? "w-105" : "w-45"}
      `}
    >
      <img
        src={image}
        alt={title || "document"}
        className={`
          w-full object-cover
          ${large ? "h-65" : "h-30"}
        `}
      />

      {title && (
        <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3">
          <span className="text-sm font-medium text-gray-700">{title}</span>

          <span className="text-xl text-gray-500">...</span>
        </div>
      )}
    </div>
  );
}

export default ImageCard;
