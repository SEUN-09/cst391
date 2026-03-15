import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllConsignments, deleteConsignment } from '../services/consignmentService';

const statusColor = (status) => {
  if (status === 'Delivered') return { backgroundColor: '#1a3a2a', color: '#4caf50' };
  if (status === 'In Transit') return { backgroundColor: '#1a2a3a', color: '#2196f3' };
  if (status === 'Pending') return { backgroundColor: '#3a2a1a', color: '#ff9800' };
  return { backgroundColor: '#2a2a2a', color: '#aaa' };
};

function ConsignmentList() {
  const [consignments, setConsignments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchConsignments();
  }, []);

  const fetchConsignments = async () => {
    try {
      const response = await getAllConsignments();
      setConsignments(response.data);
    } catch (err) {
      setError('Failed to load consignments. Make sure the API server is running.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this consignment?')) {
      try {
        await deleteConsignment(id);
        setConsignments(consignments.filter((c) => c.id !== id));
      } catch (err) {
        setError('Failed to delete consignment.');
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ color: '#fff', margin: 0 }}>Consignments</h2>
        <Link to="/consignments/new" style={{
          backgroundColor: '#f5a623',
          color: '#1a1d2e',
          padding: '8px 18px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '14px'
        }}>+ New Consignment</Link>
      </div>

      {error && <div style={{ color: '#f44336', marginBottom: '10px' }}>{error}</div>}

      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#1a1d2e', borderRadius: '10px', overflow: 'hidden' }}>
        <thead>
          <tr style={{ backgroundColor: '#13151f', color: '#888', fontSize: '12px', letterSpacing: '1px' }}>
            <th style={{ padding: '14px 16px', textAlign: 'left' }}>REFERENCE</th>
            <th style={{ padding: '14px 16px', textAlign: 'left' }}>SENDER</th>
            <th style={{ padding: '14px 16px', textAlign: 'left' }}>RECEIVER</th>
            <th style={{ padding: '14px 16px', textAlign: 'left' }}>STATUS</th>
            <th style={{ padding: '14px 16px', textAlign: 'left' }}>CREATED</th>
            <th style={{ padding: '14px 16px', textAlign: 'left' }}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {consignments.map((item) => (
            <tr key={item.id} style={{ borderTop: '1px solid #2e3150' }}>
              <td style={{ padding: '14px 16px', color: '#ccc', fontSize: '13px' }}>{item.reference_number}</td>
              <td style={{ padding: '14px 16px', color: '#ccc', fontSize: '13px' }}>{item.sender_name}</td>
              <td style={{ padding: '14px 16px', color: '#ccc', fontSize: '13px' }}>{item.receiver_name}</td>
              <td style={{ padding: '14px 16px' }}>
                <span style={{
                  ...statusColor(item.status),
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>{item.status}</span>
              </td>
              <td style={{ padding: '14px 16px', color: '#888', fontSize: '13px' }}>
                {new Date(item.created_at).toLocaleDateString()}
              </td>
              <td style={{ padding: '14px 16px', display: 'flex', gap: '8px' }}>
                <Link to={`/consignments/${item.id}`} style={{
                  backgroundColor: '#2e3150',
                  color: '#f5a623',
                  padding: '5px 14px',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  fontSize: '13px'
                }}>View</Link>
                <Link to={`/consignments/edit/${item.id}`} style={{
                  backgroundColor: '#2e3150',
                  color: '#2196f3',
                  padding: '5px 14px',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  fontSize: '13px'
                }}>Edit</Link>
                <button onClick={() => handleDelete(item.id)} style={{
                  backgroundColor: '#3a1a1a',
                  color: '#f44336',
                  border: 'none',
                  padding: '5px 14px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '13px'
                }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {consignments.length === 0 && !error && (
        <p style={{ color: '#666', textAlign: 'center', marginTop: '30px' }}>No consignments found.</p>
      )}
    </div>
  );
}

export default ConsignmentList;