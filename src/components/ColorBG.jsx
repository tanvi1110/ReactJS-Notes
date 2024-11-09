import { useState } from "react"

const items = {
  red: "red",
  green: "green",
  blue: "blue",
  orange: "orange"
}

const ColorBG = () => {
  const [color, setColor] = useState("blue")


  return (
    <>
      <div className={`flex flex-col w-full h-screen bg-neutral-500 `} style={{ background: color }}>
        {/* btn container */}
        <div className="flex flex-row bg-white">
          {
            Object.entries(items).map(([key, colorValue], index) => (
              <button
                onClick={() => setColor(colorValue)}
                key={index}
                className="m-2 pl-10 pr-10 p-4 rounded bg-slate-700"
              >
                {colorValue}
              </button>
            ))
          }
        
        </div>
      </div>
    </>
  )
}

export default ColorBG
