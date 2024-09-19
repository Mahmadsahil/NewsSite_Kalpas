const NewsBoxShimmer = () => {
  return (
    <div className="w-full md:w-60 bg-slate-200 p-4 flex flex-col justify-between items-center gap-2 rounded relative cursor-pointer animate-pulse">
      <div className="h-3 w-10/12 bg-slate-300 rounded-xl"></div>
      <div className="h-3 w-10/12 bg-slate-300 rounded-xl"></div>
      <div className="h-3 w-10/12 bg-slate-300 rounded-xl"></div>
      <div className="h-28 w-full bg-slate-300 rounded-xl"></div>
    </div>
  );
};

export default NewsBoxShimmer;
