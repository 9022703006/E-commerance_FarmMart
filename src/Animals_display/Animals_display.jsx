import React, { useContext } from 'react'
import context from 'react-bootstrap/esm/AccordionContext'
import { Store_context } from '../Context_Provider/Store_context'
import Animals from '../Pages/Home_Pages/View_animals/Animals';

const Animals_display = ({ Categories }) => {
  const { menu_deatils } = useContext(Store_context);
  return (
    <div className='grid_layout'>
    </div>
  );
};
export default Animals_display;