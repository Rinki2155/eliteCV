const topFixes = [
  { label: "Buzzwords", value: 0 },
  { label: "Skills section" },
  { label: "Summary" },
  { label: "Filler words" },
  { label: "Spelling & consistency" },
];

const completed = [
  { label: "Dates", value: 10 },
  { label: "Unnecessary sentences", value: 10 },
  { label: "Repetition", value: 10 },
];

export default function FixesList() {
  return (
    <div>
      <h2 className="font-semibold mb-2 text-lg">Top Fixes</h2>
      <ul className="mb-6 space-y-1 text-sm">
        {topFixes.map((fix, idx) => (
          <li key={idx} className="text-gray-700">
            {fix.label}: <span className="text-red-500">{fix.value ?? ""}</span>
          </li>
        ))}
      </ul>
      <h2 className="font-semibold mb-2 text-lg">Completed</h2>
      <ul className="space-y-1 text-sm">
        {completed.map((fix, idx) => (
          <li key={idx} className="text-green-600">
            {fix.label}: {fix.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
