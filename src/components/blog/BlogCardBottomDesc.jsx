import React from "react";
import { ArrowUpRight } from "lucide-react";

function BlogCardBottomDesc() {
  return (
    <div>
      <img
        src="https://picsum.photos/400/300"
        alt="Blog post image"
        className="w-full h-48 object-cover"
      />
      <div className="mt-6 space-y-3">
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
        <p className="text-gray-cstm line-clamp-3">
          Collaboration can make our teams stronger, and our individual designs
          better.
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

export default BlogCardBottomDesc;
