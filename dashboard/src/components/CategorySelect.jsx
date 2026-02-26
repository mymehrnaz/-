import { Listbox } from "@headlessui/react";

export default function CategorySelect({ categories, selected, onChange }) {
  return (
    <Listbox value={selected} onChange={onChange} multiple>
      <div className="relative w-64">
        <Listbox.Button className="w-full border rounded p-2 text-left">
          {selected.length ? selected.join(", ") : "Select categories"}
        </Listbox.Button>

        <Listbox.Options className="absolute mt-1 w-full bg-white border rounded shadow z-10">
          {categories.map(cat => (
            <Listbox.Option
              key={cat}
              value={cat}
              className="cursor-pointer p-2 hover:bg-gray-100"
            >
              {cat}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
