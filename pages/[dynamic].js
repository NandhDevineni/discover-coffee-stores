import { useRouter } from "next/router";
const Dynamic = () => {
  const router = useRouter();
  const query = router.query.dynamic;
  return <div>Foobar {query}</div>;
};
export default Dynamic;
