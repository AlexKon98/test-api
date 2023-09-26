export default async function(context) {
  if (!context.store.token) {
    context.redirect('/auth')
  }
}
