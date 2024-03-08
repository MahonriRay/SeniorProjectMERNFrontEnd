
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AddItem () {
    const [deck, setDeck] = useState({
        deckBrand: "",
        deckName: "",
        deckWidth: ""
        // deckImage: "" Come back to this later when I set up Multer
    });
    
    const handleChange = (e) => {
        const nextDeckState = {...deck, [e.target.name]: e.target.value};
        console.log("NEXT DECK STATE HERE: ", nextDeckState);
        setDeck(nextDeckState);
    }
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = deck;
            console.log("BODY: ", body);
            const response = await axios.post("http://localhost:80/addSkateDeck", body);
            console.log("RESPONSE: ", response);
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <div>
            <h1>Add Items</h1>
            <form onSubmit={onSubmitForm}>
                <label>Brand:</label>
                <input type="text" name="deckBrand" value={deck.deckBrand} onChange={handleChange} />
                <label>Name:</label>
                <input type="text" name="deckName" value={deck.deckName} onChange={handleChange} />
                <label>Width:</label>
                <input type="text" name="deckWidth" value={deck.deckWidth} onChange={handleChange} />
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
}


export default AddItem;