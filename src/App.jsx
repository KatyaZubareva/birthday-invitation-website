import { useState } from 'react'
import bgDesktop from './assets/bg_desktop.png'
import bgMobile from './assets/bg_mobile.png'

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const events = [
    {
      time: "16:00",
      title: "Power Point party",
      description: "Каждый придумывает презентацию на любую тему и рассказывает её.",
      modalText: "В эту часть программы каждый участник создаёт забавную или креативную презентацию и показывает её всем. Будет много смеха, неожиданных идей и весёлой импровизации!",
      emoji: "📊"
    },
    {
      time: "18:00",
      title: "Коктейль-вечеринка",
      description: "Вечер с коктейлями, музыкой и весельем.",
      modalText: "Мы соберёмся в уютной атмосфере с коктейлями, легкой музыкой и хорошим настроением. Отличный момент, чтобы пообщаться, посмеяться и сделать красивые фото.",
      emoji: "🍹"
    },
    {
      time: "21:00",
      title: "Идем в клуб 'Клуб'",
      description: "Танцы до утра и незабываемая атмосфера.",
      modalText: "Заключительная часть вечера — танцы, свет, энергия и незабываемая музыка. Настоящая атмосфера праздника до самого утра!",
      emoji: "🎶"
    }
  ]

  return (
    <div
      className="min-h-screen flex flex-col justify-start items-center p-4 pt-16 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgMobile})` }}
    >
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url(${bgDesktop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 pb-16 md:mb-8 text-gray-800 text-center">
          Вам пришло приглашение!
        </h1>

        <div className="flex flex-col gap-4 w-full">
          {events.map((event, index) => (
            <div
              key={index}
              onClick={() => setSelectedEvent(event)}
              className="
                cursor-pointer
                bg-white/50 backdrop-blur-xl
                rounded-3xl shadow-lg border border-white/40
                p-4 flex flex-row items-start gap-3
                active:scale-[0.98] transition
              "
            >
              <div className="text-3xl">{event.emoji}</div>

              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-gray-900">{event.title}</h2>
                  <span className="text-gray-500 text-xs">{event.time}</span>
                </div>
                <p className="text-gray-700 text-sm mt-1">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}
          />

          <div
            className="
              relative z-10 w-80 bg-white/80 backdrop-blur-2xl
              rounded-3xl p-6 shadow-2xl border border-white/40
              animate-[fadeIn_.2s_ease-out]
            "
          >
            <div className="text-5xl mb-3 text-center">{selectedEvent.emoji}</div>

            <h2 className="text-xl font-semibold text-center text-gray-900">
              {selectedEvent.title}
            </h2>

            <p className="text-center text-gray-500 text-sm mt-1">
              {selectedEvent.time}
            </p>

            <p className="text-gray-700 text-base mt-4 text-center leading-relaxed">
              {selectedEvent.modalText}
            </p>

            <button
              onClick={() => setSelectedEvent(null)}
              className="
                mt-6 w-full py-2 rounded-2xl bg-gray-600 text-white
                font-semibold active:scale-[0.97] transition
              "
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
