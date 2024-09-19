import { useDispatch, useSelector } from "react-redux";
import NewsList from "./NewsList";
import { lazy, Suspense, useEffect, useState } from "react";
import NewsBoxShimmer from "../Shimmer/NewsBoxShimmer";
import NewsListShimmer from "../Shimmer/NewsListShimmer";
import MockData from "../Utils/MockData.json";
import { addMockData } from "../store/appSlice";
const NewsBox = lazy(() => import("./NewsBox"));

const NewsPage = () => {
  const showNews = useSelector((state) => state.app.showNews);
  const MockData2 = useSelector((state) => state.app.MockData2);
  const dispatch = useDispatch();
  const [articles, setArticles] = useState(MockData);

  useEffect(() => {
    const getAPIData = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=d5777bb7675a4338820bd1b99566b8d2"
        );
        const data = await response.json();
        dispatch(addMockData(data.articles));
        console.log("MockData2", MockData2);

        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getAPIData();
  }, []);
  console.log("MockData1", MockData2);

  return (
    <div className="h-full w-full  md:w-9/12 flex flex-wrap justify-center p-8 md:p-4 gap-4 bg-blue-50 overflow-y-scroll">
      {MockData2.map((data, idx) =>
        !showNews ? (
          <Suspense key={idx} fallback={<NewsBoxShimmer />}>
            <NewsBox data={data} />
          </Suspense>
        ) : (
          <Suspense key={idx} fallback={<NewsListShimmer />}>
            <NewsList data={data} />
          </Suspense>
        )
      )}
    </div>
  );
};

export default NewsPage;
