import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

// Define styles for React PDF components
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    paddingBottom: 5,
    textAlign: 'left',
  },
  listItem: {
    fontSize: 12,
    marginBottom: 3,
    marginLeft: 10, // Indentation for list
  },
});

function Familiarwith({ dataFamiliarWith }) {
if(dataFamiliarWith.every((str) => str.trim() === "")){
  return null;
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Familiar With</Text>
      <View>
        {dataFamiliarWith.map((familiarwith, index) => {
          if (familiarwith.trim() !== "") {
            return (
              <Text key={index} style={styles.listItem}>
                • {familiarwith} 
              </Text>
            )
          }
        })}
      </View>
    </View>
  );
}

export default Familiarwith;
