import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { createConsignment, getConsignmentById, updateConsignment } from '../services/consignmentService';

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  backgroundColor: '#0f1117',
  border: '1px solid #2e3150',
  borderRadius: '6px',
  color: '#ccc',
  fontSize: '14px',
  boxSizing: 'border-box'
};

const labelStyle = {
  display: 'block',
  color: '#888',
  fontSize: '11px',
  letterSpacing: '1px',
  marginBottom: '6px'
};

function ConsignmentForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({
    reference_number: '',
    sender_name: '',
    receiver_name: '',
    delivery_address: '',
    status: 'Pending',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (isEditMode) {
      getConsignmentById(id)
        .then((res) => setFormData(res.data))
        .catch(() => setError('Failed to load consignment.'));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      if (isEditMode) {
        await updateConsignment(id, formData);
        setSuccess('Consignment updated!');
      } else {
        await createConsignment(formData);
        setSuccess('Consignment created!');
      }
      setTimeout(() => navigate('/consignments'), 1500);
    } catch {
      setError('Failed to save. Please check your inputs.');
    }
  };

  return (
    <div style={{ padding: '30px', display: 'flex', justifyContent: 'center' }}>
      <div style={{
        backgroundColor: '#1a1d2e',
        borderRadius: '12px',
        padding: '30px',
        width: '100%',
        maxWidth: '560px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ color: '#fff', margin: 0 }}>{isEditMode ? 'Edit Consignment' : 'New Consignment'}</h2>
          <Link to="/consignments" style={{ color: '#888', fontSize: '13px', textDecoration: 'none' }}>← Back to List</Link>
        </div>

        {error && <div style={{ color: '#f44336', marginBottom: '12px' }}>{error}</div>}
        {success && <div style={{ color: '#4caf50', marginBottom: '12px' }}>{success}</div>}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>REFERENCE NUMBER</label>
            <input style={inputStyle} name="reference_number" value={formData.reference_number} onChange={handleChange} required />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>SENDER NAME</label>
            <input style={inputStyle} name="sender_name" value={formData.sender_name} onChange={handleChange} required />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>RECEIVER NAME</label>
            <input style={inputStyle} name="receiver_name" value={formData.receiver_name} onChange={handleChange} required />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>DELIVERY ADDRESS</label>
            <input style={inputStyle} name="delivery_address" value={formData.delivery_address || ''} onChange={handleChange} />
          </div>
          <div style={{ marginBottom: '24px' }}>
            <label style={labelStyle}>STATUS</label>
            <select style={inputStyle} name="status" value={formData.status} onChange={handleChange}>
              <option value="Pending">Pending</option>
              <option value="In Transit">In Transit</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button type="button" onClick={() => navigate('/consignments')} style={{
              backgroundColor: 'transparent',
              border: '1px solid #2e3150',
              color: '#888',
              padding: '10px 24px',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>Cancel</button>
            <button type="submit" style={{
              backgroundColor: '#f5a623',
              color: '#1a1d2e',
              border: 'none',
              padding: '10px 24px',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>{isEditMode ? 'Update Consignment' : 'Create Consignment'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConsignmentForm;