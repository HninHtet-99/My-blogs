import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetail = () => {
  let params = useParams();
  let url = `http://localhost:3001/blogs/${params.id}`;
  let { data: blog, loading, error } = useFetch(url);
  return (
    <div>
      {error && <div>{error}</div>}
      {loading && <div>loading...</div>}
      {blog && (
        <div>
          <h3>{blog.title}</h3>
          <p>posted by - {blog.author}</p>
          <p>{blog.description}</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
