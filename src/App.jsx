import { useState } from "react";
import "./App.css";
import { AddAssetInput } from "./components/AddAssetInput/AddAssetInput";
import AssetsList from "./components/AssetsList/AssetsList";
import Modal from "./components/Modal/Modal";

function App() {
  const [assets, setAssets] = useState([]);
  const [showModal, setShowModal] = useState(false);

  //method to add new media asset
  const addAsset = (url) => {
    setAssets([
      ...assets,
      {
        url: url,
        id: new Date().getTime(),
        x: 10,
        y: 10,
        width: "300px",
        height: "200px",
      },
    ]);
  };

  //method to remove asset
  const removeAsset = (id) => {
    setAssets((prevState) =>
      prevState.filter((asset) => {
        return asset.id !== id;
      })
    );
  };

  //method to update asset's data (position, size)
  const updateAsset = (id, data) => {
    setAssets((prevState) => {
      const newState = prevState.map((obj) => {
        if (obj.id === id) {
          return { ...obj, ...data };
        }
        return obj;
      });
      return newState;
    });
  };

  return (
    <>
      <AddAssetInput addAsset={addAsset} />
      <button onClick={() => setShowModal(true)}>Show assets info</button>
      <AssetsList
        assets={assets}
        removeAsset={removeAsset}
        updateAsset={updateAsset}
      />
      <Modal
        assets={assets}
        active={showModal}
        closeModal={() => setShowModal(false)}
      />
    </>
  );
}

export default App;
