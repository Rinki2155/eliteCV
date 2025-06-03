interface ScoreBarProps {
  score: number;
  max?: number;
}

export default function ScoreBar({ score, max = 100 }: ScoreBarProps) {
  const percentage = (score / max) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 relative">
      <div
        className="h-4 bg-green-500 rounded-full transition-all"
        style={{ width: `${percentage}%` }}
      />
      <div className="absolute left-0 -bottom-6 text-xs">0</div>
      <div className="absolute right-0 -bottom-6 text-xs">100</div>
    </div>
  );
}
