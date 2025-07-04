import React from 'react'
import './CSS/ShopCategory.css'
import  {ShopContext} from '../Context/ShopContext'
import { useContext } from 'react'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {

   const {all_Posts} = useContext(ShopContext)
  return (
    <div className='shop-Category'>
      <img className='shopCategory-banner'src={props.banner} alt=''/>
      <div className='shopCategory-indexSort'>
        <p>
          <span>Showing 1-10</span> out of 30 products
        </p>
        <div className='shopCategory-sort'>
            Sort by <img src={dropdown_icon} alt=''/>
        </div>
      </div>
      <div className='shopCategory-Products'>
           {all_Posts.map((item,i)=>{
             if(props.category===item.category){
                 return <Item 
                 key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price}/>
             }
             else{
              return null;
             }
           })}
      </div>
      <div className='shopCategory-loadMore'> 
            Explore More
      </div>
</div>
  )
}

export default ShopCategory