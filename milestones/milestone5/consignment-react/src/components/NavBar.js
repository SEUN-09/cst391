import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{
      backgroundColor: '#1a1d2e',
      padding: '12px 30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #2e3150'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          backgroundColor: '#f5a623',
          borderRadius: '8px',
          width: '36px',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '18px',
          color: '#1a1d2e'
        }}>S</div>
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#fff' }}>Samopel</div>
          <div style={{ fontSize: '10px', color: '#8888aa', letterSpacing: '1px' }}>LOGISTICS HUB</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '24px' }}>
        <Link to="/consignments" style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px' }}>
          All Consignments
        </Link>
        <Link to="/consignments/new" style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px' }}>
          + New Consignment
        </Link>
      </div>
      <div style={{ fontSize: '12px', color: '#555', letterSpacing: '1px' }}>
        SHIPMENT TRACKING SYSTEM
      </div>
    </nav>
  );
}

export default NavBar;