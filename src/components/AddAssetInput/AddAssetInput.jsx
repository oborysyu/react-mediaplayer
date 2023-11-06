import { useState } from "react";
import styles from "./AddAssetInput.module.css";

export function AddAssetInput({ addAsset }) {
  const [enteredAssetUrl, setEnteredAssetUrl] = useState("");

  function handleClick(e) {
    e.preventDefault();
    if (enteredAssetUrl.trim() !== "") {
      addAsset(enteredAssetUrl);
      setEnteredAssetUrl("");
    }
  }

  return (
    <div className={styles.addAsset}>
      Asset URL
      <form>
        <input
          required
          type="text"
          placeholder="Type url of media asset"
          pattern="(https?:\/\/.*\.(?:png|jpg|mp4))"
          onChange={(e) => setEnteredAssetUrl(e.target.value)}
          value={enteredAssetUrl}
        ></input>
        <button type="submit" onClick={handleClick}>
          Add
        </button>
      </form>
    </div>
  );
}
