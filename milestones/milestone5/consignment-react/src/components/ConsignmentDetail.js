import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getConsignmentById, deleteConsignment } from '../services/consignmentService';

const statusColor = (status) => {
  if (status === 'Delivered') return { backgroundColor: '#1a3a2a', color: '#4caf50' };
  if (status === 'In Transit') return { backgroundColor: '#1a2a3a', color: '#2196f3' };
  if (status === 'Pending') return { backgroundColor: '#3a2a1a', color: '#ff9800' };
  return { backgroundColor: '#2a2a2a', color: '#aaa' };
};

function ConsignmentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [consignment, setConsignment] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getConsignmentById(id)
      .then((res) => setConsignment(res.data))
      .catch(() => setError('Could not load consignment details.'));
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Delete this consignment?')) {
      try {
        await deleteConsignment(id);
        navigate('/consignments');
      } catch {
        setError('Failed to delete.');
      }
    }
  };

  if (error) return <div style={{ color: '#f44336', padding: '20px' }}>{error}</div>;
  if (!consignment) return <p style={{ color: '#888', padding: '20px' }}>Loading...</p>;

  return (
    <div style={{ padding: '30px', display: 'flex', justifyContent: 'center' }}>
      <div style={{
        backgroundColor: '#1a1d2e',
        borderRadius: '12px',
        padding: '30px',
        width: '100%',
        maxWidth: '600px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ color: '#fff', margin: 0 }}>Consignment Details</h2>
          <Link to="/consignments" style={{ color: '#888', fontSize: '13px', textDecoration: 'none' }}>← Back to List</Link>
        </div>

        <div style={{
          backgroundColor: '#13151f',
          borderRadius: '10px',
          padding: '24px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ color: '#fff', margin: 0 }}>{consignment.reference_number}</h3>
            <span style={{
              ...statusColor(consignment.status),
              padding: '5px 14px',
              borderRadius: '12px',
              fontSize: '13px',
              fontWeight: 'bold'
            }}>{consignment.status}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <div style={{ color: '#666', fontSize: '11px', letterSpacing: '1px', marginBottom: '4px' }}>SENDER</div>
              <div style={{ color: '#ccc' }}>{consignment.sender_name}</div>
            </div>
            <div>
              <div style={{ color: '#666', fontSize: '11px', letterSpacing: '1px', marginBottom: '4px' }}>RECEIVER</div>
              <div style={{ color: '#ccc' }}>{consignment.receiver_name}</div>
            </div>
            <div>
              <div style={{ color: '#666', fontSize: '11px', letterSpacing: '1px', marginBottom: '4px' }}>DELIVERY ADDRESS</div>
              <div style={{ color: '#ccc' }}>{consignment.delivery_address || '—'}</div>
            </div>
            <div>
              <div style={{ color: '#666', fontSize: '11px', letterSpacing: '1px', marginBottom: '4px' }}>CREATED</div>
              <div style={{ color: '#ccc' }}>{new Date(consignment.created_at).toLocaleString()}</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
            <button onClick={handleDelete} style={{
              backgroundColor: '#3a1a1a',
              color: '#f44336',
              border: '1px solid #f44336',
              padding: '8px 20px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>Delete</button>
            <Link to={`/consignments/edit/${consignment.id}`} style={{
              backgroundColor: '#f5a623',
              color: '#1a1d2e',
              padding: '8px 20px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}>Edit Consignment</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsignmentDetail;