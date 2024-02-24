import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import useStyle from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Text from '../Text/Text';
import {Icon} from '@rneui/themed';
import {useTheme} from '../../theme/useTheme';
import useEmergencyHandler from '../../handlers/emergencyHandler';
import useAboutHandler from '../../handlers/aboutHandler';
import HeaderProps from './types';

const Header = ({showActions, citySelection}: HeaderProps) => {
  const {theme} = useTheme();
  const styles = useStyle();
  const emergencyHandler = useEmergencyHandler();
  const aboutHandler = useAboutHandler();
  return (
    <LinearGradient
      colors={[
        'rgba(2, 82, 156, 1)',
        'rgba(2, 82, 156, 0.7)',
        'rgba(2, 82, 156, 0)',
      ]}
      style={styles.headerStyle}>
      <View style={styles.menuStyle}>
        <TouchableOpacity onPress={showActions}>
          <Text size="title" bold color={theme.backgroundColor}>
            {citySelection.title.length > 12
              ? `${citySelection.title.slice(0, 9)}...`
              : citySelection.title}
          </Text>
        </TouchableOpacity>
        <View style={styles.moreButtonsStyle}>
          <TouchableOpacity
            onPress={emergencyHandler}
            style={styles.emergencyStyle}>
            <Text color={theme.backgroundColor} bold>
              HELP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={aboutHandler}>
            <Icon
              name="information-circle"
              type="ionicon"
              size={28}
              color={theme.backgroundColor}
            />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Header;
