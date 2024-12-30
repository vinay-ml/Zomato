import React, {FC} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconProps {
  colors?: string;
  size: number;
  name: string;
  iconFamily: 'Ionicons' | 'MaterialCommunityIcons' | 'MaterialIcons';
}

const Icon: FC<IconProps> = ({colors, size, name, iconFamily}) => {
  const IconMap = {
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
  };

  const SelectedIcon = IconMap[iconFamily];

  return <SelectedIcon name={name} size={size} color={colors} />;
};

export default Icon;
