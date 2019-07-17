import React, { useEffect, useState } from 'react';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import { StyleSheet, View, Alert, SafeAreaView } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Right, Body, Title } from 'native-base';
import GlobalStyles from './GlobalStyles';
import Counter from './components/Counter';
import Notes from './components/Notes';

export default function App() {
  let [isLoading, setIsLoading]  = useState(true);

  useEffect(() => {
    loadFonts();
  }, []);
  
  async function loadFonts() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    setIsLoading(false);
  }
  
  if (!isLoading) {
    return (
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Ionicons name="ios-arrow-back" color="#FFFFFF"/>
              </Button>
            </Left>
            <Body style={{ alignItems: 'center' }}>
              <Title>Contador</Title>
            </Body>
            <Right>
              <Button transparent>
                <Ionicons name="ios-arrow-forward" color="#FFFFFF"/>
              </Button>
            </Right>
          </Header>
          <Content style={{ padding: 15 }}>
            <View style={styles.container}>
              <Text>Presiona un botón</Text>
            </View>
            {/* <Counter /> */}
            <Notes />
          </Content>
        </Container>
      </SafeAreaView>
    );
  } else {
    return <SafeAreaView style={GlobalStyles.droidSafeArea} />
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
