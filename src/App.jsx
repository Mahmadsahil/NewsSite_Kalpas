import { useSelector } from "react-redux";
import FeedBack from "./Component/FeedBack";
import NewsPage from "./Component/NewsPage";
import SideNavBar from "./Component/SideNavBar";
import NewsData from "./Component/NewsData";

function App() {
  const showForm = useSelector((state) => state.app.showForm);
  const showNewsData = useSelector((state) => state.app.showNewsData);
  return (
    <div className="w-full h-screen flex flex-col md:flex-row relative">
      {showNewsData && <NewsData />}
      <SideNavBar />
      <NewsPage />
      {showForm && <FeedBack />}
    </div>
  )
}

export default App;
