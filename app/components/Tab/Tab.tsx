import * as React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {Icon} from '@rneui/themed';
import {useTheme} from '../../theme/useTheme';
import useStyle from './styles';
import TabProps from './types';

const Tab = ({category, index, handleTabPress, currentSelection}: TabProps) => {
  const {theme} = useTheme();
  const styles = useStyle();

  return index === currentSelection ? (
    <View style={styles.tabStyle}>
      <Icon
        name={category.selection}
        type={category.type}
        size={category.size}
        color={theme.accentColor}
      />
      <Text style={{color: theme.accentColor}}>{category.name}</Text>
    </View>
  ) : (
    <TouchableOpacity
      style={styles.tabStyle}
      onPress={() => handleTabPress(index)}>
      <Icon
        name={category.icon}
        type={category.type}
        size={category.size}
        color={theme.accentColor}
      />
      <Text style={{color: theme.accentColor}}>{category.name}</Text>
    </TouchableOpacity>
  );
};

export default Tab;
