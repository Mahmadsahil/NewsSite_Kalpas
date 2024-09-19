import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { closeForm } from "../store/appSlice";

const FeedBack = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeForm());
  };

  return (
    <div className="w-full md:w-8/12 h-full flex flex-col md:flex-row gap-2 left-0 rounded-r-2xl bg-slate-200 absolute p-4">
      <IoMdClose
        onClick={handleClose}
        className="text-xl text-red-600 absolute top-0 right-0 m-2"
      />

      <div className="flex flex-col items-center w-full md:w-4/12 m-2 ">
        {/* User Profile */}
        <div className="p-1 md:p-3 bg-white flex w-8/12 md:gap-0 gap-1">
          <img
            className="h-8 md:h-10 rounded-full bg-white"
            src="https://avatars.githubusercontent.com/u/117533136?v=4"
            alt=""
          />

          <div className="px-2">
            <h1 className="text-xs md:text-sm font-semibold">Md SAhil</h1>
            <p className="text-xs md:text-sm">Heres your news </p>
          </div>
        </div>

        {/* Feedback */}
        <div className="p-1 md:p-3 bg-white w-8/12 flex flex-col items-center gap-2 my-2">
          <h1 className="text-sm md:text-xl font-semibold">Have a Feedback?</h1>
          <button className=" text-xs md:text-base text-center p-1 md:p-2 bg-pink-300 rounded  cursor-pointer ">
            We're Listing!
          </button>
        </div>
      </div>

      {/*Feedback Form */}

      <div className="w-full md:w-8/12 flex flex-col gap-2 ">
        <div className="my-2">
          <h1 className="text-xl font-semibold">
            Thank you so much for taking time
          </h1>
          <p className="text-sm">Please provide the below details!</p>
        </div>

        <form className="w-full flex flex-col gap-4 m-2 md:m-0 p-2">
          <label htmlFor="name">Full Name</label>
          <input
            className="p-2 m-1 rounded-lg"
            type="text"
            name=""
            id="name"
            placeholder="Enter your full name"
          />

          <label htmlFor="address1">Address</label>
          <textarea
            className="p-2 m-1 rounded-lg"
            name=""
            id="address1"
            placeholder="Address"
          ></textarea>

          <div className="flex md:flex-row flex-col  gap-2 justify-center md:items-center">
            <label htmlFor="country">Country</label>
            <input
              className="p-2 m-1 rounded-lg md:w-10 w-full"
              type="text"
              name=""
              id="country"
            />

            <label htmlFor="state">State</label>
            <input
              className="p-2 m-1 rounded-lg md:w-10 w-full"
              type="text"
              name=""
              id="state"
            />
          </div>

          <div className="flex  md:flex-row flex-col gap-2 justify-center md:items-center">
            <label htmlFor="email">email</label>
            <input
              className="p-2 m-1 rounded-lg md:w-10 w-full"
              type="email"
              name=""
              id="email"
            />
            <label htmlFor="phone">phone</label>
            <input
              className="p-2 m-1 rounded-lg md:w-10 w-full"
              type="number"
              name=""
              id="phone"
            />{" "}
          </div>

          <div className="flex flex-col ">
            <label htmlFor="address2">Address</label>
            <textarea
              className="p-2 m-1 rounded-lg"
              name=""
              id="address2"
            ></textarea>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <button className=" py-2 px-4 bg-green-300 rounded m-2">
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedBack;
