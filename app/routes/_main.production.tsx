import BannerImage from "~/components/BannerImage";
import home from "../assets/home.jpg";

export default function production() {
  return (
    <div>
      <BannerImage title="Production" src={home} style={{ height: "300px " }} />
    </div>
  );
}
