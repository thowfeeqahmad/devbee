import React from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogs";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="max-w-2xl mx-auto py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
        <p className="text-gray-600 mb-6">Sorry, the blog post you are looking for does not exist.</p>
        <Link to="/blog" className="text-yellow-600 font-semibold hover:underline">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-8" />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
      <div className="text-gray-400 text-sm mb-6">{blog.date}</div>
      <div className="text-lg text-gray-700 mb-8">{blog.summary}</div>
      <div className="prose prose-lg max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: blog.fullContent.replace(/\n/g, '<br/>') }} />
      <div className="mt-8">
        <Link to="/blog" className="text-yellow-600 font-semibold hover:underline">← Back to Blogs</Link>
      </div>
    </div>
  );
};

export default BlogDetail;
