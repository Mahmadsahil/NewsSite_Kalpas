import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addNewsData, removeMockData, showNewsData } from "../store/appSlice";

const NewsList = ({ data }) => {
  const { title, publishedAt, urlToImage } = data;
  const dispatch = useDispatch();

  const handleNewsData = (data) => {
    dispatch(showNewsData(data));
    dispatch(addNewsData(data));
    console.log(data);
  };

  const handleCancleNews = (data) => {
    dispatch(removeMockData(data));
  };

  return (
    <>
      <div
        onClick={() => handleNewsData(data)}
        className="w-full md:w-8/12 bg-white p-4 flex justify-between items-center gap-2 rounded cursor-pointer"
      >
        <img className="h-8" src={urlToImage} alt=""></img>
        <div>
          <h1 className="text-sm font-semibold">{title}</h1>
          <p className="">{publishedAt}</p>
        </div>
        <IoMdClose
          onClick={(e) => {
            e.stopPropagation();
            handleCancleNews(data);
          }}
          className="text-2xl text-red-600 md:bg-slate-50 rounded-full cursor-pointer"
        />
      </div>
    </>
  );
};

export default NewsList;
