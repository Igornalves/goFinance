import React from 'react';
import { 
  Conteiner,
  Titule,
  Header,
  Form
} from './style';
import { Input } from '../../components/Form/input/intex';
import { Buttom } from '../../components/Form/Buttom/intex';

export function Register() {
  return (
    <Conteiner>
      <Header>
        <Titule>Cadastro</Titule>
      </Header>
      <Form>
        <Input
          placeholder='Name'
        />
        <Input
          placeholder='Preco'
        />
        <Buttom titule='Enviar'/>
      </Form>
    </Conteiner>
  );
}
