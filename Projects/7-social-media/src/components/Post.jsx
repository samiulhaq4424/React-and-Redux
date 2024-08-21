// Post is taken from bootstrap: https://getbootstrap.com/docs/5.3/components/card/

import { useContext } from "react";
import { PostList } from "../store/post-list-store";
import { AiFillDelete } from "react-icons/ai"; //from bootstrap

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card mypost-card" style={{ width: "30rem" }}> {/* width: "30rem" is set and mypost-card added to class */}
      <div className="card-body">
        <h5 className="card-title">
          {post.title}  {/* title */}
          <span className=" btn position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p> {/* body */}
        {post.tags.map((tag) => (<span key={tag} className="badge text-bg-primary myhashtag">{tag}</span>))} {/* <span>..all..</span> taken from bootstrap from "Badeges", myhashtag is used in the class by me */}
        <div className="alert alert-success myreactions" role="alert"> {/* myreactions added to class */}
          This post has been reacted by {post.reactions} people. {/* reactions */}
        </div>
      </div>
    </div>
  );
};

export default Post;

/* actual code:
  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/