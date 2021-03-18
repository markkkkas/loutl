import { useRouter } from 'next/dist/client/router';

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  return <h1>Category: {category}</h1>;
}
