import { useState } from "react";
import { hotels } from "../hotels";
import Card from "./Card";
import HotelDetail from "./HotelDetails";
const Cards = () => {
  const [hotel, setHotel] = useState<any>(null);
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="w-full">
      <HotelDetail
        hotel={hotel}
        isOpen={isOpen}
        onClose={() => {
          setOpen((open) => !open);
        }}
      />
      <div className="grid grid-cols-cards bg-white gap-6 p-8 flex-unique">
        {hotels.map((hotel, index) => {
          return (
            <div
              onClick={() => {
                setOpen((open) => !open);
                setHotel({ ...hotel });
              }}
            >
              <Card hotel={hotel} key={index} />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
