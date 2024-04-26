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
    </Conteiner>
  );
}
