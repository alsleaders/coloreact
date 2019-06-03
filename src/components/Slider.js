import React, { useState } from 'react'

export default function Slider() {
  const [hue, setHue] = useState(180)
  const [saturation, setSaturation] = useState(50)
  const [lightness, setLightness] = useState(50)
  const [backgroundColor, updateBackgroundColor] = useState()

  console.log({ hue, setHue })
  console.log({ saturation, setSaturation })
  console.log({ lightness, setLightness })

  // updateBackgroundColor = () => {
  //   updateColor(`hsl(${hue}, 50%, 50%)`)
  // }

  return (
    <div
      style={{ backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)` }}
    >
      <input
        type="range"
        min="0"
        max="360"
        // value={}
        className="slider"
        id="HSlider"
        onChange={e => setHue(e.target.value)}
      />
      <input
        type="range"
        min="0"
        max="100"
        // value={}
        className="slider"
        id="SSlider"
        onChange={e => setSaturation(e.target.value)}
      />
      <input
        type="range"
        min="0"
        max="100"
        // value={}
        className="slider"
        id="LSlider"
        onChange={e => setLightness(e.target.value)}
      />
    </div>
  )
}
