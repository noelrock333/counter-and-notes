import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

function Counter() {
    let [counter, setCounter] = useState(0);

    return (
        <View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 35, margin: 20 }}>
                    {counter}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button onPress={() => setCounter(counter + 1)}>
                    <Text>Incrementa</Text>
                </Button>
                <Button onPress={() => setCounter(counter - 1)}>
                    <Text>Decrementa</Text>
                </Button>
                <Button onPress={() => setCounter(0)}>
                    <Text>Reinicia</Text>
                </Button>
            </View>
        </View>
    );
}

export default Counter;