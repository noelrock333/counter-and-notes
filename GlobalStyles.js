import { StyleSheet, Platform, StatusBar } from 'react-native';
export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        ...Platform.select({
            Android: {
                backgroundColor: '#333'
            },
            ios: {}
        }),
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
});