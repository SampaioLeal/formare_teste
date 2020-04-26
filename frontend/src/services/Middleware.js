export default async function Middleware(store) {
  if (localStorage.getItem("user")) {
    await store.setUser(localStorage.getItem("user"));
  }
  return null;
}
