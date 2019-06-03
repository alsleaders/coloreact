import React, { useState, useEffect } from 'react'

export default function Slider() {
  // const [random, setRandom] = useState()
  const [hue, setHue] = useState(Math.ceil(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.ceil(Math.random() * 100))
  const [lightness, setLightness] = useState(Math.ceil(Math.random() * 100))
  const [transparency, setTransparency] = useState(
    Math.ceil(Math.random() * 100)
  )
  // const [backgroundColor, updateBackgroundColor] = useState()
  console.log({ hue, setHue })
  console.log({ saturation, setSaturation })
  console.log({ lightness, setLightness })

  return (
    <>
      <h2>So many different colors! </h2>
      <div
        style={{
          backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%, ${transparency}%)`
        }}
      >
        <p>This is the hue - the value of H is {hue}</p>
        <input
          type="range"
          min="0"
          max="360"
          value={hue}
          className="slider"
          id="HSlider"
          onChange={e => setHue(e.target.value)}
        />
        {/* <hr> */}
        <p>This is the saturation - the value of S is {saturation}%</p>
        <input
          type="range"
          min="0"
          max="100"
          value={saturation}
          className="slider"
          id="SSlider"
          onChange={e => setSaturation(e.target.value)}
        />
        <p>This is the lightness - the value of L is {lightness}%</p>
        <input
          type="range"
          min="0"
          max="100"
          value={lightness}
          className="slider"
          id="LSlider"
          onChange={e => setLightness(e.target.value)}
        />
        <p>This is the transparency - the value of A is {transparency}%</p>
        <input
          type="range"
          min="0"
          max="100"
          value={transparency}
          className="slider"
          id="ASlider"
          onChange={e => setTransparency(e.target.value)}
        />
      </div>
      <p>
        Would you like a <button onClick={this.getRandomColor}>Random</button>{' '}
        color?
      </p>
    </>
  )
}
