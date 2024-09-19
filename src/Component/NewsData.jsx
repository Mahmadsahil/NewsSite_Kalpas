import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { closeNewsData, showNewsData } from "../store/appSlice";

const NewsData = () => {
  const dispatch = useDispatch();
  const NewsData = useSelector((state) => state.app.NewsData);
  const { author, title, content, description, publishedAt, urlToImage, url } =
    NewsData;

  const handleCloseNewsData = () => {
    dispatch(closeNewsData());
  };

  return (
    <div className="w-full h-full flex justify-center absolute z-30 bg-transparent">
      <div className="md:w-8/12 md:h-8/12 flex flex-col gap-6 rounded-xl bg-white shadow-xl p-4 m-4 relative">
        <IoMdClose
          onClick={handleCloseNewsData}
          className="text-xl text-red-600 absolute top-0 right-0 my-2 mx-4 cursor-pointer"
        />
        <div>
          <div>
            <img className="h-24 my-4 mx-auto rounded" src={urlToImage} alt="" />
          </div>

          <h1 className="text-base font-semibold">Title : </h1>
          <h1>{title}</h1>
        </div>
        <div>
          <h1 className="text-base font-semibold">Date and Time : </h1>

          <p>{publishedAt}</p>
        </div>
        <div>
          <h1 className="text-base font-semibold">Author : </h1>
          <p>{author}</p>
        </div>
        <div>
          <h1 className="text-base font-semibold">News : </h1>
          <p>{content}</p>
        </div>
        <div>
          <h1 className="text-base font-semibold"></h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsData;
