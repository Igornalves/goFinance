import React from "react";
import { Welcome } from "../../components/welcome";
import { Conteiner } from "./style";

export function MainPage() {
  return (
    <Conteiner>
      <Welcome titule="React native Bare workflow with TypeScript" />
    </Conteiner>
  );
}
