import React, { useState } from 'react';
import axios from 'axios';

const URL = 'http://hn.algolia.com/api/v1/search';

export default () => {
  const [stories, setStories] = useState<any[]>([]);
  const [error, setError] = useState<any>();

  const handleFetch = () => {
    axios
      .get(`${URL}?query=React`)
      .then((response) => response.data.hits)
      .then((hits: any) => setStories(hits))
      .catch((e: any) => setError(e));
  };

  return (
    <div>
      <button type='button' onClick={handleFetch}>
        Fetch Stories
      </button>

      {error && <span>Something went wrong ...</span>}

      <ul>
        {stories.map((story) => (
          <li key={story.objectID}>
            <a href={story.url}>{story.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
