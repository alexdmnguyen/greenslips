interface AdPlaceholderProps {
  position: 'left' | 'right';
}

export default function AdPlaceholder({ position }: AdPlaceholderProps) {
  return (
    <div
      className={`hidden 2xl:block fixed top-24 ${
        position === 'left' ? 'left-2' : 'right-2'
      } w-32 h-[480px] 2xl:w-40 2xl:h-[600px] pointer-events-none`}
    >
      <div className="sticky top-24 bg-slate-800 border border-slate-700 rounded-lg p-4 flex items-center justify-center h-full pointer-events-auto shadow-lg">
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
