function TodoItem2() {
  let item = "Go to College";
  let date = "23/04/2024";

  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-6">{item}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
