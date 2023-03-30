const Card = ({ title, image, type, date }) => {
  return (
    <li>
      <div>
        <img src={image} alt="" />
        <span>{type}</span>
      </div>
      <div>
        <span>{date}</span>
        <h3>{title}</h3>
      </div>
    </li>
  );
};

export default Card;
