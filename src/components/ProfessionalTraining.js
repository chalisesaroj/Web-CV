import React from 'react';
import { Text, View, StyleSheet, Link } from '@react-pdf/renderer';

// Define styles for React PDF
const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bolder',
    marginBottom: 10, 
    borderBottomWidth: 1,          
    borderBottomColor: 'black',    
    paddingBottom: 4,       

  },
  listItem: {
    fontSize: 12,
    marginBottom: 8,
  },
  strong: {
    fontWeight: 'bold',
  },
});

const ProfessionalTraining = ({ dataProfessionalTraining }) => {
  function isValidProfessionalTraining(trainingArray) {
    return trainingArray.some(training => {
      // Check if any value in the object is a non-empty string
      return Object.values(training).some(value => 
        typeof value === 'string' && value.trim() !== ''
      );
    });
  }

  if (!isValidProfessionalTraining(dataProfessionalTraining)) {
    return null;
  }

  return (
    <View style={styles.section}>
      <Text style={styles.header}>Professional Training</Text>
      {dataProfessionalTraining.map((training, index) => (
        <View key={index}>
          <Text style={styles.listItem}>
            <Link src={training.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              {training.title} from the instructor{' '}
              <Text style={styles.strong}>{training.instructor}</Text> via{' '}
              <Text style={styles.strong}>{training.platform}</Text> -- {training.duration}
            </Link>
          </Text>
        </View>
      ))}
    </View>
  );
};

export default ProfessionalTraining;
