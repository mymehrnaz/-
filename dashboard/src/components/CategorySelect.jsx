export default function CategorySelect({ categories, selected, onChange }) {
  function handleChange(e) {
    const value = Array.from(e.target.selectedOptions, o => o.value);
    onChange(value);
  }

  return (
    <select
      multiple
      value={selected}
      onChange={handleChange}
      className="border rounded p-2 w-64"
    >
      {categories.map(cat => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}

