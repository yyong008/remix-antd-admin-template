import BannerImage from "~/components/BannerImage";
import home from "../assets/home.jpg";

export default function AboutUs() {
  return (
    <div>
      <BannerImage title="About Us" src={home} style={{ height: "300px " }} />
    </div>
  );
}
