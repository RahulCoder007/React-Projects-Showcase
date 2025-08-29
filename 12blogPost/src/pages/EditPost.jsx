import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState([]);
  const { slug } = useParams(); //user click on edit so get value from url/slug
  const navigate = useNavigate();

  useEffect(() => {
    appwriteService.getPost(slug).then((post) => {
      if (post) {
        setPost(post); //need to store in a state so that it can be retrieve and display in DOM
        console.log("post::edit-page", post);
      } else {
        navigate("/");
      }
    });
  }, [slug, navigate]);
  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
