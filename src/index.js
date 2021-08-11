import React, { useState, useEffect } from 'react'

// Settings -------------------------------------------
const default_setting = {
  'mobile': [0, 600], // 360 x 414
  'tablet': [601, 1280],
  'desktop': [1280, 9999] // 1024 x 1920
}


// Utility ----------------------------------------------
const getDevice = setting => {
  let device

  for (let entry of Object.entries(setting)) {
    let name = entry[0]
    let min = entry[1][0]
    let max = entry[1][1]

    device = name

    let width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth

    if (width >= min && width <= max)
      break
  }

  return device
}

// Hook -------------------------------------------------
export function useDevice(custom_setting) {

  const [device, setDevice] = useState(getDevice(custom_setting || default_setting))

  useEffect(() => {

    const updateDevice = () => {
      setDevice(getDevice(custom_setting || default_setting))
    }

    window.addEventListener('resize', updateDevice)

    return () => {
      window.removeEventListener('resize', updateDevice)
    }
  }, [])

  return { current: device }
}


// Renderer ----------------------------------------------
export default function DeviceOption({ children, device, component }) {
  if (device !== useDevice().current)
    return null

  if (component)
    return component

  return <React.Fragment>{children}</React.Fragment>
}
