import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Welcome } from "../../components/welcome";

export function MainPage() {
  return (
    <SafeAreaView style={style.conteiner}>
      <Welcome titule="React native Bare workflow with TypeScript" />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
  },
});
