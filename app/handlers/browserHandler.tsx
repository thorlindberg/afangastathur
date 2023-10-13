import {Linking, Alert} from 'react-native';

const browserHandler = async (linkURL: string) => {
  const url = linkURL;
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert('Error', `Cannot open URL:\n${url}`);
  }
};

export default browserHandler;
