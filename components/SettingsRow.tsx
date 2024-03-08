import React, {FC} from 'react';
import {View, Text, FlatList} from 'react-native';
import {defaultStyles} from "@/constants/Styles";
import BoxedIcon from "@/components/BoxedIcon";
import {Ionicons} from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Data from "@/types/Data";

interface Props {
  data: Data[]
}

export const SettingsRow: FC<Props> = ({data}) => {
 return (
   <View style={defaultStyles.block}>
     <FlatList
       data={data}
       scrollEnabled={false}
       ItemSeparatorComponent={() => <View style={defaultStyles.separator}/>}
       renderItem={({item}) => (
         <View style={defaultStyles.item}>
           <BoxedIcon name={item.icon} backgroundColor={item.backgroundColor}/>
           <Text style={{fontSize: 18, flex: 1}}>{item.name}</Text>
           <Ionicons name='chevron-forward' size={20} color={Colors.gray}/>
         </View>
       )}/>
   </View>
 );
};

