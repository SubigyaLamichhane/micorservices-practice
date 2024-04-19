import React from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title,
    });

    setTitle("");
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button onClick={onSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
