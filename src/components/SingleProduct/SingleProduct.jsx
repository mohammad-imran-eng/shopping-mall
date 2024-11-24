import './SingleProduct.css'
import PropTypes from "prop-types";

const SingleProduct = ({product,handleSeletedProducts}) => {
    const {name,img,description,category,isFeature,price} = product;
    return (
        <div className="my-10 card">
                <img className='h-[250px] w-[350px]' src={img} alt="" />
                
                <h1 className="font-bold text-2xl mb-5">{name}</h1>
                <p className="text-[20px] font-medium">{category}</p>
                <p className="w-[350px]">{description}</p>
                <p>{isFeature?"In Stock":"Stock out"}</p>
                <p>{price}</p>   
                <div className='flex justify-center'>
                <button onClick={()=>handleSeletedProducts(product)} className='inline bg-green-800 text-white font-bold py-2 px-3 rounded hover:bg-green-500'>Add Cart</button>
                </div>
        </div>
    );
};

SingleProduct.propTypes = {
    product:PropTypes.object.isRequired,
    handleSeletedProducts: PropTypes.func.isRequired
  };

export default SingleProduct;