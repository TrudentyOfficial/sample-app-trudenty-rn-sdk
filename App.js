import React from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {TrudentyKyc} from 'trudenty-rn-sdk';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const RootStack = createNativeStackNavigator();

const Hello = ({navigation}) => {
  const onCreateSubmit = async () => {
    const subjectId = '6382c3582d0a5f3d9ed9021d';
    navigation.navigate('Trudenty', {subjectId});
  };
  return (
    <View>
      <Button title="Complete your KYC" onPress={onCreateSubmit} />
      <Text style={{color: '#0DD3C5', fontSize: 20, fontWeight: 'bold'}}>
        Hello Bitris!
      </Text>
    </View>
  );
};

export default function App() {
  const onSuccess = (msg: any) => {
    console.log('On success:', msg);
  };

  const onFail = (error: any) => {
    console.log('On Fail:', error);
  };
  return (
    <NavigationContainer data-testid="welcome-btn">
      <RootStack.Navigator initialRouteName="Hello">
        <RootStack.Screen
          name={'Trudenty'}
          options={{headerShown: false}}
          children={({route}) => (
            <TrudentyKyc
              config={{
                returnPath: 'Hello',
                appName: 'Fluid Coins',
                ApplicationID: '631b4ff5cfcc142ffe7a3f9c',
                Environment: 'dev',
              }}
              route={route}
              onSuccess={onSuccess}
              onFail={onFail}
              fontFamily={
                Platform.OS === 'android'
                  ? 'ttcommons_demibold'
                  : 'ttcommons-demibold'
              }
            />
          )}
        />
        <RootStack.Screen
          name={'Hello'}
          children={({navigation}) => <Hello {...{navigation}} />}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#683D87',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default App;
