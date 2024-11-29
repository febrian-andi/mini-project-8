import React from "react";
import { ArrowUpRight } from "lucide-react";

function BlogCardSideDesc({ lineClampDesc=3, imageHeight=52 }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <img
        src="https://picsum.photos/400/300"
        alt="Blog post image"
        className={`w-full h-${imageHeight} object-cover`}
      />
      <div className="space-y-3">
        <p className="text-purple-cstm-200 font-semibold text-sm">
          Alec Whitten • 1 Jan 2023
        </p>
        <div className="grid grid-cols-7">
          <h2 className="text-xl text-black-cstm font-bold col-span-6 line-clamp-2">
            How collaboration makes us better designers
          </h2>
          <div className="flex justify-end">
            <ArrowUpRight size={24} />
          </div>
        </div>
        <p className={`text-gray-cstm line-clamp-${lineClampDesc}`}>
          A grid system is a design tool used to arrange content on a webpage.
          It is a series of vertical and horizontal lines that create a matrix
          of intersecting points, which can be used to align and organize page
          elements. Grid systems are used to create a consistent look and feel
          across a website, and can help to make the layout more visually
          appealing and easier to navigate.
        </p>
        <div className="flex gap-4">
          <p className="bg-purple-cstm-100 text-purple-cstm-200 text-sm rounded-full px-3 py-1">
            Leadership
          </p>
          <p className="bg-orange-cstm-100 text-orange-cstm-200 text-sm rounded-full px-3 py-1">
            Management
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogCardSideDesc;
