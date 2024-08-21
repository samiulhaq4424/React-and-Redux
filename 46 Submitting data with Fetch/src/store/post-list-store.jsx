import { createContext, useCallback, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  // addInitialPosts: () => {}, //not needed as we are taking the responsibility to post from server only once
  fetching: false,
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  console.log(currPostList); //for debugging
  console.log(action); //for debugging

  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []); //initially empty array [] is passed as we will fetched data from server

  const addPost = (post) => {
    console.log(`added post from server: ${{post}}`); //for debugging
    dispatchPostList({
      type: "ADD_POST",
      payload: post, //as post object is created by server only, so ap post object seedha lelijye
    });
  };

  const addInitialPosts = (posts) => { //to add 30 posts from https://dummyjson.com/docs/posts#posts-all
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  /* The "useCallback" hook is used to prevent the function from being recreated on every render, which is useful if deletePost is passed down as a prop to child components or used in dependency arrays of other hooks */
  const deletePost = useCallback((postId) => { //ensures that deletePost does not get recreated on every render
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  },[dispatchPostList]); //dependency me dispatchPostList; The dependencies array for useCallback is [dispatchPostList], meaning deletePost will only be recreated if dispatchPostList changes. This ensures that deletePost remains stable across renders unless dispatchPostList itself changes.


  const [fetching, setFetching] = useState(false);
  //useEffect is used here so we can also add our own post, earlier it was in PostList() as earlier when we go from Create Post to Home, our own added post vanished
  useEffect(() => { //Effect function passed as 1st arguement to useEffect()
    setFetching(true); //for fetch started
    const controller = new AbortController(); //S1) a JavaScript interface used to abort ongoing operations, such as network requests. It is commonly used with the Fetch API and other asynchronous operations that support cancellation.
    const signal = controller.signal; //S2) The signal property of the AbortController instance is used to communicate with the operation you want to control.

    fetch("https://dummyjson.com/posts", { signal }) //S3) When making a fetch request, you pass the signal to the request options as 2nd arguement.
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false); //after all fetch returned, then set to false
      });

    return () => { //clean up function
      // console.log("Cleaning up UseEffect.");
      controller.abort(); //S4) You can call the abort() method on the AbortController instance to cancel the operation.
    };
  }, []); // for useEffect, passing [] i.e no dependecies for 2nd arguement

  return (
    <PostList.Provider value={{ postList, fetching, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;

