import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CatList = ( {tag, onSelectCat }) => {
    const [cats, setCats] = useState<string[]>([]);

    useEffect( () => {
    const fetchCats = async() => {
        try {
            const response = await axios.get(`https://cataas.com/api/cats?tags=${tag}`);
            console.log('cats returned');
            console.log(response.data);
            let cat_id = response.data[0]._id;
            setCats(response.data.map((cat: any) => `https://cataas.com/cat/${cat_id}`))
            console.log(cats);
        }catch(error){
            console.error('Error:', error);
        }
    };
    fetchCats();
    }, [tag]);
    
    return(
        <div>
            <h2>Cats with tag {tag}: </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                {cats.map( (catUrl) => (
                    <img 
                        key={catUrl}
                        src={catUrl}
                        style={{ width: '400px', margin: '10px', cursor: 'pointer'}}
                        onClick={ ()=> onSelectCat(catUrl)}
                        />
                ))}
            </div>
        </div>
    )
};
export default CatList;