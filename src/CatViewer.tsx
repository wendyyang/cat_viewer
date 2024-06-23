import {useState} from 'react';
import axios from 'axios';
import { Button, Input } from "@cqcl/quantinuum-ui";

const CatViewer = ({ catUrl }) => {
    const [text, setText] = useState<string>('');

    const addTextToCat = async () => {
        try {
            const response = await axios.get(`https://cataas.com/cat/says/${encodeURIComponent(text)}`,{
                responseType: 'blob',
            })
            const imageUrl = URL.createObjectURL(response.data);
            window.open(imageUrl);
        }catch (error){
            console.error('Error:', error);
        }
    };
    return (
        <div>
            <h2>Selected Cat:</h2>
            <img src={catUrl} style={{width: '400px'}} />
            <div className='add_text'>
                <label>Add text: </label>
                <Input type="text" 
                        value={text}
                        className='input'
                        onChange={ (e) => setText(e.target.value)}
                />
                <Button onClick={addTextToCat}>Submit</Button>
            </div>
        </div>
    )
  }

export default CatViewer;