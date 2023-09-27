import Cookies from 'universal-cookie';

export default async function (context) {
  const cookies = new Cookies(context?.req?.headers?.cookie, { path: '/' });
  if (cookies) {
    if (!cookies.get('token')) {
      context.redirect('/auth');
    } else {
      context.store.commit('setToken', cookies.get('token'));
    }
  } else {
    context.store.commit('setToken', cookies.get('token'));
  }
}
