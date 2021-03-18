// next
import { useRouter } from 'next/router';

// components
import Navigation from '@/components/Navigation';

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <Navigation />
      <h1>Category: {category}</h1>
    </>
  );
}
