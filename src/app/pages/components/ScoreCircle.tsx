interface ScoreCircleProps {
  score: number;
}

export default function ScoreCircle({ score }: ScoreCircleProps) {
  return (
    <div className="flex flex-col items-center my-6">
      <div className="w-24 h-24 rounded-full border-8 border-orange-400 flex items-center justify-center text-2xl font-bold">
        {score}
      </div>
      <p className="text-sm mt-2 text-gray-600">OVERALL</p>
    </div>
  );
}
