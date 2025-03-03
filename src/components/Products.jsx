import React from 'react'
import Product from './product'

function Products() {

    var products =[
        {title:"Arqites" ,description:"Jai Ram shree ram jai jai jai Ram  sita Ram jai ram jai jai Ram", live :true , case:false},
        {title:"TTR" ,description:"Jai Ram shree ram jai jai jai Ram  sita Ram jai ram jai jai Ram", live :true , case:false},
        {title:"YIR 200" ,description:"Jai Ram shree ram jai jai jai Ram  sita Ram jai ram jai jai Ram", live :true , case:true},
        {title:"Yahoo" ,description:"Jai Ram shree ram jai jai jai Ram  sita Ram jai ram jai jai Ram", live :true , case:true},
    ]
  return (
    <div className='mt-32'>

        {products.map((val,index)=> (<Product val={val} />))}
    
        
    </div>
  )
}

export default Products