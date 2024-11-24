import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import PropTypes from "prop-types";

const AllProducts = ({handleSeletedProducts,}) => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div>
            <h1 className="text-3xl">AllProducts</h1>
            {
                products.map((product,idx)=> <SingleProduct key={idx} product={product} handleSeletedProducts={handleSeletedProducts}/>)
            }
        </div>
    );
};

AllProducts.propTypes = {
    handleSeletedProducts: PropTypes.func.isRequired,
  };

export default AllProducts;