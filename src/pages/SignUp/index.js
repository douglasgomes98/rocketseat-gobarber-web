import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string('O nome é obrigatório')
    .min(6, 'No minímo seis caracteres')
    .required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={Logo} alt="Logo" />

      <Form schema={schema} onSubmit={handleSubmit} noValidate>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="email" type="password" placeholder="Sua senha secreta" />
        <button type="submit">Acessar</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
