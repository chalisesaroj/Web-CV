import React from "react";

function CertificationForm({ data, setData }) {
  // Function to handle input changes for each certification field
  const handleInputChange = (e, index, field) => {
    const updatedCertifications = [...data.certification];
    updatedCertifications[index] = {
      ...updatedCertifications[index],
      [field]: e.target.value,
    };
    setData(updatedCertifications);
  };

  // Function to add a new certification entry
  const addCertification = () => {
    setData([...data.certification, { certificateTitle: "", certificateLink: "" }]);
  };

  // Function to remove a certification entry
  const removeCertification = (index) => {
    const updatedCertifications = data.certification.filter((_, i) => i !== index);
    setData(updatedCertifications);
  };

  return (
    <div>
      <h3>Certifications</h3>
      {/* Ensure at least one empty input is shown if no certifications exist */}
      {data.certification.length === 0 && (
        <div>
          <input
            type="text"
            placeholder="Title of the certificate"
            onChange={(e) => handleInputChange(e, 0, "certificateTitle")}
          />
          <input
            type="text"
            placeholder="Link to the certificate"
            onChange={(e) => handleInputChange(e, 0, "certificateLink")}
          />
        </div>
      )}

      {data.certification.map((cert, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Title of the certificate"
            value={cert.certificateTitle}
            onChange={(e) => handleInputChange(e, index, "certificateTitle")}
          />
          <input
            type="text"
            placeholder="Link to the certificate"
            value={cert.certificateLink}
            onChange={(e) => handleInputChange(e, index, "certificateLink")}
          />
          <button onClick={() => removeCertification(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addCertification}>Add Certification</button>
    </div>
  );
}

export default CertificationForm;
