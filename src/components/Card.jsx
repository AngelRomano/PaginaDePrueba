function Card(props) {
  const { body } = props;
  return (
    <div
      className="card"
      style={{
        width: '350px',
      }}
    >
      <div className="card-body">
        {body}
      </div>
    </div>
  );
}

function CardBody(props) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

export default Card;
