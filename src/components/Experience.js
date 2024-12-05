import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

// Define styles for React PDF
const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textDecoration: 'underline',
  },
  experienceItem: {
    marginBottom: 10,
  },
  role: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  duration: {
    fontSize: 12,
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    marginBottom: 4,
    marginLeft: 20, // Indent descriptions for better clarity
  },
});

function Experience({ dataExperience }) {
  const hasValidData = dataExperience.some(exp => {
    // Check if role, company, or duration is non-empty
    const isValidRole = exp.role && exp.role.trim() !== '';
    const isValidCompany = exp.company && exp.company.trim() !== '';
    const isValidDuration = exp.duration && exp.duration.trim() !== '';

    // Check if description array contains at least one non-empty string
    const isValidDescription = exp.description.some(desc => desc.trim() !== '');

    return isValidRole || isValidCompany || isValidDuration || isValidDescription;
  });

  if (!hasValidData) {
    return null; // Don't render anything if all attributes are empty
  }

  return (
    <View style={styles.section}>
      <Text style={styles.header}>Work Experience</Text>
      {dataExperience.map((exp, index) => (
        <View style={styles.experienceItem} key={index}>
          <Text style={styles.role}>{exp.role} - {exp.company}</Text>
          <Text style={styles.duration}>{exp.duration}</Text>
          {exp.description.map((desc, ind) => (
            <Text style={styles.description} key={ind}>
              {desc}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}

export default Experience;
