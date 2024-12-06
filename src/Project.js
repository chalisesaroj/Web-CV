import React from 'react';
import { Text, View, StyleSheet, Link } from '@react-pdf/renderer';

// Define styles for React PDF
const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    paddingBottom: 5,
  },
  projectItem: {
    fontSize: 12,
    marginBottom: 5,
  },
  link: {
    color: '#1a0dab', // Link color, customize if needed
    textDecoration: 'none', // Remove underline for a cleaner look
  },
});

function Projects({ dataProject }) {
  // Check if any project has valid data
  const isValidProjects = dataProject.some(project =>
    Object.values(project).some(value => typeof value === 'string' && value.trim() !== '')
  );

  if (!isValidProjects) {
    return null;
  }

  return (
    <View style={styles.section}>
      <Text style={styles.header}>Projects</Text>
      {dataProject.map((proj, ind) => (
        <Text key={ind} style={styles.projectItem}>
          <Link style={styles.link} src={proj.projectLink}>
            {proj.projectname}
          </Link>
        </Text>
      ))}
    </View>
  );
}

export default Projects;
