import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

// Define styles for React PDF
const styles = StyleSheet.create({
  aboutSection: {
    marginBottom: 20,
  },
  aboutText: {
    fontSize: 12,
    lineHeight: 1.5,
  },
});

function About({ dataAbout }) {
  return (
    <section style={styles.aboutSection}>
      {/* <h2>About Me</h2> */}
      <View>
        <Text style={styles.aboutText}>{dataAbout}</Text>
      </View>
    </section>
  );
}

export default About;
