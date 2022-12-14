import React from "react";

function TopButtons({ setQuery }) {
  let cities = [
    {
      id: 1,
      title: "Ashkelon",
    },
    {
      id: 2,
      title: "Ashdod",
    },
    {
      id: 3,
      title: "Tel-Aviv",
    },
    {
      id: 4,
      title: "Jerusalem",
    },
    {
      id: 5,
      title: "Haifa",
    },
  ];
  return (
    <div className="top_buttons_up">
      {/* flex items-center justify-around my-6 */}
      {cities.map((city) => (
        <button
          key={city.id}
          className="top_styled"
          // text-white text-lg font-medium shadow-xl cursor-pointer transition ease-out hover:scale-125
          onClick={() => {
            setQuery({ q: city.title });
            console.log(city.title);
          }}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
