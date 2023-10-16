import * as React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ModalProvider from './app/components/ModalProvider/provider';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';
import {STORYBOOK_MODE} from '@env';
import {store} from './app/store/store';
import {ThemeProvider} from './app/theme/useTheme';
import Content from './app/screens/Content';
import StorybookUIRoot from './.storybook';

let Root = function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ActionSheetProvider>
          <ThemeProvider>
            <ModalProvider>
              <Content />
            </ModalProvider>
          </ThemeProvider>
        </ActionSheetProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

if (STORYBOOK_MODE === 'TRUE') {
  Root = StorybookUIRoot;
}

export default Root;
