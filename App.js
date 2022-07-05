import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native'; //pulls in parts that we need to create stuff
//styleSheet --> how things are styled, colored, ect
import Constants from 'expo-constants'; //consts that can be used
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory'; 

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);
  return (
    //simple JSX UI
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history={history}/>
        </>
      ) : (
       <Timer
          focusSubject={currentSubject} //tells what subject to focus on based on input from user
          onTimerEnd={(subject) => {
            setHistory([...history, subject])
          }} //tells what to do when timer ends
          clearSubject={() => setCurrentSubject(null)} //how to clear the subject
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.sageGreen,
  },
  text: {
    color: colors.white,
  },
});

/*flex: fills the whole shell
padding: where the items are, from right, left, top and bottom
  density based pixels (can look different on devices)
styleSheet.create: easy for keeping everything looking nice 
*/
