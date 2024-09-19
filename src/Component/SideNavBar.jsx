import { FaRegNewspaper } from "react-icons/fa6";
import { FaList } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addshowNewsBox, addshowNewsList, showForm } from "../store/appSlice";

const SideNavBar = () => {
  const dispatch = useDispatch();
  const showNews = useSelector((state) => state.app.showNews);

  const handleShowForm = () => {
    dispatch(showForm());
  };
  const handleShowNewsBox = () => {
    dispatch(addshowNewsBox());
  };
  const handleShowNewsList = () => {
    dispatch(addshowNewsList());
  };

  return (
    <div className="h-3/12 md:h-full md:w-3/12 bg-blue-100 flex flex-col justify-start p-4 md:pt-16 items-center gap-4 ">
      {/* User Profile */}
      <div className="p-1 md:p-3 bg-white flex w-8/12 md:gap-0 gap-1">
        <img
          className="h-8 md:h-10 rounded-full bg-white"
          src="https://avatars.githubusercontent.com/u/117533136?v=4"
          alt=""
        />

        <div className="px-2">
          <h1 className="text-xs md:text-sm font-semibold">Md Sahil</h1>
          <p className="text-xs md:text-sm">Heres your news </p>
        </div>
      </div>

      {/* View Toggle */}
      <div className="p-3 bg-white w-8/12 flex flex-col items-center">
        <h1 className="text-sm md:text-xl font-semibold md:py-2">
          View Toggle
        </h1>

        <div className="flex gap-2">
          <div
            onClick={handleShowNewsBox}
            className={`py-2 md:py-2 px-4 ${
              !showNews && "bg-green-300"
            } rounded`}
          >
            <FaRegNewspaper className="text-sm md:text-xl cursor-pointer" />
          </div>
          <div
            onClick={handleShowNewsList}
            className={`py-2 md:py-2 px-4 ${
              showNews && "bg-green-300"
            } rounded`}
          >
            <FaList className="text-sm md:text-xl  cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Feedback */}
      <div className="p-1 md:p-3 bg-white w-8/12 flex flex-col items-center gap-2">
        <h1 className="text-sm md:text-xl font-semibold">Have a Feedback?</h1>
        <button
          onClick={handleShowForm}
          className=" text-xs md:text-base text-center p-1 md:p-2 bg-green-300 rounded  cursor-pointer "
        >
          We're Listing!
        </button>
      </div>
    </div>
  );
};

export default SideNavBar;
