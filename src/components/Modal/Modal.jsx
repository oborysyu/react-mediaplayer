import "./Modal.css";

const Modal = ({ assets, active, closeModal }) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={closeModal}>
      <div
        className={active ? "modal_content active" : "modal_content"}
        onClick={(e) => e.stopPropagation()}
      >
        {assets.length ? (
          <>
            <h5 className="assets_title">List of assets:</h5>
            {assets.map((asset, idx) => (
              <div key={asset.id}>
                Asset #{idx} info: width={asset.width}; height={asset.height};
                x=
                {asset.x}; y={asset.y};
              </div>
            ))}
          </>
        ) : (
          <h5 className="assets_title">You have no assets!</h5>
        )}
      </div>
    </div>
  );
};
export default Modal;
