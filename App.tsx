import * as React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ScrollProvider} from 'react-native-scroll-provider';
import {ModalProvider} from 'react-native-modal-provider';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';
import {STORYBOOK_MODE} from '@env';
import {store} from './app/store/store';
import {ThemeProvider} from './app/theme/useTheme';
import Content from './app/screens/Content';
import StorybookUIRoot from './.storybook';

// look at implementing rnmapbox for offline maps

let Root = function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ActionSheetProvider>
          <ThemeProvider>
            <ScrollProvider>
              <ModalProvider>
                <Content />
              </ModalProvider>
            </ScrollProvider>
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
