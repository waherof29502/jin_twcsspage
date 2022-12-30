import React, { useState, useEffect } from 'react';
import { Navbar, New, SearchBar, Footer } from './index';
import axios from 'axios';

const Home = () => {
  const [newCategory, setNewCategory] = useState([]);
  useEffect(() => {
    const getNewCategory = async () => {
      const newData = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=tw&apiKey=c14ac1132c5b4fabac7ee0bb1818ea79'
      );
      console.log('getNews', newData?.data.articles);
      setNewCategory(newData?.data.articles);
    };

    return () => {
      getNewCategory();
    };
  }, []);

  return (
    <div className='flex flex-1 bg-white'>
      <Navbar />
      {/* New Components */}
      <div className='h-screen flex-col flex-1 p-7'>
        <SearchBar />
        <New newCategory={newCategory} />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
