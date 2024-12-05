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
    borderBottom: '2px solid #000',
    paddingBottom: 5,
  },
  projectItem: {
    fontSize: 12,
    marginBottom: 5,
  },
});

function Projects({ dataProject }) {
  // Function to check if any project has valid data
  function isValidProjects(projectsArray) {
    return projectsArray.some(project => {
      return Object.values(project).some(value =>
        typeof value === 'string' && value.trim() !== ''
      );
    });
  }

  // Return null if no valid project data
  if (!isValidProjects(dataProject)) {
    return null;
  }

  return (
    <section style={styles.section}>
      <Text style={styles.header}>Projects</Text>
      <View>
        {dataProject.map((proj, ind) => (
          <Text key={ind} style={styles.projectItem}>
            {/* Link component in React PDF */}
            <Link src={proj.projectLink}>{proj.projectname}</Link>
          </Text>
        ))}
      </View>
    </section>
  );
}

export default Projects;
