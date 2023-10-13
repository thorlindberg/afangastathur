import * as React from 'react';
import {Text, View} from 'react-native';
import {Icon} from '@rneui/themed';
import useStyle from './styles';

const List = () => {
  const styles = useStyle();
  return (
    <View style={[styles.listStyle]}>
      <View style={[styles.itemStyle]}>
        <Icon name="follow-the-signs" color="black" size={36} />
        <View style={[styles.textStyle]}>
          <Text style={styles.boldText}>Explore Iceland</Text>
          <Text>View the most popular attractions and destinations.</Text>
        </View>
      </View>
      <View style={[styles.itemStyle]}>
        <Icon name="fast-food-outline" color="black" size={36} type="ionicon" />
        <View style={[styles.textStyle]}>
          <Text style={styles.boldText}>Local amenities</Text>
          <Text>Find the resources you need during your travel.</Text>
        </View>
      </View>
      <View style={[styles.itemStyle]}>
        <Icon name="emergency" color="#DC1E35" size={36} />
        <View style={[styles.textStyle]}>
          <Text style={styles.boldText}>Emergency assistance</Text>
          <Text>Receive assistance in case of an emergency.</Text>
        </View>
      </View>
    </View>
  );
};

export default List;
