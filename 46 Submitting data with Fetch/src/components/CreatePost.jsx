import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    //add post taken from: https://dummyjson.com/docs/posts#posts-add
    // see below comment to understand
    //here we are POSTING the value to the server and it generates the id and send the "post" object to addPost()
    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // id: Date.now(), //id will be generated by server
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      })
    })
    .then(res => res.json())
    // .then(console.log);
    .then(postObj => addPost(postObj)); //sending post object to addPost
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;

/*
    /// Perform a fetch request to the given URL with specified options
    fetch('https://dummyjson.com/posts/add', { // The URL where the request is sent, and options for the request are specified
      method: 'POST', // HTTP method for the request. 'POST' is used to send data to the server
      headers: { // Headers are additional information sent with the request
        'Content-Type': 'application/json' // This header specifies that the request body contains JSON data
      },
      body: JSON.stringify({ // The body of the request. This is the data sent to the server; body can only be passed if using POST and not GET
        title: 'I am in love with someone.', 
        userId: 5, 
        /// Other post data can be included here
      }) // JSON.stringify() converts the JavaScript object(not JSON) into a JSON string
    })
    .then(res => res.json()) // After the request completes, parse the response as JSON
    .then(console.log); // Log the JSON response to the console

    output:
    {
      "id": 252,
      "title": "I am in love with someone.",
      "userId": 5
      /// other post data 
    }

*/