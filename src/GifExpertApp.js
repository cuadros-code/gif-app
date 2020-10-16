import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

export const GifExpertApp = () => {
     
      const [categories, setCategories] = useState(['']);
     
     //      setCategories( c => [...c, 'Goku'] );

     return (
          <>
               <h2 id="title">GifExpertApp</h2>

               <AddCategory categories={ setCategories } />
               
               <hr />
                    
               <ol>
                    {
                         categories.map( c => {
                              return <GifGrid key={c} category={c} />
                         })
                    }
               </ol>

          </>
     )
}


