import { useState } from "react";
import { Tags } from "./Components/Tags";
import axios from "axios";
import "./styles/create.css";
import { useNavigate } from "react-router-dom";
import { Header } from '../../components/Header';

function Create() {
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();
  const postData = async (data) => {
    try {
      await axios.post("https://csen-174-s24-project-bronco-bulletin.onrender.com/posts", data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      navigate("/");
    } catch(e) {
      console.log(e);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ title, description, tags: tags.map((tag) => tag.text), author: "Some author", image: imageUrl });
  }

  return (
    <div>
      <Header />
      <div className="container mt-4 mb-3 p-0 rounded" id="createPostForm">
        <form onSubmit={handleSubmit} className="m-4">
          <div className="form-group mb-4">
            <label htmlFor="title">Post Title</label>
            <input placeholder="Add a title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="title" name="title" />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="description">Description</label>
            <textarea placeholder="Add a description" value={description} onChange={(e) => {
              if (!e.target.value.endsWith('\n') && !e.target.value.startsWith(' '))
                setDescription(e.target.value);
            }} className="form-control" id="description" name="description" maxLength={151} rows={5} />
            <small id="descriptionCounter" className="form-text text-muted">{ 150 - description.length }</small>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="tags">Tags</label>
            <Tags tags={tags} setTags={setTags} setError={setError}/>
            { error ? <small className="form-text text-danger">{error}</small> : null}
          </div>
          <div className="form-group mb-5">
            <label htmlFor="imageUpload" className="form-label">Image</label>
            <input placeholder="Add an image url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="form-control" type="text" id="imageUpload" />
          </div>
          <div className="bottom">
            <button type="submit" className="btn btn-danger btn-lg">Create Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
