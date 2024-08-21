import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store"; //since below function has same name as PostList, so using PostList as PostListData

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((post) => (<Post key={post.id} post={post}/>))}
    </>
  );
};

export default PostList;
