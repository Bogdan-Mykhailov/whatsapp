import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Colors from "@/constants/Colors";
import {useAuth} from "@clerk/clerk-expo";
import {SettingsRow} from "@/components/SettingsRow";
import {devices, items, support} from "@/api/settings/data";

const Page = () => {
  const {signOut} = useAuth();

  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
      >
        <SettingsRow data={devices}/>
        <SettingsRow data={items}/>
        <SettingsRow data={support}/>

        <TouchableOpacity onPress={() => signOut()}>
          <Text
            style={{
              color: Colors.primary,
              fontSize: 18,
              textAlign: 'center',
              paddingVertical: 14.
            }}>
            Log Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Page;
