import * as React from 'react';
import {StatusBar, Modal, View, Animated, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store/store';
import {closeModal} from '../../store/modalSlice';
import useStyle from './styles';
import ModalProviderProps from './types';
import TitleBar from '../TitleBar/TitleBar';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Rounded from '../Rounded/Rounded';

// TASK: borderRadius of root node should have animated transition?

const ModalProvider = ({children}: ModalProviderProps) => {
  const safeAreaInsets = useSafeAreaInsets();
  const modalState = useSelector((state: RootState) => state.modal);
  const styles = useStyle(modalState.detent);
  const dispatch = useDispatch();
  const modalHandler = () => {
    dispatch(closeModal());
  };

  const opacity = React.useRef(new Animated.Value(1)).current;
  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue:
        modalState.isPresented && modalState.detent === 'medium' ? 0.88 : 1,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [opacity, modalState.detent, modalState.isPresented]);

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
  }, [scaleX, modalState.detent, modalState.isPresented]);

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
  }, [scaleY, modalState.detent, modalState.isPresented, safeAreaInsets.top]);

  return (
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
          <Rounded radius={8} smooth style={{flex: 1}}>
            <TitleBar
              backgroundColor={modalState.backgroundColor}
              cancellationColor={modalState.accentColor}
              cancellationText={modalState.cancellationText}
              cancellationAction={modalHandler}
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
  );
};

export default ModalProvider;
