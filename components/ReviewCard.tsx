import { star } from "../src/assets/icons";

interface ReviewCardProps {
  imgURL: string;
  customerName: string;
  feedback: string;
  rating: number;
}

function ReviewCard({
  imgURL,
  customerName,
  feedback,
  rating,
}: ReviewCardProps) {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm info-text text-center">{feedback}</p>
      <div className="flex mt-3 justify-center items-center gap-2.5">
        <img
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray ">
          ({rating.toFixed(1)})
        </p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl font-bold text-center">
        {customerName}
      </h3>
    </div>
  );
}

export default ReviewCard;
