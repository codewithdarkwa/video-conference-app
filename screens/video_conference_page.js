import React, { useEffect } from 'react';

import { StyleSheet, View} from 'react-native';
import ZegoUIKitPrebuiltVideoConference from '@zegocloud/zego-uikit-prebuilt-video-conference-rn'

export default function VideoConferencePage(props) {
    const { route } = props;
    const { params } = route;
    const { userID, userName, conferenceID } = params;

    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltVideoConference
                appID={1809520900}
                appSign="904e0a93e3694452f043285d0756f876bef2cc2f4f02b298582c6ff768b2c3f7"
                userID={userID}
                userName={userName}
                conferenceID={conferenceID}

                config={{
                    onLeave: () => { props.navigation.navigate('Home') },
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
});