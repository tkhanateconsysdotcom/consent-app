import React from "react";
import { View, Image } from "react-native";

import { ImagesAssets } from "constant";

import styles from "./StickersImage.styles";

interface Prop {
  sticker: "romanticDinner" | "treeHeart" | "earth";
}

const StickersImage = ({ sticker }: Prop) => {
  let source = ImagesAssets.stickers.earth;

  if (sticker === "romanticDinner") {
    source = ImagesAssets.stickers.romanticDinner;
  } else if (sticker === "treeHeart") {
    source = ImagesAssets.stickers.treeHeart;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={source} />
    </View>
  );
};

export default StickersImage;
