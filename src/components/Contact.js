import React from 'react';

function Contact({ dataContact }) {
  // Check if any field in dataContact has valid (non-empty) data
  const isValidEmail = dataContact.email && dataContact.email.trim() !== "";
  const isValidPhone = dataContact.phone && dataContact.phone.trim() !== "";
  const isValidLinkedIn = dataContact.linkedin && dataContact.linkedin.trim() !== "";
  const isValidGitHub = dataContact.github && dataContact.github.trim() !== "";

  // Return null if all fields are empty
  if (!(isValidEmail || isValidPhone || isValidLinkedIn || isValidGitHub)) {
    return null;
  }

  return (
    <section className="contact">
      <h2>Contact</h2>
      <ul>
        {isValidEmail && (
          <li>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${dataContact.email}`}>{dataContact.email}</a>
          </li>
        )}
        {isValidPhone && (
          <li>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${dataContact.phone}`}>{dataContact.phone}</a>
          </li>
        )}
        {isValidLinkedIn && (
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a href={dataContact.linkedin} target="_blank" rel="noopener noreferrer">
              {dataContact.linkedin}
            </a>
          </li>
        )}
        {isValidGitHub && (
          <li>
            <strong>GitHub:</strong>{" "}
            <a href={dataContact.github} target="_blank" rel="noopener noreferrer">
              {dataContact.github}
            </a>
          </li>
        )}
      </ul>
    </section>
  );
}

export default Contact;
