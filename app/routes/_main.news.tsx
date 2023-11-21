import BannerImage from "~/components/BannerImage";
import home from "../assets/home.jpg";

export default function News() {
  return (
    <div>
      <BannerImage title="News" src={home} style={{ height: "300px " }} />
    </div>
  );
}
