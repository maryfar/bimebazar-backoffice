interface InfoRowProps {
  label: string;
  value: string;
}

export default function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-gray-500 text-xs font-normal w-43 leading-5">
        {label}
      </span>
      <span className="font-semibold text-[13px] text-gray-800">{value}</span>
    </div>
  );
}
