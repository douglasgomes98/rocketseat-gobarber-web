import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { signInSucess } from './actions';
import history from '~/services/history';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', { email, password });

  const { token, user } = response.data;
  // console.tron.log(response.data);
  if (!user.provider) {
    return;
  }

  yield put(signInSucess(token, user));

  history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
