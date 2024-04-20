import React from "react";
import { StatusBar } from "react-native";
import { MainPage } from "./src/pages/MainPage/intex";

export default function App() {
  return (
    <>
      <MainPage />
      <StatusBar barStyle={"default"} />
    </>
  );
}
