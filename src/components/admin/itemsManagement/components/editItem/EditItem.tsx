'use client'

import React, { useState } from 'react';

interface EditItemProps {
  item: any;
  onEdit: (editedItem: any) => void;
  onCancel: () => void;
}

const EditItem: React.FC<EditItemProps> = ({ item, onEdit, onCancel }) => {
  const [editedItem, setEditedItem] = useState({ ...item });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedItem((prevItem: EditItemProps) => ({ ...prevItem, [name]: value }));
  };

  const handleSave = () => {
    onEdit(editedItem);
  };

  return (
    <div className="edit-item-form p-4 border-2 border-gray-500 rounded text-black">
      {/* Input fields for editing */}
      <div className="mb-4">
        <label className="block text-gray-500 text-sm font-bold mb-2">Title:</label>
        <input
          type="text"
          name="title"
          value={editedItem.title}
          onChange={handleInputChange}
          className="border text-sm font-bold rounded w-full py-2 px-3"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-500 text-sm font-bold mb-2">Weight:</label>
        <input
          type="text"
          name="weight"
          value={editedItem.weight}
          onChange={handleInputChange}
          className="border text-sm font-bold rounded w-full py-2 px-3"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-500 text-sm font-bold mb-2">Price:</label>
        <input
          type="text"
          name="price"
          value={editedItem.price}
          onChange={handleInputChange}
          className="border text-sm font-bold rounded w-full py-2 px-3"
        />
      </div>

      {/* Save and cancel buttons */}
      <div className="flex justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditItem;