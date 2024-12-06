import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

// Function to format dates
function formatDate(dateString) {
  const date = new Date(dateString); // Convert string to Date object
  const options = { month: 'short', year: 'numeric' }; // Short month (e.g., "Dec"), numeric year
  return date.toLocaleString('en-US', options); // Format in "Dec 2012"
}

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
  educationItem: {
    marginBottom: 10,
  },
  degree: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 12,
    marginBottom: 4,
  },
  duration: {
    fontSize: 12,
    fontStyle: 'italic',
  },
});

function Education({ dataEducation }) {
  const hasValidData = dataEducation.some(edu =>
    Object.values(edu).some(value => value.trim() !== "")
  );

  if (!hasValidData) {
    return null; // Don't render anything if all attributes are empty
  }

  return (
    <View style={styles.section}>
      <Text style={styles.header}>Education</Text>
      {dataEducation.map((edu, index) => (
        <View style={styles.educationItem} key={index}>
          <Text style={styles.degree}>
            {edu.degree} degree in {edu.specialization}
          </Text>
          <Text style={styles.details}>
            {edu.institute}, {edu.university}
          </Text>
          <Text style={styles.duration}>
            {formatDate(edu.startDate)} to {formatDate(edu.endDate)}
          </Text>
          <Text style={styles.details}>{edu.duration}</Text>
        </View>
      ))}
    </View>
  );
}

export default Education;
