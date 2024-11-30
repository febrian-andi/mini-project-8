import React from "react";
import BlogListVertical from "./BlogListVertical";
import BlogListHorizontal from "./BlogListHorizontal";
import HeaderSection from "../newsletter/HeaderSection";

function BlogDetail() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="hidden lg:block">
        <BlogListVertical forDetail={true} />
      </div>
      <div className="lg:col-span-3 space-y-4">
        <p className="text-purple-cstm-200 text-sm font-semibold">
          Sunday , 1 Jan 2023
        </p>
        <h1 className="text-black-cstm text-4xl font-bold">
          Grid system for better Design User Interface
        </h1>
        <img
          src="https://picsum.photos/400/300"
          alt="Blog post image"
          className="w-full h-60 object-cover"
        />
        <p>
          A grid system is a design tool used to arrange content on a webpage.
          It is a series of vertical and horizontal lines that create a matrix
          of intersecting points, which can be used to align and organize page
          elements. Grid systems are used to create a consistent look and feel
          across a website, and can help to make the layout more visually
          appealing and easier to navigate.
        </p>
        <div>
          <HeaderSection />
        </div>
      </div>
      <div className="block lg:hidden mt-10">
        <BlogListHorizontal />
      </div>
    </div>
  );
}

export default BlogDetail;
