import { Button, Card, TextInput } from 'flowbite-react'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchCom = () => {
    
    
    return (
        <div className="bg-custom-theme min-h-screen flex flex-col">
            <div className="flex-grow flex items-center justify-center">
                <div className="text-center bg-white bg-opacity-70 p-10 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold mb-4">Find Your Favorite Lyrics</h1>
                    <p className="text-lg mb-6">Type the song title or artist to get started.</p>
                    <div className="flex items-center space-x-4">
                    <TextInput
                        type="text"
                        placeholder="Search for lyrics..."
                        className="w-full"
                    />
                    <Button gradientDuoTone="purpleToBlue" outline pill>
                        <AiOutlineSearch />
                    </Button>
                </div>
            </div>
        </div>

        <div className="py-12 bg-gray-100 bg-opacity-70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Search Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Placeholder cards for search results */}
                    <Card>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                            Song Title
                        </h5>
                        <p className="font-normal text-gray-700">
                            Artist Name
                        </p>
                    </Card>
                    <Card>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                            Song Title
                        </h5>
                        <p className="font-normal text-gray-700">
                            Artist Name
                        </p>
                    </Card>
                        <Card>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                            Song Title
                        </h5>
                        <p className="font-normal text-gray-700">
                            Artist Name
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchCom