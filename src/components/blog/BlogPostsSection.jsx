import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BlogCardBottomDesc from "./BlogCardBottomDesc";
import BlogCardSideDesc from "./BlogCardSideDesc";
import BlogListVertical from "./BlogListVertical";
import { fetchBlogs } from "../../redux/blogs/blogsSlice";

function BlogPostsSection() {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

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
    <>
      <div>
        <h2 className="text-black-cstm text-2xl font-semibold py-4">
          Recent blog posts
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4 mb-8">
          <div className="lg:row-span-2">
            <BlogCardBottomDesc blog={blogs[0]} />
          </div>
          <div className="hidden md:block">
            <BlogCardSideDesc blog={blogs[3]}/>
          </div>
          <div className="block md:hidden">
            <BlogCardBottomDesc blog={blogs[3]}/>
          </div>
          <div className="hidden md:block">
            <BlogCardSideDesc blog={blogs[2]}/>
          </div>
          <div className="block md:hidden">
            <BlogCardBottomDesc blog={blogs[2]}/>
          </div>
        </div>
        <div className="block lg:hidden">
          <BlogCardBottomDesc blog={blogs[1]}/>
        </div>
        <div className="hidden lg:block">
          <BlogCardSideDesc lineClampDesc={5} imageHeight={60} blog={blogs[1]}/>
        </div>
      </div>
      <div>
        <h2 className="text-black-cstm text-2xl font-semibold py-4">
          All blog posts
        </h2>
        <div className="mt-4">
          <BlogListVertical blogs={blogs} />
        </div>
      </div>
    </>
  );
}

export default BlogPostsSection;
