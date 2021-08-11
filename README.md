# react-device-manager

> A simple device-render switch for React.

[![NPM](https://img.shields.io/npm/v/react-device-manager.svg)](https://www.npmjs.com/package/react-device-manager) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-device-manager
```

## Default Settings:
```jsx
const default_setting = {
  'mobile': [0, 600], // 360 x 414
  'tablet': [601, 1280],
  'desktop': [1280, 9999] // 1024 x 1920
}
```

## Usage

```jsx
import React, { Component } from 'react'

import DeviceOption, { useDevice } from 'react-device-manager'

const custom_device_settings = {
  'mobile': [0, 600], // 360 x 414
  'tablet': [601, 1280],
  'desktop': [1280, 9999] // 1024 x 1920
}

const Example = () => {
  let device = useDevice()
  //let device = useDevice(custom_device_settings)

  return (
    <>
      <p>{device.current}</p>

      <DeviceOption device='mobile'>
        <p>This only gets rendered for mobile.</p>
      </DeviceOption>

      <DeviceOption
        setting={custom_device_settings} // if you use custom settings, you should pas them to all components!
        device='tablet'
        component={<p>This only gets rendered for tablets.</p>}
      />

      <DeviceOption device='desktop'>
        This only gets rendered for desktop.
      </DeviceOption>
    </>
  )
}
```

## License

MIT © [ZJVieth](https://github.com/ZJVieth)
