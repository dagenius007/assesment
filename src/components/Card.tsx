import { HiStar , HiOutlineHeart } from "react-icons/hi";

const Card = ({ hotel  }: any) => {
  const { img, name, location, amount, rating } = hotel;
  return (
    <div className="block cursor-pointer card">
      <div className="h-50 relative">
        <div className="heart w-9 h-9 rounded-full absolute bg-white flex items-center justify-center top-3 right-3">
          <HiOutlineHeart size={16}/>
        </div>
        <img src={img} className="h-full object-cover w-full rounded-t-3xl" />
      </div>

      <div className="flex items-start flex-col flex-nowrap justify-between h-[180px] p-5 border  rounded-b-3xl border-t-0">
        <div>
          <p className="text-lg black text-left font-medium">{name}</p>
          <p className="text-light-grey text-sm text-left">{location}</p>
        </div>
        <div className="flex justify-between text-sm w-full">
          <p>
            <span className="font-semibold">${amount}</span>
            <span className="text-light-grey"> / night</span>
          </p>
          <div className="flex gap-2 items-center">
            <HiStar className="" size={23}/>
            <p className="text-sm">{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
