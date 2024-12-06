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
  contactItem: {
    fontSize: 12,
    marginBottom: 5,
  },
  strong: {
    fontWeight: 'bold',
  },
});

function Contact({ dataContact }) {
  // Check if any field in dataContact has valid (non-empty) data
  const isValidEmail = dataContact.email && dataContact.email.trim() !== '';
  const isValidPhone = dataContact.phone && dataContact.phone.trim() !== '';
  const isValidLinkedIn = dataContact.linkedin && dataContact.linkedin.trim() !== '';
  const isValidGitHub = dataContact.github && dataContact.github.trim() !== '';

  // Return null if all fields are empty
  if (!(isValidEmail || isValidPhone || isValidLinkedIn || isValidGitHub)) {
    return null;
  }

  return (
    <View style={styles.section}>
      <Text style={styles.header}>Contact</Text>
      <View>
        {isValidEmail && (
          <Text style={styles.contactItem}>
            <Text style={styles.strong}>Email:</Text>{' '}
            <Link src={`mailto:${dataContact.email}`}>{dataContact.email}</Link>
          </Text>
        )}
        {isValidPhone && (
          <Text style={styles.contactItem}>
            <Text style={styles.strong}>Phone:</Text>{' '}
            <Link src={`tel:${dataContact.phone}`}>{dataContact.phone}</Link>
          </Text>
        )}
        {isValidLinkedIn && (
          <Text style={styles.contactItem}>
            <Text style={styles.strong}>LinkedIn:</Text>{' '}
            <Link src={dataContact.linkedin} target="_blank">
              {dataContact.linkedin}
            </Link>
          </Text>
        )}
        {isValidGitHub && (
          <Text style={styles.contactItem}>
            <Text style={styles.strong}>GitHub:</Text>{' '}
            <Link src={dataContact.github} target="_blank">
              {dataContact.github}
            </Link>
          </Text>
        )}
      </View>
    </View>
  );
}

export default Contact;
