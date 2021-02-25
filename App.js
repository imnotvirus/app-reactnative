import React from 'react';
import {Appearance} from 'react-native';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Home from './src/Home';

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'Inter',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Inter-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Inter-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Inter-Thin',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Inter',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Inter-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Inter-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Inter-Thin',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'Inter',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Inter-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Inter-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Inter-Thin',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: '#2196f3',
    accent: '#2979ff',
    danger: '#ed1c24',
    white: '#ddd',
  },
};
const dark = {
  ...DefaultTheme,
  roundness: 2,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    background: '#131313',
    primary: '#2196f3',
    accent: '#2979ff',
    danger: '#ed1c24',
    white: '#ddd',
  },
};
const colorTheme = Appearance.getColorScheme();

export default function App() {
  return (
    <PaperProvider
      theme={colorTheme === 'dark' ? dark : theme}
      settings={{
        icon: (props) => <AwesomeIcon {...props} />,
      }}>
      <Home />
    </PaperProvider>
  );
}
