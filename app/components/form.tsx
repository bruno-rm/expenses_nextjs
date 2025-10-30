"use client";

import { createExpense } from "@/lib/actions";

export default function Form() {
  return (
    <form
      action={createExpense}
      className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 w-full max-w-md space-y-4 mb-5"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Add Record</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <input
          type="text"
          name="description"
          required
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter description"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Value
        </label>
        <input
          type="number"
          name="value"
          step="0.01"
          required
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter value"
        />
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Day
          </label>
          <input
            type="number"
            name="day"
            min="1"
            max="31"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="1-31"
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Month
          </label>
          <input
            type="number"
            name="month"
            min="1"
            max="12"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="1-12"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
      >
        Add
      </button>
    </form>
  );
}
