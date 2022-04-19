import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings, search }) {

  function handleDeleteListing(id) {
    const updatedListings = listings.filter(item => item.id !== id);
    setListings(updatedListings)
  }

  const filteredListings = listings.filter(listing => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  // console.log(filteredListings)

  return (
    <main>
      <ul className="cards">
        {filteredListings.map((item) => {
          return <ListingCard 
            key={item.id} 
            item={item} 
            onDeleteListing={handleDeleteListing}
          />
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
