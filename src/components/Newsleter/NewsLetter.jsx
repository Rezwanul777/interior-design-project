const NewsLetter = () => {
  return (
    <div className="py-14">
      <div className="mx-auto space-y-5  max-w-[500px]">
        <h1 className="text-4xl font-bold text-center">
          Subsribe to our Newsletter
        </h1>
        <p className="text-gray-400 text-sm max-w-[350px] text-center mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed libero
          doloremque ab eum!
        </p>
        <div className="flex justify-center !mt-10">
          <input
            type="text"
            placeholder="Enter your Mail"
            className="px-6 py-4 ring-1 ring-gray-300 focus:outline-none"
          />
          <button className="bg-black text-white px-6 py-4 uppercase">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
