import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { blue } from '@mui/material/colors';

// Define styles
const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
  },
  personName: {
    fontSize: 24,
    fontWeight: 3,
    color:"blue"
  },
  title: {
    fontSize: 16,
    color: '#555',
  },
});

const Header = ({ dataHeader }) => (
  <View style={styles.header}>
    <Text style={styles.personName}>{dataHeader.personname }</Text>
    <Text style={styles.title}>{dataHeader.title}</Text>
  </View>
);

export default Header;
