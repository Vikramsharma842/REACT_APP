function AddTodo() {
  return (
    <div>
      <div className="container">
        <div className="row kg-row">
          <div className="col-6">
            <input type="text" placeholder="Enter todo here"></input>
          </div>
          <div className="col-4">
            <input type="date"></input>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg-button">
              Success
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
