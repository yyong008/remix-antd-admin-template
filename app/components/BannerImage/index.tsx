export default function BannerImage({
  src,
  style,
  title,
}: {
  src: string;
  style?: React.CSSProperties;
  title: string;
}) {
  return (
    <div className="relative w-[100%] overflow-hidden" style={style}>
      <img className="absolute top-0 w-[100%] h-[100%]" src={src} alt="" />
      <div className="relative flex justify-center items-center z-10 text-white" style={style}>
        <span>{title}</span>
      </div>
    </div>
  );
}
