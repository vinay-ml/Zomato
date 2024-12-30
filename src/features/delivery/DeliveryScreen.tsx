import {emptyStyles} from '@unistyles/emptyStyles';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';

const DeliveryScreen = () => {
  const {styles} = useStyles(emptyStyles);
  return (
    <View style={styles.container(false)}>
      <Image
        source={require('@assets/images/coming_soon.jpg')}
        style={styles.emptyImage}
      />
    </View>
  );
};

export default DeliveryScreen;
