const Card = ({title, img, url}) => {
  return (
    <div>
      <p>{title}</p>
      <img src={img} />
      <a href={url}></a>
    </div>
  );
};

export default Card;
