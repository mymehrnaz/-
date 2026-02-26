import React from "react";
import { Listbox } from "@headlessui/react";

export default function CategorySelect({ categories, selected, onChange }) {
  return (
    <Listbox value={selected} onChange={onChange} multiple>
      <div className="relative w-64">
        <Listbox.Button className="border rounded p-2 w-full text-left">
          {selected.length ? selected.join(", ") : "Select categories"}
        </Listbox.Button>

        <Listbox.Options className="absolute mt-1 w-full bg-white border rounded shadow z-10">
          {categories.map(cat => (
            <Listbox.Option key={cat} value={cat}>
              {cat}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
