import * as React from 'react';
import {StatusBar, Modal, View, Animated, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TitleBar from '../TitleBar/TitleBar';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Rounded from '../Rounded/Rounded';
import {ModalProviderProps} from './types';
import useStyle from './styles';
import {ModalContext} from './context';
import {useModal} from './context';

const ModalProvider = ({children, backgroundColor}: ModalProviderProps) => {
  const {readModal, closeModal} = useModal();
  const modalState = readModal();
  const safeAreaInsets = useSafeAreaInsets();
  const styles = useStyle(modalState.detent, backgroundColor);

  const opacity = React.useRef(new Animated.Value(1)).current;
  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue:
        modalState.isPresented && modalState.detent === 'medium' ? 0.88 : 1,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [modalState.detent, modalState.isPresented, opacity]);

  const scaleX = React.useRef(new Animated.Value(1)).current;
  React.useEffect(() => {
    Animated.timing(scaleX, {
      toValue:
        modalState.isPresented && modalState.detent !== 'small'
          ? (1 / Dimensions.get('window').width) *
            (Dimensions.get('window').width - 24 * 2)
          : 1,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [modalState.detent, modalState.isPresented, scaleX]);

  const scaleY = React.useRef(new Animated.Value(1)).current;
  React.useEffect(() => {
    Animated.timing(scaleY, {
      toValue:
        modalState.isPresented && modalState.detent !== 'small'
          ? (1 / Dimensions.get('window').height) *
            (Dimensions.get('window').height - safeAreaInsets.top * 2)
          : 1,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [scaleY, safeAreaInsets.top, modalState.isPresented, modalState.detent]);

  return (
    <ModalContext>
      <View style={styles.containerStyle}>
        <Animated.View
          style={
            modalState.isPresented && modalState.detent !== 'small'
              ? styles.safeAreaPresented
              : styles.safeAreaDefault
          }>
          <Animated.View
            style={{
              transform: [{scaleX: scaleX}, {scaleY: scaleY}],
              opacity,
            }}>
            <Rounded radius={8} smooth>
              {children}
            </Rounded>
          </Animated.View>
        </Animated.View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalState.isPresented}>
          <SafeAreaView style={styles.safeAreaModal}>
            <StatusBar
              animated
              barStyle={
                modalState.isPresented && modalState.detent === 'large'
                  ? 'dark-content'
                  : 'light-content'
              }
            />
            <View style={styles.bufferStyle} />
            <Rounded radius={8} smooth style={styles.maskStyle}>
              <TitleBar
                backgroundColor={modalState.backgroundColor}
                cancellationColor={modalState.accentColor}
                cancellationText={modalState.cancellationText}
                cancellationAction={closeModal}
                confirmationColor={modalState.accentColor}
                confirmationText={modalState.confirmationText}
                confirmationAction={modalState.confirmationAction}
                titleColor={'black'}
                titleText={modalState.title}
                icon={modalState.icon}
                detent={modalState.detent}
                scrolled={modalState.scrolled}>
                {modalState.node}
              </TitleBar>
            </Rounded>
          </SafeAreaView>
        </Modal>
      </View>
    </ModalContext>
  );
};

export default ModalProvider;
