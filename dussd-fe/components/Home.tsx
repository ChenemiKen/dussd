import React from 'react';
import { View, Text, Linking } from 'react-native';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import {call} from 'react-native-phone-call';

export type Props = {
    name: string;
}

const Home: React.FC<Props> = ({}) => {
    return (
        <View>
            <Text onPress={()=> RNImmediatePhoneCall.immediatePhoneCall("0123456789")}>
                Hello there
            </Text>
            <Text onPress={() => Linking.openURL(`tel:08066021026`)}>
                phone call
            </Text>
        </View>
    )
}

export default Home;