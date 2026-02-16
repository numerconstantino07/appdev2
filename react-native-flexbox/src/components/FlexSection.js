import React from 'react';
import { StyleSheet, View } from 'react-native';

const FlexSection = () => {
  return (
    <View style={styles.container}>
      {/* Added width/height so you can see them moving around */}
      <View style={{ width: 50, height: 50, backgroundColor: "red" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "darkorange" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "green" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around', // This is your Section 4 focus!
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch', // Try 'center', 'flex-start', 'flex-end', 'stretch'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start', // Parent aligns everyone to the left
  },
});

export default FlexSection;