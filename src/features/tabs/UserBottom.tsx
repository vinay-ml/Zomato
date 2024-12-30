import DeliveryScreen from '@features/delivery/DeliveryScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';

const Tab = createBottomTabNavigator();

const UserBottomTab: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen name="Delivery" component={<DeliveryScreen />} />
      <Tab.Screen name="Reorder" component={<DeliveryScreen />} />
      <Tab.Screen name="Dining" component={<DeliveryScreen />} />
      <Tab.Screen name="Live" component={<DeliveryScreen />} />
    </Tab.Navigator>
  );
};

export default UserBottomTab;
