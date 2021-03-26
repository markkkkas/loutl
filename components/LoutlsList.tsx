// swr
import useSWR from 'swr';

// components
import Loutl from './Loutl';

export default function LoutlsList() {
  const { data, error } = useSWR('/api/loutls');

  if (!data) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error while fetching data...</h1>;
  }

  return (
    <>
      {data.loutls.map(({ User, content, text, publishedAt }, index: number) => (
        <Loutl
          key={index}
          userImage={User.image}
          userName={User.name}
          content={content}
          text={text}
          publishedAt={publishedAt}
        />
      ))}
    </>
  );
}
