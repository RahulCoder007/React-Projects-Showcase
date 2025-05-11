import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/rahulcoder007")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl [&_span]:py-6 [&_span]:my-3">
      <span> Name: {data.name}</span>
      <br />
      <span> Total Repositories: {data.public_repos}</span>
      <br />
      <span>Bio: {data.bio}</span>
      <img src={data.avatar_url} width={150} />
    </div>
  );
}

export default Github;

export const GithubInfoLoader = async () => {
  try {
    const response = await fetch("https://api.github.com/users/rahulcoder007");
    if (!response.ok) {
      throw new Error("failed to fetch");
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
