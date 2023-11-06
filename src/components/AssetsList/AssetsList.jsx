import AssetContainer from "../AssetContainer/AssetContainer";

function AssetsList({ assets, removeAsset, updateAsset }) {
  return (
    <>
      {assets.map((asset, idx) => (
        <AssetContainer
          index={idx}
          asset={asset}
          key={idx}
          removeAsset={removeAsset}
          updateAsset={updateAsset}
        />
      ))}
    </>
  );
}

export default AssetsList;
