import { Form, redirect } from "react-router-dom"; //imported from react-router

const CreatePost = () => {
  return (
    <Form method="POST" className="create-post"> {/* for form, we use <Form> from react-router and method="POST" is used */}
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          name="userId" //name attribute used as name="userId" for <Form>
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
          name="title" //name attribute used as name="title" for <Form>
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
          name="body" //name attribute used as name="body" for <Form>
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
          name="reactions" //name attribute used as name="reactions" for <Form>
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
          name="tags" //name attribute used as name="tags" for <Form>
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

/*                     Submitting data using action
    1. Action method can be used to perform an action on submission of Forms.
    2. Custom Form component need to be used along with "name" attribute for all inputs.
    3. Action function will get an data object. To generate correct request object method=“post” attribute should be used.
    4. Data.request.formData() method can be used to get form data Object.
    5. Object.fromEntries(formData) can be used to get actual input data.
    6. redirect() response can be returned for navigation after submission.
*/

export async function createPostAction(data) { //as Action function will get an "data" object
  const formData = await data.request.formData();//if await used then async function hoga, await means data.request.formData() ye pura kaam karlo then iska response dena to formData
  const postData = Object.fromEntries(formData); //to get form data Objec
  postData.tags = postData.tags.split(" "); //post ka tags ko spilt kar rahe ha as tags as a string arha ha
  // console.log(postData); //see kaisa object mil raha ha

  fetch("https://dummyjson.com/posts/add", { //to add post from server
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData), //as postData is a object
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/"); //redirect() response can be returned for navigation after submission
}

export default CreatePost;
