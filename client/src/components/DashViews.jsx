import { Card } from "flowbite-react";
import React from "react";

const DashViews = () => {
  return (
    <div className="custom-bg md:h-dvh bg-center flex flex-col overflow-hidden mx-20">
      <div className="py-12 bg-gray-100 bg-opacity-70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Saved Songs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder cards for search results */}
            <Card>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                Song Title
              </h5>
              <p className="font-normal text-gray-700">Artist Name</p>
            </Card>
            <Card>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                Song Title
              </h5>
              <p className="font-normal text-gray-700">Artist Name</p>
            </Card>
            <Card>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                Song Title
              </h5>
              <p className="font-normal text-gray-700">Artist Name</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashViews;
