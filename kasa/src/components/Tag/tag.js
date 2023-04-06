import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './tag.css';

function Tag() {
    const [tagData, setTagData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch('../../logement.json')
            .then(response => response.json())
            .then(data => data.find(item => item.id === id))
            .then(data => setTagData(data.tags));
    }, [id]);

    return (
        <div className="container_tag">
            {tagData.map((tagItem, index) => <div className="tag_container" key={index}><span>{tagItem}</span></div>)}
        </div>
    );
}

export default Tag;
