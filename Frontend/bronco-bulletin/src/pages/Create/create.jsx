import "./styles/create.css";

function Create() {
  return (
    <div className="container mt-3 mb-3 p-0 rounded" id="createPostForm">
      <form className="m-4">
        <div className="form-group mb-4">
          <label htmlFor="title">Post Title</label>
          <input type="text" className="form-control" id="title" name="title" />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" name="description" maxLength={150} rows={5} />
        </div>
        <div className="form-group mb-5">
          <label htmlFor="tags">Tags</label>
          <input type="text" className="form-control" id="tags" name="tags" />
        </div>
        <div className="form-group mb-5">
          <label htmlFor="imageUpload" className="form-label">Image</label>
          <input className="form-control" type="file" id="imageUpload" accept="image/png, image/jpeg" />
        </div>
        <div className="bottom">
          <button type="submit" className="btn btn-danger btn-lg">Create Post</button>
        </div>
      </form>
    </div>
  );
}

export default Create;
