import React from 'react'

import DeviceOption, { initDevices, useDevice } from 'react-device-manager'


const custom_setting = {
  'mobile': [0, 1028], // 360 x 414
  'tablet': [1028, 1280],
  'desktop': [1280, 9999] // 1024 x 1920
}

const App = () => {

  initDevices(custom_setting)
  let device = useDevice()

  return (
    <>
      <p>{device.current}</p>

      <DeviceOption device='mobile'>
        <p>This only gets rendered for mobile.</p>
      </DeviceOption>

      <DeviceOption
        device='tablet'
        component={<p>This only gets rendered for tablets.</p>}
      />

      <DeviceOption device='desktop'>
        This only gets rendered for desktop.
      </DeviceOption>

      <p>This always gets rendered!</p>
    </>
  )
}

export default App
