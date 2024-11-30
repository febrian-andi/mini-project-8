import React from "react";
import BlogCardBottomDesc from "./BlogCardBottomDesc";

function BlogListVertical({ forDetail = false }) {
  return (
    <div
      className={`grid grid-cols-1 gap-8 ${
        forDetail ? "" : "md:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      <BlogCardBottomDesc />
      <BlogCardBottomDesc />
      <BlogCardBottomDesc />
      <BlogCardBottomDesc />
      <BlogCardBottomDesc />
      <BlogCardBottomDesc />
    </div>
  );
}

export default BlogListVertical;
