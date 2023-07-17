import ImageCard from "../assets/katie-zaferes.png";
import Star from "../assets/star.png";

export default function Card() {
  return (
    <div className="card">
      <img src={ImageCard} className="card--image" />
      <div className="card--stats">
        <img src={Star} className="card--star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
