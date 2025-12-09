interface AdPlaceholderProps {
  position: 'left' | 'right';
}

export default function AdPlaceholder({ position }: AdPlaceholderProps) {
  return (
    <div
      className={`hidden xl:block fixed top-24 ${
        position === 'left' ? 'left-4' : 'right-4'
      } w-40 h-[600px]`}
    >
      <div className="sticky top-24 bg-slate-800 border border-slate-700 rounded-lg p-4 flex items-center justify-center h-[600px]">
        <div className="text-center">
          <div className="text-gray-500 text-sm font-semibold mb-2">
            Advertisement
          </div>
          <div className="text-gray-600 text-xs">
            Your Ad Here
          </div>
          <div className="mt-4 text-gray-700 text-xs">
            160 x 600
          </div>
        </div>
      </div>
    </div>
  );
}
