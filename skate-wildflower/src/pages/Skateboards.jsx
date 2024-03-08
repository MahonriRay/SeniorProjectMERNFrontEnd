
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Components/Card';

function Skateboards() {
    const [deck, setDeck] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:80/getSkateDeck", {params: {deckName: ""}})
        .then(response =>{
            console.log(response.data)
            console.log(response.data[0].deckBrand)
            setDeck(response.data)
        })
        .catch(error => {
            console.log(error)
        });
     }, []);

    return (
        <div>
            {[...Array(3)].map((_, i) => <Card key={i} />)}
            <h1>Skateboards</h1>
            {deck && <h1>{deck[0].deckBrand}</h1>}
        </div>
    );
}

export default Skateboards;