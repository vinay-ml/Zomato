import CustomText from '@components/global/CustomText';
import Icon from '@components/global/Icon';
import {Colors} from '@unistyles/Constants';
import {phoneStyles} from '@unistyles/phoneStyles';
import React, {FC, useState} from 'react';
import {Pressable, TextInput, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';

interface PhoneInputProps {
  value: string;
  onChangeTeext: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const PhoneInput: FC<PhoneInputProps> = () => {
  const [value, setValue] = useState('');
  const {styles} = useStyles(phoneStyles);

  const onChangeText = () => {};

  const onFocus = () => {};

  const onBlur = () => {};

  return (
    <View style={styles.container}>
      <Pressable style={styles.countryPickerContainer}>
        <CustomText variant="h5">✨</CustomText>
        <Icon
          iconFamily="Ionicons"
          name="caret-down-sharp"
          colors={Colors.lightText}
          size={18}
        />
      </Pressable>
      <View style={styles.phoneInputContainer}>
        <CustomText fontFamily="Okra-Bold">+91</CustomText>
        <TextInput
          placeholder="Enter Mobile Number"
          keyboardType="phone-pad"
          value={value}
          placeholderTextColor={Colors.lightText}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default PhoneInput;
