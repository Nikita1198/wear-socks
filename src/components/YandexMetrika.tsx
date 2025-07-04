import React from 'react';
import { YMInitializer } from 'react-yandex-metrika';

const YandexMetrika = () => {
  return (
    <YMInitializer 
      accounts={[103139843]}
      options={{
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      }}
      version="2"
    />
  );
};

export default YandexMetrika; 