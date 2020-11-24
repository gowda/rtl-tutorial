import React, { useEffect, useState } from 'react';

import Search from './07.search';

interface User {
  id: string;
  name: string;
}

const getUser = (): Promise<User> =>
  Promise.resolve({ id: '1', name: 'Robin' });

export default () => {
  const [search, setSearch] = useState<string>('');
  const [user, setUser] = useState<User>();

  useEffect(() => {
    getUser().then((u) => setUser(u));
  }, []);

  return (
    <div>
      {user ? <p>Signed in as {user.name}</p> : null}
      <Search value={search} onChange={(v: string) => setSearch(v)}>
        Search:
      </Search>

      <p>Searches for {search || '...'}</p>
    </div>
  );
};
