// next
import { GetServerSidePropsContext } from 'next';

// absolute-url
import absoluteUrl from 'next-absolute-url';

// components
import Loutl from '@/components/Loutl';

import fetcher from 'fetcher';
interface ICategoryPage {
  loutls: Array<{ User: { image: string; name: string }; content: string; text: string; publishedAt: string }>;
}

export default function CategoryPage({ loutls }: ICategoryPage) {
  if (loutls.length < 1) {
    return <h1>No loutls!</h1>;
  }

  return (
    <>
      {loutls.map((item, index: number) => (
        <Loutl
          key={index}
          userImage={item.User.image}
          userName={item.User.name}
          content={item.content}
          text={item.text}
          publishedAt={item.publishedAt}
        />
      ))}
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { origin } = absoluteUrl(context.req, context.req.headers.host);
  const { category } = context.query;

  const data = await fetcher(`${origin}/api/loutls?category=${category}`);

  return { props: { loutls: data.loutls } };
}
