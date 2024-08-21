import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (<span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        {/* reactions not used as if you see the structure of object it has likes and dislikes in reactions; see: below structure
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {post.reactions} people.
        </div> 
        */}
      </div>
    </div>
  );
};

export default Post;


/*
    {
      "posts": [
        {
          "id": 1,
          "title": "His mother had always taught him",
          "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
          "tags": [
            "history",
            "american",
            "crime"
          ],
          "reactions": {
            "likes": 192,
            "dislikes": 25
          },
          "views": 305,
          "userId": 121
        },
        {...},
        {...}
        /// 30 items
      ],
      "total": 251,
      "skip": 0,
      "limit": 30
    }
*/