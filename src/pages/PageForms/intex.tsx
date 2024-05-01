import React from 'react';
import { 
  Conteiner,
  Titule,
  Header,
  Form,
  Fields,
  TransactionTypesView
} from './style';
import { Input } from '../../components/Form/input/intex';
import { Buttom } from '../../components/Form/Buttom/intex';
import { TransactionTypeButtom } from '../../components/Form/TransactionTypeButtom/intex';

export function Register() {
  return (
    <Conteiner>
      <Header>
        <Titule>Cadastro</Titule>
      </Header>

      <Form>
        <Fields>
          <Input
            placeholder='Name'
          />
          <Input
            placeholder='Preco'
          />
          <TransactionTypesView>
            <TransactionTypeButtom 
              title='Income' 
              type='up'
            />
            <TransactionTypeButtom 
              title='Outcome' 
              type='down'
            />
          </TransactionTypesView>
        </Fields>

        <Buttom titule='Enviar'/>
      </Form>
    </Conteiner>
  );
}
