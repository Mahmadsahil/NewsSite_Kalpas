import { useSelector } from "react-redux";
import NewsList from "./NewsList";
import { lazy, Suspense, useEffect, useState } from "react";
import NewsBoxShimmer from "../Shimmer/NewsBoxShimmer";
import NewsListShimmer from "../Shimmer/NewsListShimmer";
import MockData from "../Utils/MockData.json";
const NewsBox = lazy(() => import("./NewsBox"));

const NewsPage = () => {
  const showNews = useSelector((state) => state.app.showNews);
  const [articles, setArticles] = useState(MockData);
  const numbers = [0, 1, 2, 3, 4, 5];

  useEffect(() => {
    const getAPIData = async () => {
      try {
        const response = await fetch(
          " https://newsapi.org/v2/top-headlines?country=us&apiKey=d5777bb7675a4338820bd1b99566b8d2"
        );
        const data = await response.json();

        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getAPIData();
  }, []);

  return (
    <div className="h-full w-full  md:w-9/12 flex flex-wrap justify-center p-8 md:p-4 gap-4 bg-blue-50 overflow-y-scroll">
      {articles.length === 0
        ? MockData.map((data, idx) =>
            !showNews ? (
              <Suspense key={idx} fallback={<NewsBoxShimmer />}>
                <NewsBox data={data} />
              </Suspense>
            ) : (
              <Suspense key={idx} fallback={<NewsListShimmer />}>
                <NewsList data={data} />
              </Suspense>
            )
          )
        : articles.map((data, idx) =>
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
