import React, { useState, useEffect } from "react";

import Navbar from "./components/navbar";
import Hero from "./components/hero";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${query}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, [query]);
  return (
    <div className="h-screen">
      {/* <Navbar /> */}
      {/* <Hero /> */}
      <div className="container mx-auto">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            src="https://source.unsplash.com/random"
            alt="random"
            className="w-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
              Photo by John Doe
            </div>
            <ul>
              <li>
                <strong>Views:</strong>
                4000
              </li>
              <li>
                <strong>Downloads:</strong>
                300
              </li>
              <li>
                <strong>Likes:</strong>
                400
              </li>
            </ul>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #tag2
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #tag3
            </span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-2 rounded">
            I'm a button
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
