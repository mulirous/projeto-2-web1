import React, { useState } from "react";
import { Search } from "lucide-react"; // Importando o ícone

import "./Serachbar.css"

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={handleInputChange}
        className="inputSearch"
      />
      <Search className="iconSearch" /> {/* Ícone ao lado */}
    </div>
  );
}

export default Searchbar;
