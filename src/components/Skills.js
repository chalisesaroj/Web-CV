import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

// Define styles
const styles = StyleSheet.create({
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    borderBottom: '2 solid #000',
    paddingBottom: 5,
    marginBottom: 5,
  },
  listItem: {
    fontSize: 12,
    marginBottom: 3,
  },
});

const Skills = ({ dataSkill }) => {
  // Check if there's valid skill data
  const hasValidData = dataSkill.some(skill => skill.trim() !== '');

  if (!hasValidData) {
    return null; // Don't render if all skills are empty
  }

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Skills</Text>
      {dataSkill.map((skill, index) => {
        if (skill.trim() !== '') {
          return (
            <Text key={index} style={styles.listItem}>
              • {skill}
            </Text>
          );
        }
       
      })}
    </View>
  );
};

export default Skills;
