import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './host.css';
function Host() {
    const [host, setHost] = useState(null);
    const { id } = useParams();
  
    useEffect(() => {
      fetch('../../logement.json')
        .then(response => response.json())
        .then(data => data.find(item => item.id === id))
        .then(data => setHost(data.host));
    }, [id]);
  
    return (
      <div className="profile-bubble">
        {host && (
          <>
            <img
              className="profile-picture"
              src={host.picture}
              alt={host.name}
            />
            <span className="profile-name">{host.name}</span>
          </>
        )}
      </div>
    );
  }

  export default Host;