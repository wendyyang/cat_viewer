import { useState, useEffect } from 'react';
import axios from 'axios';

import TagList from './TagList';
import CatList from './CatList';
import CatViewer from './CatViewer';

import './main.css';

const App = ()=> {
    const [tags, setTags] = useState<string[]>([]);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [selectedCat, setSelectedCat] = useState<string | null>(null);

    useEffect( () => {
        const fetchTags = async () => {
            try {
                const response = await axios.get('https://cataas.com/api/tags');
                setTags(response.data);
            } catch(error){
                console.error('Error: ', error);
            }
        };
        fetchTags(); 
    },[]);

    return (
        <div>
            <h1>Cat Viewer</h1>
            <div className='tag_list'>
                <TagList tags={tags} onSelectTag={setSelectedTag} />
            </div>
            <div className='cat_list'>
                { selectedTag && <CatList tag={selectedTag} onSelectCat={setSelectedCat} />}
            </div>
            <div className='cat'>
                { selectedCat && <CatViewer catUrl={selectedCat} />}
            </div>
        </div>
    );
}

export default App;
