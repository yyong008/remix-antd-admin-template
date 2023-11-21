import BannerImage from "~/components/BannerImage";
import home from "../assets/home.jpg";

export default function Culture() {
  return (
    <div>
      <BannerImage title="Culture" src={home} style={{ height: "300px " }} />
    </div>
  );
}
