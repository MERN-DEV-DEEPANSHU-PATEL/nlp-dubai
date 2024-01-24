import "./Stickers.scss";

export const Stiker = ({ url, width }) => (
  <img
    style={{
      width: width
        ? width
        : url === "/stickers/IN-ASSOCIATION-WITH.png"
        ? "70rem"
        : "20rem",
    }}
    src={url}
    alt="Image not found"
  />
);

const Stickers = ({ data }) => {
  return (
    <div className="stickers">
      {data.map((url, index) => (
        <Stiker url={"/stickers/" + url} key={index} />
      ))}
    </div>
  );
};

export default Stickers;
