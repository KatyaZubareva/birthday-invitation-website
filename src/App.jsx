import { useState } from 'react'

function App() {
  const events = [
    {
      time: "12:00",
      title: "Power Point party",
      description: "Каждый придумывает презентацию на любую тему и рассказывает её.",
      emoji: "📊"
    },
    {
      time: "14:00",
      title: "Коктейль-вечеринка",
      description: "Вечер с коктейлями, музыкой и весельем.",
      emoji: "🍹"
    },
    {
      time: "18:00",
      title: "Идем в клуб 'Клуб'",
      description: "Танцы до утра и незабываемая атмосфера.",
      emoji: "🎶"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        🎉 Вы приглашены на день рождения!
      </h1>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative bg-white/60 backdrop-blur-md rounded-xl shadow-md border border-white/30 p-4 flex items-start gap-3 transition transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex flex-col items-start">
              <span className="text-gray-500 text-xs">{event.time}</span>
              <div className="flex items-center gap-2 mt-1">
                <div className="text-2xl">{event.emoji}</div>
                <h2 className="font-semibold text-gray-900">{event.title}</h2>
              </div>
              <p className="text-gray-700 mt-1 text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
