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
  Icon,
  Transactions,
  Title,
  LogoutButton
} from "./style";

import { HighLigthCard } from "../../components/HighLigthCard/intex";
import { HighLigthCards } from '../../components/HighLigthCard/style';
import { TransactionCard } from "../../components/TransactionCard/intex";
import { TransationsList } from "../../components/TransactionCard/style";
import {DataListProps, ItemsProps} from "../../global/others/Interface";
import { date, dateCard1, dateCard2, dateCard3 } from "../../global/others/Objects";

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

          <LogoutButton onPress={() => {}}>
            <Icon name={'power'}/>
          </LogoutButton>
          
        </UserWrapper>
      </Header>

      <HighLigthCards>
        <HighLigthCard dateCard={dateCard1}/>
        <HighLigthCard dateCard={dateCard2}/>
        <HighLigthCard dateCard={dateCard3}/>
      </HighLigthCards>

      <Transactions>
        <Title>Listagem </Title>
        <TransationsList
          data = {date}
          keyExtractor= {({ id }: DataListProps) => id}
          renderItem = {({ item }:ItemsProps) => <TransactionCard date={item}/>}
        />
      </Transactions>
    </Conteiner>
  );
}
