Toggle Switch Component for react native, it works on iOS and Android.

<style>.bmc-button img{width: 27px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{line-height: 36px !important;height:37px !important;text-decoration: none !important;display:inline-flex !important;color:#ffffff !important;background-color:#000000 !important;border-radius: 3px !important;border: 1px solid transparent !important;padding: 0px 9px !important;font-size: 17px !important;letter-spacing:-0.08px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Lato', sans-serif !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#ffffff !important;}</style><link href="https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/35MFUPK"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:5px">Buy me a coffee</span></a>

## Content

- [Installation](#installation)
- [Demo](#demo)
- [Getting started](#getting-started)
- [API](#api)
- [Contribution](#contribution)

## Installation

- 1.Run `npm i toggle-switch-react-native --save`
- 2.`import ToggleSwitch from 'toggle-switch-react-native'`

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

| Props      | Type              | Optional | Default                | Description                                                               |
| ---------- | ----------------- | -------- | ---------------------- | ------------------------------------------------------------------------- |
| isOn       | Boolean           | true     | 'false'                | Default state, true for On, false for off                                 |
| onColor    | String            | true     | '#634fc9'              | On Color                                                                  |
| offColor   | String            | true     | '#ecf0f1'              | Off Color                                                                 |
| label      | String            | true     |                        | Custom Label Text on the Left of the toggle Button                        |
| labelStyle | Object            | true     | {marginHorizontal: 10} | Custom Styling for the Label Text View                                    |
| size       | String            | true     | 'medium'               | Size of the toggle switch button ( 'large', 'medium', 'small')            |
| icon       | React Component   | true     | null                   | Icon for the toggle. Can be any React Component considerate of size       |
| onToggle   | Function Callback | false    | none                   | Callback when the toggle switch component changes the state, params: isOn |
| disabled   | Boolean           | true     | 'false'                | Disable toggling the component                                            |

## Contribution

If you encountered an Issue, please add a screenshot of the bug or a code snippet.

Quickest way to solve issue is to reproduce it on the example project

Pull requests are welcome. If you want to change the API or imporove something, feel free to create an issue and discuss it first.

---

**MIT Licensed**
