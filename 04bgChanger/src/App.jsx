import { useState } from "react"

function App() {
  const [color, setColor] = useState("yellow")

  return (
    <div
      className="duration-200"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: color,
      }}
    >
      <div className="fixed inset-x-0 bottom-4 flex justify-end gap-4 px-4">
        <button
          onClick={() => setColor("red")}
          className="px-6 py-2 bg-red-500 text-white font-medium rounded-full hover:bg-red-600 transition-colors"
        >
          Red
        </button>

        <button
          onClick={() => setColor("green")}
          className="px-6 py-2 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors"
        >
          Green
        </button>

        <button
          onClick={() => setColor("blue")}
          className="px-6 py-2 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-colors"
        >
          Blue
        </button>

        <button
          onClick={() => setColor("purple")}
          className="px-6 py-2 bg-purple-500 text-white font-medium rounded-full hover:bg-purple-600 transition-colors"
        >
          Purple
        </button>

        <button
          onClick={() => setColor("black")}
          className="px-6 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
        >
          Black
        </button>
      </div>
    </div>
  )
}

export default App
