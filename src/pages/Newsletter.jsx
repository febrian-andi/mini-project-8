import React from "react";
import BlogListVertical from "../components/blog/BlogListVertical";
import HeaderSection from "../components/newsletter/HeaderSection";

function Newsletter() {
  return (
    <div>
      <HeaderSection />
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

export default Newsletter;
