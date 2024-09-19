import { useSelector } from "react-redux";
import NewsList from "./NewsList";
// import NewsBox from "./NewsBox";
import { lazy, Suspense, useEffect, useState } from "react";
import NewsBoxShimmer from "../Shimmer/NewsBoxShimmer";
import NewsListShimmer from "../Shimmer/NewsListShimmer";
const NewsBox = lazy(() => import("./NewsBox"));

const NewsPage = () => {
  const showNews = useSelector((state) => state.app.showNews);
  const [articles, setArticles] = useState([]);
  console.log("articles", articles);

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
      
      {articles.map((data, idx) =>
        !showNews ? (
          <Suspense fallback={<NewsBoxShimmer />}>
            <NewsBox key={idx} data={data} />
          </Suspense>
        ) : (
          <Suspense fallback={<NewsListShimmer/>}>
            <NewsList key={idx} data={data} />
          </Suspense>
        )
      )}
    </div>
  );
};

export default NewsPage;
