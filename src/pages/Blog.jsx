import React from "react";
import BlogCardBottomDesc from "../components/blog/BlogCardBottomDesc";
import BlogCardSideDesc from "../components/blog/BlogCardSideDesc";
import BlogListVertical from "../components/blog/BlogListVertical";

function Blog() {
  return (
    <div className="space-y-8">
      <div className="border-b-2">
        <h1 className="text-black-cstm text-[70px] md:text-[150px] lg:text-[240px] text-center font-bold pb-4">
          THE BLOG
        </h1>
      </div>
      <div>
        <h2 className="text-black-cstm text-2xl font-semibold py-4">
          Recent blog posts
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4 mb-8">
          <div className="lg:row-span-2">
            <BlogCardBottomDesc />
          </div>
          <div className="hidden md:block">
            <BlogCardSideDesc />
          </div>
          <div className="block md:hidden">
            <BlogCardBottomDesc />
          </div>
          <div className="hidden md:block">
            <BlogCardSideDesc />
          </div>
          <div className="block md:hidden">
            <BlogCardBottomDesc />
          </div>
        </div>
        <div className="block lg:hidden">
            <BlogCardBottomDesc/>
        </div>
        <div className="hidden lg:block">
            <BlogCardSideDesc lineClampDesc={5} imageHeight={60}/>
        </div>
      </div>
      <div>
        <h2 className="text-black-cstm text-2xl font-semibold py-4">
          All blog posts
        </h2>
        <div className="mt-4">
          <BlogListVertical />
        </div>
      </div>
    </div>
  );
}

export default Blog;
