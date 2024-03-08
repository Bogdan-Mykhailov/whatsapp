import React, {FC} from 'react';
import {View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

export interface Props {
  name: typeof Ionicons.defaultProps;
  backgroundColor: string;
}

const BoxedIcon: FC<Props> = ({name, backgroundColor}) => {
  return (
    <View style={{backgroundColor, padding: 4, borderRadius: 6,}}>
      <Ionicons name={name} size={22} color='white'/>
    </View>
  );
};

export default BoxedIcon;
