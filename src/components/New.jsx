import React from 'react';

const New = ({ newCategory }) => {
  return (
    <div>
      {newCategory.map((articles, id) => (
        <ul className='list-none p-4 m-10 overflow-y-auto' key={id}>
          <li
            className='bg-primary p-8 rounded-lg text-gray-300'
            key={articles.id}
          >
            <h1> {articles.author}</h1>
            <h2>{articles.title}</h2>
            <span>{articles.description}</span>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default New;
