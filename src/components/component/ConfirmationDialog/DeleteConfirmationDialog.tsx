import React from 'react';

interface DeleteConfirmationDialogProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationDialog: React.FC<DeleteConfirmationDialogProps> = ({ onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-md">
        <p className="text-black text-lg font-semibold mb-4">Are you sure you want to delete this item?</p>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded mr-2"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationDialog;
