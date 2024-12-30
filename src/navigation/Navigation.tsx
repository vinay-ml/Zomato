import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '@features/auth/SplashScreen';
import LoginScreen from '@features/auth/LoginScreen';
import {navigationRef} from '@utils/NavigationUtils';
import UserBottomTab from '@features/tabs/UserBottom';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          options={{animation: 'fade'}}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{animation: 'fade'}}
          name="UserBottomTab"
          component={UserBottomTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
