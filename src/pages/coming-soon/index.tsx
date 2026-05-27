interface ComingSoonPageProps {
  title: string;
}

function ComingSoonPage({ title }: ComingSoonPageProps) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-white p-10">
      <div className="text-6xl">🚧</div>

      <div className="mt-6 space-y-2 text-center">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

        <p className="text-sm text-gray-500">
          این صفحه به‌زودی تکمیل خواهد شد.
        </p>
      </div>
    </div>
  );
}

export default ComingSoonPage;
