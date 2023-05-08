import { FaAirbnb } from "react-icons/fa";
import { motion } from "framer-motion";
import classNames from "classnames";

const Icons = [
  { icon: <FaAirbnb size={"20px"} />, text: "All Homes" },
  {
    icon: (
      <img
        src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
        width={20}
      />
    ),
    text: "Amazing View",
  },
  {
    icon: (
      <img
        src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"
        width={20}
      />
    ),
    text: "Tiny Homes",
  },

  {
    icon: (
      <img
        src="https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg"
        width={20}
      />
    ),
    text: "Chef's Kitchen",
  },
  {
    icon: (
      <img
        src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg"
        width={20}
      />
    ),
    text: "Surfing",
  },
  {
    icon: (
      <img
        src="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg"
        width={20}
      />
    ),
    text: "Mansion",
  },
  {
    icon: (
      <img
        src="https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg"
        width={20}
      />
    ),
    text: "Luxe",
  },
  {
    icon: (
      <img
        src="https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg"
        width={20}
      />
    ),
    text: "Tree House",
  },
  {
    icon: (
      <img
        src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg"
        width={20}
      />
    ),
    text: "Camping",
  },
  {
    icon: (
      <img
        src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
        width={20}
      />
    ),
    text: "Beachfront",
  },
  {
    icon: (
      <img
        src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
        width={20}
      />
    ),
    text: "Farms",
  },
  {
    icon: (
      <img
        src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
        width={20}
      />
    ),
    text: "Farms",
  },
  {
    icon: (
      <img
        src="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg"
        width={20}
      />
    ),
    text: "Castles",
  },
  {
    icon: (
      <img
        src="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg"
        width={20}
      />
    ),
    text: "Castles",
  },
  {
    icon: (
      <img
        src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"
        width={20}
      />
    ),
    text: "Islands",
  },
  {
    icon: (
      <img
        src="https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg"
        width={20}
      />
    ),
    text: "Vineyards",
  },
  {
    icon: (
      <img
        src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
        width={20}
      />
    ),
    text: "Amazing pools",
  },
  {
    icon: (
      <img
        src="https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg"
        width={20}
      />
    ),
    text: "Skiing",
  },
  {
    icon: (
      <img
        src="https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg"
        width={20}
      />
    ),
    text: "Desert",
  },
];
const SideNav = () => {
  return (
    <motion.div
      whileHover={{
        width: "228px",
        transition: { duration: 0.2 },
      }}
      className="sidenav w-22 h-100 border border-solid transition linear duration-300 border-t-0"
    >
      {Icons.map((icon, i) => (
        <div
          key={i}
          className={classNames(
            "flex items-center py-2 px-8 w-full h-12 hover:bg-[#f3f3f2] cursor-pointer mb-2",
            { "mt-4 firstnav": i === 0 }
          )}
        >
          {icon.icon}
          <p className="whitespace-nowrap hidden font-medium text-sm ml-2">{icon.text}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default SideNav;
