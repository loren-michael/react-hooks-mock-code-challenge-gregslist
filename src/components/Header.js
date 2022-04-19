import React from "react";
import Search from "./Search";

function Header({ search, setSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
        setSearch={setSearch}
        search={search}      
      />
    </header>
  );
}

export default Header;
