import React, { useState, useEffect } from 'react'

// Settings -------------------------------------------
const default_setting = {
  'mobile': [0, 600],
  'tablet': [601, 1280],
  'desktop': [1280, 9999]
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

const initDevices = setting => {
  sessionStorage.setItem(
    "react-device-manager",
    JSON.stringify(setting) || ""
  )
}
export { initDevices }

// Hook -------------------------------------------------
export function useDevice(custom_setting) {

  const session_in = JSON.parse(sessionStorage.getItem('react-device-manager') || "null")
  const settings_in = custom_setting || session_in || default_setting

  const [device, setDevice] = useState(getDevice(settings_in))

  const updateDevice = () => {
    setDevice(getDevice(settings_in))
  }

  useEffect(() => {
    window.addEventListener('resize', updateDevice)
    return () => {
      window.removeEventListener('resize', updateDevice)
    }
  }, [])

  return { current: device }
}


// Renderer ----------------------------------------------
export default function DeviceOption({ children, device, component, setting }) {
  if (device !== useDevice(setting || null).current)
    return null

  if (component)
    return component

  return <React.Fragment>{children}</React.Fragment>
}
