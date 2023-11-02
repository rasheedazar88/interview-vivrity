import React, { useEffect, useState } from 'react'
import StarRatings from './StarRatings'
import Select from 'react-select'
import { useDispatch } from 'react-redux'


const Products = (props) => {
    const dispatch = useDispatch()
    const [products, setproducts] = useState(props.products)
    const categoryOptions = props.categories.map((category) => ({
        value: category.toLowerCase(), 
        label: category.charAt(0).toUpperCase() + category.slice(1) 
    }));
    
    const [value, setvalue ]  = useState(null)
    
    const handleChange = (selected) => {
        setvalue(selected);        
    };

    useEffect(() => {
        if(value !== null) {
            const filteredProducts = props.products.filter(product => product.category === value.value);
            setproducts(filteredProducts)
        }
    }, [value])
    
    useEffect(() => {   
        if(props.searchProduct !== '' || props.searchProduct !== undefined) {
            const filteredProducts = props.products.filter((product) =>
                product.title.toLowerCase().includes(props.searchProduct.toLowerCase())
            );
            setproducts(filteredProducts)            
        }      
    }, [props.searchProduct])
    

    
  return (
    <div className='product-page'>
        <div className="row">
            <Select options={categoryOptions} className='col-3' value={value} onChange={handleChange}/>
        </div>
        <ul className='products-list row gap-3'>
            {
                products.map((product, index)=>(
                    <li key={index} className='col col-xs-12 col-sm-6 col-md-4 col-lg-3 border rounded-2'>
                        <div className='row my-2 mx-3'>
                            <div className='product-thumbnail'>
                                <img className='product-thumbnail-img' src={product.thumbnail} />
                            </div>
                            <div>
                                <h5 className='product-title'>{product.title}</h5>
                                <div className='product-description'>
                                    {product.description}
                                </div>
                                <h4 className='product-price'>${product.price}</h4>
                                <StarRatings rating={product.rating}/>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Products