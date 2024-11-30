import React, { useEffect } from "react";
import BlogListVertical from "./BlogListVertical";
import BlogListHorizontal from "./BlogListHorizontal";
import HeaderSection from "../newsletter/HeaderSection";
import { useLocation } from "react-router-dom";
import { fetchBlogs, getBlogById } from "../../redux/blogs/blogsSlice";
import { useDispatch, useSelector } from "react-redux";

function BlogDetail() {
  const location = useLocation();
  const key = location.pathname.replace("/blog/", "");

  const dispatch = useDispatch();
  const { blogs, currentBlog, loading, error } = useSelector(
    (state) => state.blogs
  );

  useEffect(() => {
    dispatch(getBlogById(key));
    console.log("Current blog", currentBlog);
  }, []);

  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(fetchBlogs());
    }
  }, [blogs]);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-5 h-5 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mr-2"></div>
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="hidden lg:block">
        <BlogListVertical forDetail={true} blogs={blogs.slice(0, 5)} />
      </div>
      <div className="lg:col-span-3 space-y-4">
        <p className="text-purple-cstm-200 text-sm font-semibold">
          {currentBlog.date}
        </p>
        <h1 className="text-black-cstm text-4xl font-bold">
          {currentBlog.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: currentBlog.content }}></div>
        <div>
          <HeaderSection />
        </div>
      </div>
      <div className="block lg:hidden mt-10">
        <BlogListHorizontal blogs={blogs.slice(0, 5)}/>
      </div>
    </div>
  );
}

export default BlogDetail;
