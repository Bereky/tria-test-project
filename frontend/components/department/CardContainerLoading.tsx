const CardContainerLoading = () => {
  return (
    <div className="w-full h-auto grid md:grid-cols-4 gap-5">
      <PlaceHolderCard />
      <PlaceHolderCard />
      <PlaceHolderCard />
      <PlaceHolderCard />
      <PlaceHolderCard />
      <PlaceHolderCard />
      <PlaceHolderCard />
      <PlaceHolderCard />
    </div>
  );
};

export const PlaceHolderCard = () => {
  return (
    <div className="col-span-1 h-40 outline outline-sky-200  rounded-sm flex flex-col items-center justify-center p-4 gap-1 shadow-lg duration-300 placeholder">
      <div className="w-full h-10 bg-sky-100"></div>
      <div className="w-full h-12 bg-sky-100"></div>
    </div>
  );
};

export default CardContainerLoading;
