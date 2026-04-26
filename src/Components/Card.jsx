function Card(props) {
  return (
    <div className="card shadow p-3 mb-4">
      <div className="card-body text-center">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">This is my first cared</p>
        <button className="btn btn-primary">Click</button>
      </div>
    </div>
  );
}

export default Card;