import { Button, Card, TextInput } from "flowbite-react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchPage = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="md:h-dvh bg-center flex flex-col overflow-hidden mx-20 dark:bg-gray-900">
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center bg-white bg-opacity-70 p-10 rounded-lg shadow-lg dark:bg-gray-800 dark:bg-opacity-70">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Find Your Favorite Lyrics
          </h1>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            Type the song title or artist to get started.
          </p>
          <div className="flex items-center space-x-4">
            <TextInput
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for lyrics..."
              className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
            />
            <Button
              onClick={handleSearch}
              gradientDuoTone="purpleToBlue"
              outline
              pill
              className="dark:text-gray-100 dark:border-gray-600 dark:bg-gray-700"
            >
              <AiOutlineSearch />
            </Button>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-100 bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 dark:text-gray-100">
            Search Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder cards for search results */}
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                Song Title
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-300">
                Artist Name
              </p>
            </Card>
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                Song Title
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-300">
                Artist Name
              </p>
            </Card>
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                Song Title
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-300">
                Artist Name
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
