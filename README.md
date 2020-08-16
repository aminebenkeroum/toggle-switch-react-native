Toggle Switch Component for react native, it works on Android, iOS and Web (react-native-web).

<a href="https://www.buymeacoffee.com/35MFUPK" target="_blank"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/black_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

## Content

- [Installation](#installation)
- [Demo](#demo)
- [Getting started](#getting-started)
- [API](#api)
- [Contribution](#contribution)

## Installation

- 1. Run `npm i toggle-switch-react-native --save`
- 2. `import ToggleSwitch from 'toggle-switch-react-native'`

## Demo

- [Example](https://github.com/aminebenkeroum/toggle-switch-react-native/tree/master/example)

![Screenshots](https://user-images.githubusercontent.com/6145715/62531210-4961a880-b842-11e9-918e-296cc0fd1666.gif)

## Getting started

To Get Started, Import `toggle-switch-react-native` to your js file.

`import ToggleSwitch from 'toggle-switch-react-native'`

Inside your component's render method, or any other method returning views, use ToggleSwitch:

```javascript
<ToggleSwitch
  isOn={false}
  onColor="green"
  offColor="red"
  label="Example label"
  labelStyle={{ color: "black", fontWeight: "900" }}
  size="large"
  onToggle={isOn => console.log("changed to : ", isOn)}
/>
```

## API

| Props          | Type                | Optional  | Default                | Description                                                               |
| -------------- | ------------------- | --------- | ---------------------- | ------------------------------------------------------------------------- |
| isOn           | Boolean             | true      | 'false'                | Default state, true for On, false for off                                 |
| onColor        | String              | true      | '#634fc9'              | On Color                                                                  |
| offColor       | String              | true      | '#ecf0f1'              | Off Color                                                                 |
| label          | String              | true      |                        | Custom Label Text on the Left of the toggle Button                        |
| labelStyle     | Object, StyleSheet  | true      | {marginHorizontal: 10} | Custom Styling for the Label Text View                                    |
| thumbOnStyle   | Object, StyleSheet  | true      | null                   | Custom Styling for the On Thumb                                           |
| thumbOffStyle  | Object, StyleSheet  | true      | null                   | Custom Styling for the Off Thumb                                          |
| trackOnStyle   | Object, StyleSheet  | true      | null                   | Custom Styling for the On Track                                           |
| trackOffStyle  | Object, StyleSheet  | true      | null                   | Custom Styling for the Off Track                                          |
| size           | String              | true      | 'medium'               | Size of the toggle switch button ( 'large', 'medium', 'small')            |
| icon           | React Component     | true      | null                   | Icon for the toggle. Can be any React Component considerate of size       |
| onToggle       | Function Callback   | false     | none                   | Callback when the toggle switch component changes the state, params: isOn |
| disabled       | Boolean             | true      | 'false'                | Disable toggling the component                                            |
| animationSpeed | Number              | true      | 300                    | Speed of the toggle animation                                             |

## Contribution

If you encountered an Issue, please add a screenshot of the bug or a code snippet.

Quickest way to solve issue is to reproduce it on the example project

Pull requests are welcome. If you want to change the API or imporove something, feel free to create an issue and discuss it first.

---

**MIT Licensed**
