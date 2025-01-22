import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const UserDropdownPortal = ({ 
  show, 
  onClose, 
  user, 
  handleLogout, 
  getInitials, 
  position 
}) => {
  if (!show) return null;

  return ReactDOM.createPortal(
    <div 
      className="dropdown-portal-overlay"
      onClick={onClose}
    >
      <div 
        className="user-dropdown"
        style={{
          position: 'fixed',
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
        onClick={e => e.stopPropagation()}
      >
        <div className="dropdown-header">
          <div className="user-avatar">
            {getInitials(user.username)}
          </div>
          <div className="user-info">
            <span className="user-name">{user.username}</span>
            <span className="user-email">{user.email}</span>
          </div>
        </div>
        <div className="dropdown-divider"></div>
        <div className="dropdown-menu">
          <Link to="/profile" className="dropdown-item" onClick={onClose}>
            <span className="item-icon">👤</span>
            Profile
          </Link>
          <Link to="/settings" className="dropdown-item" onClick={onClose}>
            <span className="item-icon">⚙️</span>
            Settings
          </Link>
          <button onClick={handleLogout} className="dropdown-item logout-item">
            <span className="item-icon">🚪</span>
            Sign Out
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('portal-root')
  );
};

export default UserDropdownPortal;
