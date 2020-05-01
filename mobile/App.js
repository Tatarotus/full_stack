import "intl";
import "intl/locale-data/jsonp/pt-BR"

import React from "react";
import Routes from "./src/routes";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

export default function App() {
  let [fontsLoaded] = useFonts({
    "School Bell": require("./src/assets/fonts/Schoolbell-Regular.ttf")
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Routes />;
  }
}
