import { useEffect } from 'react';
import Store from '../store';

const usePage = fields => {
  useEffect(() => {
    console.log('Use page effect');
    Store.update(s => {
      s.currentPage = fields;
    });
  }, [fields]);
};

export default usePage;
