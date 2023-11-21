import BannerImage from "~/components/BannerImage";
import home from "../assets/home.jpg";

export default function JoinUs() {
  return (
    <div>
      <BannerImage title="Join Us" src={home} style={{ height: "300px " }} />
    </div>
  );
}
