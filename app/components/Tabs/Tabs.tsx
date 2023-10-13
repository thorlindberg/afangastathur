import * as React from 'react';
import {View} from 'react-native';
import useStyle from './styles';
import TabsProps from './types';

const Tabs = ({children, divider = false}: TabsProps) => {
  const styles = useStyle();
  return (
    <View>
      {divider && <View style={styles.dividerStyle} />}
      <View style={styles.tabsStyle}>{children}</View>
    </View>
  );
};

export default Tabs;
