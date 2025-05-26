# One Practic

One Practic is a practice project built with React Native CLI, designed to implement basic app structure including navigation, reusable components, and a simple CRUD interface for products. This app connects to a custom API built with Nest.js, which is also available in the same GitHub repository under the name graphrestapi-nest.

## Features

- Basic navigation with React Navigation, along with basic components and app structure
- Product listing with data fetched from a custom API
- Product detail view with relevant information
- Create, update, and delete functionality for products

## Technologies Used

### Core

- [React Native](https://reactnative.dev/) `0.79.2`
- [React](https://reactjs.org/) `v19.0.0`
- [React Navigation Native](https://reactnavigation.org/docs/getting-started) `v7.1.8`
- [React Navigation Native Stack](https://reactnavigation.org/docs/native-stack-navigator) `v7.3.12`
- [React Navigation Bottom Tabs](https://reactnavigation.org/docs/bottom-tab-navigator) `v7.3.12`

### UI/Styling

- [Lucide React Native](https://github.com/lucide-icons/lucide-react-native) `v0.507.0` (Icons)
- [React Native Svg](https://github.com/react-native-svg/react-native-svg) `v15.11.2`

### State Management

- _NA_

### Utilities

- [Axios](https://axios-http.com/) `v1.9.0`

## Setup

Install dependencies:

> ⚠️ **Warning:** in this case, React 19.0.0 is used, which may cause peer dependency warnings with some libraries

```bash
npm install --force
```

## Run

Start the app

```bash
 npm start
```

### Run for Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

Before running on iOS for the first time, make sure to install CocoaPods dependencies:

```bash
cd ios
pod install
cd ..
```

### Run for iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

## Contributions

Contributions are welcome. If you wish to improve the project, please fork it and submit a pull request.

## Contact

For questions or suggestions, you can contact me at [ezioeg@gmail.com].
