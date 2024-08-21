import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store"; //as function nams is same as PostList, so using PostList as PostListData
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  //see below comment for 2 arguemets of useEffect
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
      console.log("Cleaning up UseEffect.");
      controller.abort(); //S4) You can call the abort() method on the AbortController instance to cancel the operation.
    };
  }, []); // for useEffect, passing [] i.e no dependecies for 2nd arguement 

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;

/*
    - The useEffect hook in React accepts two arguments:
        1) Effect Function: A function that contains the side effect logic. This function runs after the component renders. It can optionally return a cleanup function to handle any necessary cleanup.
        2) Dependency Array: An optional array that lists dependencies. The effect runs whenever any of the dependencies change. If this array is empty, the effect runs only once after the initial render. If omitted, the effect runs after every render.


        1)Effect Function
            --> This function is where you write your side effect code. It is executed after the component renders. If a cleanup function is needed, it can be returned from this function.

                                                      useEffect(() => {
                                                        ///Side effect code here
                                                        
                                                        return () => {
                                                          /// Cleanup code here (optional)
                                                        };
                                                      });
          
        2) Dependency Array
            --> The dependency array determines when the effect should run. It can be:

                i) Empty Array []: Runs the effect only once after the initial render. It's equivalent to componentDidMount in class components.
                                                        useEffect(() => {
                                                          /// Runs once after the initial render
                                                        }, []);
                              
                ii) Dependencies [dep1, dep2, ...]: Runs the effect whenever any of the dependencies change. The effect will re-run if any value in the array changes between renders.
                                                        useEffect(() => {
                                                          /// Runs when `dep1` or `dep2` changes
                                                        }, [dep1, dep2]);

                iii) Omitting the Array: Runs the effect after every render. This can be useful for effects that should run every time the component updates.

                                                        useEffect(() => {
                                                          /// Runs after every render
                                                        });
*/