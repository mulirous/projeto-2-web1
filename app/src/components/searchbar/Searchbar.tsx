import React, { useState } from "react";
import { Search } from "lucide-react"; // Importando o ícone

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={handleInputChange}
        className="p-2 max-w-[300px] border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
      />
      <Search className="ml-[-30px] text-gray-500 cursor-pointer" />
    </div>
  );
}

export default Searchbar;
