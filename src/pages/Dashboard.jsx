const rankColors = {
  Bronze: "bg-yellow-800",
  Silver: "bg-gray-400",
  Gold: "bg-yellow-400",
  Platinum: "bg-blue-400",
  Diamond: "bg-cyan-400",
  Master: "bg-purple-600",
  Grandmaster: "bg-red-600",
  "Top 500": "bg-gradient-to-r from-pink-500 to-yellow-500",
};

const areas = [
  {
    category: "Fitness",
    rank: "Diamond",
    progress: 78,
    quests: ["Workout 4x this week", "Learn tucked planche hold", "Improve push-up form"],
  },
  {
    category: "Career / Strategy",
    rank: "Master",
    progress: 64,
    quests: ["Finish Singapore expansion report", "Design pitch deck", "Lead client strategy meeting"],
  },
  {
    category: "Learning",
    rank: "Platinum",
    progress: 45,
    quests: ["Study 2 AI case studies", "Watch business analytics video", "Read 15 pages"],
  },
];

export default function Dashboard() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {areas.map((area) => (
        <div key={area.category} className="shadow-xl rounded-2xl bg-white p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">{area.category}</h2>
           <span className={`${rankColors[area.rank]} text-white px-3 py-1 rounded-full text-sm`}>{area.rank}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div className="bg-green-500 h-3 rounded-full" style={{ width: \`\${area.progress}%\` }}></div>
          </div>
          <ul className="list-disc list-inside text-sm space-y-1">
            {area.quests.map((quest, i) => (
              <li key={i}>🗡 {quest}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}