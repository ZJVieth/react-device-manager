# react-device-manager

> A simple device-render switch for React.

[![NPM](https://img.shields.io/npm/v/react-device-manager.svg)](https://www.npmjs.com/package/react-device-manager) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-device-manager
```

## Default Settings:
```jsx
// These settings represent width boundaries in pixels for each device 
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
  'mobile': [0, 600], 
  'tablet': [601, 1280],
  'desktop': [1280, 9999]
}

const Example = () => {
  initDevice(custome_device_settings) // Initializes device width boundaries that are used by useDevice and DeviceOption if no other settings are specified.
  let device = useDevice()

  return (
    <>
      <p>{device.current}</p>

      <DeviceOption device='mobile'>
        <p>This only gets rendered for mobile.</p>
      </DeviceOption>

      <DeviceOption
        setting={{
          tablet: [800, 1280]
        }} // You can pass separate settings to each DeviceOption if you want certain components to only be rendered on very specific screen widths. I recommend not overusing this and instead designing your app around more solidified settings.
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

## Version History

### 1.0.2 Minor Update
- Added initDevices function for ease of use with custom settings.
- Updated Readme.
- Added keywords.

### 1.0.1 Minor Update
- Added custom settings to DeviceOption component.

### 1.0.0 Original Release
- useDevice hook
- DeviceOption component

## License

MIT © [ZJVieth](https://github.com/ZJVieth)
