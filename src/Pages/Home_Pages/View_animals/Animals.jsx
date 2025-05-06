import React from 'react'
import './Animals.css'
import { menu_deatils } from '../../../Array_Data/Categ'
import { Link } from 'react-router-dom'

const Animals = ({ name, id, img, select_categories }) => {
  
  return (
    <div>
      <h1>Fresh recommendations</h1>
      <div className='Grid_layout'>

        {menu_deatils.map((values, index) => {
          if (select_categories === 'All' || select_categories === values.title) {
            return (
                <div className='grid_column' key={id} >
                  <div className='Border_lignt'>
                  <div className='column' >
                    <div className='wrapper'>
                      <div className='card' 
                        style={{
                          backgroundImage: `url(${values.img})`,
                          backgroundSize: "cover",
                        }}
                      >
                        <div className='info'>
                          <h1>{values.title}</h1>
                          <p>{values.id} </p>
                          <button ><Link to={`/View_products/${values.id}`}>view</Link></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Animals
