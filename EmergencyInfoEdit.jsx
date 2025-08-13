import React, { useState, useEffect } from "react";
import "./EmployeeDetails.css";

function EmergencyInfoEdit({ employee, onSave, onClose }) {
  const [formData, setFormData] = useState({
    contactName: employee.contactName || '',
    contactPhoneNumber: employee.contactPhoneNumber || '',
    contactRelationship: employee.contactRelationship || ''
  });

  const handleSubmit = () => {
    onSave(employee._id, 'emergency', formData);
    onClose();
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="section-edit-modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>&times;</button>
        <h3>Edit Emergency Information</h3>
        
        <div className="section-edit-form">
          <div className="form-row">
            <div className="input-group">
              <label>Contact Name</label>
              <input
                type="text"
                value={formData.contactName}
                onChange={(e) => handleInputChange('contactName', e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="tel"
                value={formData.contactPhoneNumber}
                onChange={(e) => handleInputChange('contactPhoneNumber', e.target.value)}
              />
            </div>
          </div>
          <div className="input-group">
            <label>Relationship</label>
            <select
              value={formData.contactRelationship}
              onChange={(e) => handleInputChange('contactRelationship', e.target.value)}
            >
              <option value="">Select Relationship</option>
              <option value="Parent">Parent</option>
              <option value="Sibling">Sibling</option>
              <option value="Spouse">Spouse</option>
              <option value="Child">Child</option>
              <option value="Relative">Relative</option>
              <option value="Friend">Friend</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="role-modal-actions">
          <button className="confirm-button" onClick={handleSubmit}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmergencyInfoEdit;