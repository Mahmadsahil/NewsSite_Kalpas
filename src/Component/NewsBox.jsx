import { IoMdClose } from "react-icons/io";
import { addNewsData, showNewsData } from "../store/appSlice";
import { useDispatch } from "react-redux";

const NewsBox = ({ data }) => {
  const { title, publishedAt, urlToImage } = data;
  const dispatch = useDispatch();

  const handleNewsData = (data) => {
    dispatch(showNewsData(data));
    dispatch(addNewsData(data));
    console.log(data);
  };
  return (
    <>
      <div
        onClick={()=>handleNewsData(data)}
        className="w-full md:w-60 bg-white p-4 flex flex-col items-center gap-2 rounded relative cursor-pointer"
      >
        <IoMdClose className="text-xl text-red-600 absolute top-0 right-0 m-2 cursor-pointer" />
        <h1 className="text-sm font-semibold">{title}</h1>
        <p className="">{publishedAt}</p>
        <img className="w-full" src={urlToImage} alt=""></img>
      </div>
    </>
  );
};

export default NewsBox;
