import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function BlogCardBottomDesc({ blog = {} }) {

  if (Object.keys(blog).length === 0) {
    return (
      <div className="text-center font-semibold">No data found</div>
    )
  }

  return (
    <div>
      <img
        src={blog.thumb}
        alt="Blog post image"
        className="w-full h-48 object-cover"
      />
      <div className="mt-6 space-y-3">
        <p className="text-purple-cstm-200 font-semibold text-sm">
          {blog.author} • {blog.time}
        </p>
        <Link to={`/blog/${blog.key}`} className="grid grid-cols-7 text-black-cstm hover:text-blue-500 hover:bg-purple-cstm-100">
          <h2 className="text-xl font-bold col-span-6 line-clamp-2">
            {blog.title}
          </h2>
          <div className="flex justify-end">
            <ArrowUpRight size={24} />
          </div>
        </Link>
        <p className="text-gray-cstm line-clamp-3">{blog.desc}</p>
        <div className="flex gap-4">
          <p className="bg-purple-cstm-100 text-purple-cstm-200 text-sm rounded-full px-3 py-1">
            {blog.tag}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogCardBottomDesc;
