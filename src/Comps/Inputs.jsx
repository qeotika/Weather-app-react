import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
import { UilLocationArrow } from "@iconscout/react-unicons";
import { useState } from "react";
import { useEffect } from "react";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const GOOGLE_API_KEY = "AIzaSyBu1pKErVRhQoQ0iVNHwzvZiX7v_cNa5bw";

function Inputs({ setQuery }) {
  const [city, setCity] = useState("");

  function setCityIfExists() {
    if (city !== "") {
      setQuery({ q: city });

      console.log(city);
    }
  }
  const detectKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Key Clicked:Enter");
      if (city !== "") {
        setQuery({ q: city });
      }
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);
  const handleSelect = async (value) => {};

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <PlacesAutocomplete
          value={city}
          onChange={setCity}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input",
                })}
              />
              <div>
                {loading ? <div>...loading</div> : null}
                {suggestions.map((suggestion) => {
                  return <div>{suggestion.description}</div>;
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          onKeyPress={detectKeyDown}
          type="text"
          placeholder="Search City..."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize"
        />
        <UilSearch
          onClick={setCityIfExists}
          size={50}
          className="text-white cursor-pointer transition ease-out hover:scale-125 flex flex-row  justify-center my-6"
        />
        <div className="flex flex-row justify-center my-6 text-white font-light p-2 w-80 shadow-xl focus:outline-none">
          Select City
        </div>
      </div>
    </div>
  );
}

export default Inputs;
