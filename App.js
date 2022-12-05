// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
//  * LTI update could not be added via codemod */
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

import React from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
// import logo from '../../assets/logo.png';
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
    // <View style={styles.container}>
    //   <Image source={logo} />

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
    // </View>
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
