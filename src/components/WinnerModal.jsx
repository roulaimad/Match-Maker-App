import React from "react";

export default function WinnerModal({
  isOpen,
  onClose,
  onConfirm,
  options = [],
  selectedWinner,
  setSelectedWinner,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl p-6 shadow-xl space-y-4 w-80">
        <h2 className="text-xl font-bold mb-2 text-center">Who won?</h2>

        <div className="space-y-2">
          {options.map((name) => (
            <label
              key={name}
              className="flex items-center gap-2 p-2 border rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <input
                type="radio"
                name="winner"
                value={name}
                checked={selectedWinner === name}
                onChange={(e) => setSelectedWinner(e.target.value)}
                className="accent-blue-600 w-4 h-4"
              />
              <span className="font-medium">{name}</span>
            </label>
          ))}
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={!selectedWinner}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
