import { useState } from "react";
import { Item } from "./Item";

export function PackingList({
  items,
  onDeleteItem,
  onToggleItems,
  onLimparItems,
}) {
  const [sortBy, setSortby] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.package) - Number(b.package));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortby(e.target.value)}>
          <option value="input">selecionar pela ordem do input</option>
          <option value="description">
            selecionar pela ordem da description
          </option>
          <option value="packed">selecionar pela ordem do packed</option>
        </select>
        <button onClick={() => onLimparItems()}>Limpar lista</button>
      </div>
    </div>
  );
}
