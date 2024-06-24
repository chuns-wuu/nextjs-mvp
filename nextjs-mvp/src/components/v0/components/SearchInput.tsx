/**
 * v0 by Vercel.
 * @see https://v0.dev/t/K9Yl8rCbBrv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("")
  const [suggestions, setSuggestions] = useState([
    "MySQL",
    "Postgres",
    "MongoDB"
  ])
  const [selectedOptions, setSelectedOptions] = useState([])

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      setSuggestions([...suggestions, searchTerm.trim()])
      setSelectedOptions([...selectedOptions, searchTerm.trim()])
    }
  }

  const filteredSuggestions = useMemo(() => {
    const matchedSuggestions = suggestions.filter((suggestion) => suggestion.toLowerCase().includes(searchTerm.toLowerCase()))
    if(matchedSuggestions.length == 0)
      return [searchTerm]
    return matchedSuggestions
  }, [searchTerm, suggestions])

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option))
    } else {
      setSelectedOptions([...selectedOptions, option])
    }
  }
  return (
    <div className="relative w-full max-w-md">
      <div className="flex flex-wrap gap-2 mb-2">
        {selectedOptions.map((option) => (
          <div
            key={option}
            className="bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-medium flex items-center gap-2"
          >
            {option}
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              onClick={() => handleOptionSelect(option)}
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      <div className="relative">
        <Input
          type="search"
          placeholder="Find it or type your own..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="pr-10"
        />
        <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
      </div>
      {filteredSuggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg dark:bg-gray-950 dark:text-white">
          <ul className="py-2">
            {filteredSuggestions.map((suggestion, index) => (
              <li 
                key={index} 
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                onClick={() => handleOptionSelect(suggestion)} >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}