import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((listings) => setListings(listings))
      // .then(console.log)
  }, []);

  return (
    <div className="app">
      <Header 
        setSearch={setSearch}
        search={search}
      />
      <ListingsContainer 
        setListings={setListings} 
        listings={listings} 
        setSearch={setSearch}
        search={search}
      />
    </div>
  );
}

export default App;
