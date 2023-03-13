import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Spinner } from 'native-base';

const LoadingModal = () => {

    return (
        <View style={styles.container}>
            <Spinner size="lg" color="#00a680"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LoadingModal