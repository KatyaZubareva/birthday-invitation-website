import { useState, useEffect } from 'react'
import bgDesktop from './assets/bg_desktop.png'
import bgMobile from './assets/bg_mobile.png'
import icon1 from './assets/1.png'
import icon2 from './assets/2.png'
import icon3 from './assets/3.png'
import music from './assets/baobab.mp3'
import bottom from './assets/Bottom.png'


function App() {
  const [selectedEvent, setSelectedEvent] = useState(null)


  useEffect(() => {
    const audio = new Audio(music)
    audio.loop = true
    audio.volume = 1.0


    audio.muted = true
    audio.play().then(() => {
      audio.muted = false
      audio.play()
      console.log("🎵 Автовоспроизведение сработало")
    }).catch(() => {
      console.log("⛔ Автовоспроизведение заблокировано — ждём клика")
    })


    const unlock = () => {
      audio.muted = false
      audio.play().catch(() => {})
      console.log("🎵 Музыка запущена после клика")
      window.removeEventListener("click", unlock)
    }
    window.addEventListener("click", unlock)

    setTimeout(() => {
      audio.play().catch(() => {})
    }, 1200)

    return () => {
      window.removeEventListener("click", unlock)
      audio.pause()
    }
  }, [])



  const events = [
    {
      time: "16:00",
      title: "Power Point Party",
      description: "Каждый придумывает презентацию на любую тему и рассказывает её.",
      modalText: "Будет пиво и презентации. Можно выбрать любую тему, например, сколько раз Гошан какал в этом году.",
      icon: icon1
    },
    {
      time: "18:00",
      title: "Коктейль-вечеринка",
      description: "Будем готовить коктейли под музыку.",
      modalText: "Мы будем делать интересные коктейли и пить их. Паша — ответственный за плейлист.",
      icon: icon2
    },
    {
      time: "21:00",
      title: "Идем в клуб 'Клуб'",
      description: "Выпьем водки и попадем в легендарное место.",
      modalText: "Пьем водку и фигачим в клуб 'Клуб' трахаться!",
      icon: icon3
    }
  ]

  return (
    <div
      className="min-h-screen flex flex-col justify-start items-center p-4 pt-10 bg-cover bg-center relative"
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

      <style>
        {`
          @keyframes iosFadeUp {
            0% { opacity: 0; transform: translateY(26px) scale(0.95); filter: blur(4px); }
            60% { opacity: 1; transform: translateY(0px) scale(1.02); filter: blur(0); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }

          .ios-anim {
            animation: iosFadeUp .55s cubic-bezier(.11, .6, .1, 1);
          }
        `}
      </style>

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-4">

        <div className="flex flex-col items-center mb-4 md:mb-8">
          <div className="text-8xl font-semibold text-black/70 tracking-tight">
            15:00
          </div>
          <div className="text-black/60 text-lg mt-1">
            Суббота, 22 ноября
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {events.map((event, index) => (
            <div
              key={index}
              onClick={() => setSelectedEvent(event)}
              className="
                ios-anim
                cursor-pointer
                bg-white/50 backdrop-blur-xl
                rounded-3xl shadow-lg border border-white/40
                p-4 flex flex-row items-start gap-3
                active:scale-[0.98] transition
              "
            >
              <img src={event.icon} alt="" className="w-10 h-10 rounded-xl object-contain" />

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
              ios-anim
              relative z-10 w-80 bg-white/80 backdrop-blur-2xl
              rounded-3xl p-6 shadow-2xl border border-white/40
            "
          >
            <img src={selectedEvent.icon} className="w-16 h-16 mx-auto mb-3 rounded-xl object-contain" />

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
                mt-6 w-full py-2 rounded-2xl bg-gray-800 text-white
                font-semibold active:scale-[0.97] transition
              "
            >
              Закрыть
            </button>
          </div>
        </div>
      )}

    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
      <img
        src={bottom}
        className="max-w-lg opacity-90"
        alt=""
      />
    </div>

    </div>
  )
}

export default App
