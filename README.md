## 🛠️ One Practic  
Practice project developed with React Native CLI, focused on implementing a basic app structure with navigation, reusable components, and CRUD operations for products. The app connects to a custom Nest.js API, which is available in the same GitHub repository under the name `graphrestapi-nest`.

### Features  
- Basic navigation using React Navigation, with reusable components and app structure.  
- Product listing fetching data from the custom REST API.  
- Product detail view displaying relevant product information.  
- Create, update, and delete (CRUD) operations for products implemented via REST.  
- GraphQL CRUD operations are planned but not yet implemented.

## Technologies Used

### Core

- [React Native](https://reactnative.dev/) `v0.79.2`
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
Start metro:
```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

### Build and run for Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### Build and run for iOS
Before running on iOS for the first time, make sure to install CocoaPods dependencies:
```bash
cd ios
pod install
cd ..
```

Then:
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
