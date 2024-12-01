import React, { useEffect } from "react";
import BlogListVertical from "../components/blog/BlogListVertical";
import HeaderSection from "../components/newsletter/HeaderSection";
import { fetchBlogs } from "../redux/blogs/blogsSlice";
import { useDispatch, useSelector } from "react-redux";

function Newsletter() {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);

  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(fetchBlogs());
    }
  }, [blogs]);

  return (
    <div>
      <HeaderSection />
      <div className="mt-16">
        <h2 className="text-black-cstm text-2xl font-semibold py-4">
          All blog posts
        </h2>
        <div className="mt-4">
          <BlogListVertical blogs={blogs.slice(3,6)}/>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
