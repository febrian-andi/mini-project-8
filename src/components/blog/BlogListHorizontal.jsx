import React from "react";
import BlogCardBottomDesc from "./BlogCardBottomDesc";

function BlogListHorizontal() {
    return (
        <div className="w-full flex gap-5 overflow-x-scroll">
            <BlogCardBottomDesc />
            <BlogCardBottomDesc />
            <BlogCardBottomDesc />
            <BlogCardBottomDesc />
            <BlogCardBottomDesc />
            <BlogCardBottomDesc />
        </div>
    )
}

export default BlogListHorizontal;