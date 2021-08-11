import React from 'react'

import DeviceOption, { useDevice } from 'react-device-manager'

const App = () => {

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
