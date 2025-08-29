import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";
//$id coming from appwrite and this format given in docs of appwrite
function PostCard({ $id, title, featuredImage }) {
  return (
    <div className="w-full p-4 bg-gray-100 rounded-xl">
      <div className="w-full justify-center [text-align:-webkit-center] mb-4">
        <Link to={`/post/${$id}`}>
          <img
            src={appwriteService.getFileView(featuredImage)}
            alt={title}
            className="rounded-xl h-36 w-36 "
          />
        </Link>
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
}

export default PostCard;
