import React from "react";

import { 
  Conteiner,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon
} from "./style";

import { HighLigthCard } from "../../components/HighLigthCard/intex";
import { HighLigthCards } from '../../components/HighLigthCard/style';

export function MainPage() {
  return (
    <Conteiner>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{uri:'https://avatars.githubusercontent.com/u/134658180?v=4'}}/>
            <User>
                <UserGreeting> Ola, </UserGreeting>
                <UserName> Igor </UserName>
            </User>
          </UserInfo>
          <Icon name={'power'}/>
        </UserWrapper>
      </Header>

      <HighLigthCards>
        <HighLigthCard 
          type="up" 
          title="Entradas" 
          amount="R$ 17.400,00" 
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighLigthCard 
          type="down" 
          title="Saidas" 
          amount="R$ 17.400,00" 
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighLigthCard 
          type="total" 
          title="Total" 
          amount="R$ 17.400,00" 
          lastTransaction="Última entrada dia 13 de abril"
        />
      </HighLigthCards>

    </Conteiner>
  );
}
