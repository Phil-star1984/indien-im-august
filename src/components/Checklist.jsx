import React, { useState } from "react";

function Checklist() {
  // Initiale Zustände für die Checkliste
  const [items, setItems] = useState({
    Kleidung: [
      { id: 1, text: "Leichte, atmungsaktive Kleidung", checked: false },
      { id: 2, text: "Regenjacke und wasserdichte Schuhe", checked: false },
    ],
    Dokumente: [
      { id: 3, text: "Reisepass", checked: false },
      { id: 4, text: "Visum", checked: false },
    ],
    Gesundheit: [
      { id: 5, text: "Medikamente und Reiseapotheke", checked: false },
      { id: 6, text: "Reiseversicherung", checked: false },
    ],
  });

  // Funktion zum Umschalten des Checked-Zustands
  const toggleChecked = (category, id) => {
    setItems({
      ...items,
      [category]: items[category].map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      ),
    });
  };

  // Zählfunktion für erledigte Aufgaben
  const getTotalChecked = () => {
    let totalChecked = 0;
    Object.values(items).forEach((category) => {
      category.forEach((item) => {
        if (item.checked) totalChecked++;
      });
    });
    return totalChecked;
  };

  const getTotalItems = () => {
    return Object.values(items).reduce(
      (total, category) => total + category.length,
      0
    );
  };

  return (
    <section id="checklist">
      <div className="checklist-container">
        <h2>Reise-Checkliste für Indien</h2>
        <p>
          {getTotalChecked()} von {getTotalItems()} Aufgaben erledigt
        </p>

        {Object.keys(items).map((category) => (
          <div key={category} className="category">
            <h3>{category}</h3>
            <ul>
              {items[category].map((item) => (
                <li key={item.id} className={item.checked ? "checked" : ""}>
                  <label>
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => toggleChecked(category, item.id)}
                    />
                    {item.text}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Checklist;
