import React from 'react';

const TagList = ( {tags, onSelectTag }) => {
    return (
        <div>
            <h2>Select a Tag:</h2>
            <ul>
                {tags.map((tag) => (
                    <li key={tag} onClick={()=> onSelectTag(tag)} style={{ cursor: 'pointer'}}>
                        {tag}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TagList;