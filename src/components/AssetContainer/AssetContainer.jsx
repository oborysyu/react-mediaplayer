import { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import "./AssetContainer.css";

function AssetContainer(props) {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0",
  };
  const types = new Map([
    ["jpg", "img"],
    ["png", "img"],
    ["mp4", "video"],
  ]);
  const url = new URL(props.asset.url);
  const extension = url.pathname.split(".")[1];
  const element = types.get(extension);

  const [rndState, setRndState] = useState({
    ...props.asset,
  });

  useEffect(() => {
    setRndState(props.asset);
  }, [props.asset]);

  return (
    <Rnd
      style={style}
      size={{ width: rndState.width, height: rndState.height }}
      position={{ x: rndState.x, y: rndState.y }}
      onDragStop={(e, d) => {
        setRndState((prevState) => {
          return {
            ...prevState,
            x: d.x,
            y: d.y,
          };
        });
        props.updateAsset(props.asset.id, { x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setRndState((prevState) => {
          return {
            ...prevState,
            width: ref.style.width,
            height: ref.style.height,
            ...position,
          };
        });
        props.updateAsset(props.asset.id, {
          ...position,
          width: ref.style.width,
          height: ref.style.height,
        });
      }}
    >
      <div
        className="close_button"
        onClick={() => {
          props.removeAsset(props.asset.id);
        }}
      >
        ✕
      </div>
      {element === "video" ? (
        <video onClick={(e)=>e.preventDefault()} className="video_item" src={props.asset.url} controls />
      ) : (
        <img className="img_item" src={props.asset.url} />
      )}
    </Rnd>
  );
}

export default AssetContainer;
