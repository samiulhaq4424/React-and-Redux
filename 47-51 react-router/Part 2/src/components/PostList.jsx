import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom"; //importing useLoaderData from react-router

const PostList = () => {
  const postList = useLoaderData();

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

/*                  Data fetching using loader
    1. Loader method can be used to load data before a particular route is executed.
    2. The loader method must "return" the data that is loaded or promise. 
    3. Data is available in component and all the child components.
    4. "useLoaderData()" hook can be used to get the fetched data.
*/
export const postLoader = () => {
  return fetch("https://dummyjson.com/posts") //to get 30 posts from server
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
