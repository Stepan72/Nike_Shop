import { reviews } from "../constants";
import { ReviewCard } from "../components";

function CustomerReviews() {
  return (
    <section className="padding bg-pale-blue max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Here genuine stories from our satisfied customers about their exeptional
        experience with us.
      </p>
      <div className="mt-4 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((el) => {
          return (
            <ReviewCard
              key={el.customerName}
              imgURL={el.imgURL}
              customerName={el.customerName}
              feedback={el.feedback}
              rating={el.rating}
            />
          );
        })}
      </div>
    </section>
  );
}

export default CustomerReviews;
