const NewsListShimmer = () => {
  return (
    <div className="w-8/12 flex  bg-slate-200 p-4 items-center gap-2 rounded relative cursor-pointer animate-pulse">
      <div className="h-12 w-20 bg-slate-300 rounded-xl"></div>
      <div className="w-full flex flex-col gap-2">
        <div className="h-3 w-10/12 bg-slate-300 rounded-xl"></div>
        <div className="h-3 w-10/12 bg-slate-300 rounded-xl"></div>
      </div>
    </div>
  );
};

export default NewsListShimmer;
