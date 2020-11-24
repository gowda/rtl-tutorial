import React, { useState } from 'react';

import Search from './04.search';

export default () => {
  const [search, setSearch] = useState<string>('');

  return (
    <div>
      <Search value={search} onChange={(v: string) => setSearch(v)}>
        Search:
      </Search>

      <p>Searches for {search || '...'}</p>
    </div>
  );
};
