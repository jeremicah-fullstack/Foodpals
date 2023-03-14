import CardImage from "./CardImage";
import CardInfo from "./CardInfo";

const Card = ({ p, type, withFooter = false }) => {
  return (
    <div>
      <CardImage url={p.url} />
      <CardInfo title={p.title} />
    </div>
  );
};
export default Card;
