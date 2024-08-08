import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <Header onDarkModeClick={toggleDarkMode} />
      <ShoppingList
        items={itemData}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}

export default App;