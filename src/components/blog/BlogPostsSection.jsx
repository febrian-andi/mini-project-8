import React from "react";
import BlogListVertical from "./BlogListVertical";
import { useFetchData } from "../../hooks/useFetchData";

function BlogPostsSection() {
  const { data: blogs, error, loading } = useFetchData();

  if (loading) {
    return (
      <div className="flex justify-center h-screen">
        <div className="w-5 h-5 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mr-2"></div>
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center h-screen">Error: {error}</div>;
  }

  if (blogs.length === 0) {
    return (
      <div className="text-center font-semibold">No data found</div>
    )
  }

  return (
    <>
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
