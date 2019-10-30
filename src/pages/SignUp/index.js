import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import Logo from '~/assets/logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions';

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
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={Logo} alt="Logo" />

      <Form schema={schema} onSubmit={handleSubmit} noValidate>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Acessar</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
