import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetail = () => {
  let params = useParams();
  let url = `http://localhost:3001/blogs/${params.id}`;
  let { data: blog, loading, error } = useFetch(url);
  let navigate = useNavigate();
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        //redirect to home
        navigate("/");
      }, 2000);
    }
  }, [error, navigate]);
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
