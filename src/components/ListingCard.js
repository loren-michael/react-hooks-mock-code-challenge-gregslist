import React, { useState } from "react";

function ListingCard({ item, onDeleteListing }) {
  const [favorite, setFavorite] = useState(false)

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: "DELETE"
    })
    .then(r => r.json)
    .then(onDeleteListing(item.id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={() => setFavorite(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFavorite(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
