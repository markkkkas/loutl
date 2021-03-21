// react
import { useEffect, useState } from 'react';

// chakra
import { GridItem } from '@chakra-ui/layout';
import UserBadge from './UserBadge';

export default function TopFiveUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getTopFiveUsers() {
      fetch('/api/users')
        .then((response) => response.json())
        .then((data) => setUsers(data.users));
    }

    getTopFiveUsers();
  }, []);

  return (
    <>
      {users.map((item, index) => (
        <GridItem key={index}>
          <UserBadge avatar={item.image} name={item.name} loutls={1} />
        </GridItem>
      ))}
    </>
  );
}
