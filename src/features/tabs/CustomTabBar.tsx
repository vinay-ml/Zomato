import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import {Text, View} from 'react-native';

const CustomTabBar: FC<BottomTabBarProps> = props => {
  return (
    <View>
      <Text>CustomTabBar</Text>
    </View>
  );
};

export default CustomTabBar;
