import PropTypes from 'prop-types';

const Cart = ({selectedProducts,handleDeleteProduct}) => {
    return (
        <div>
            {
                selectedProducts.map(product=>(
                    <div className='' key={product.id}>
                    <div className='flex mx-3 items-center mt-10'>
                        <img className='w-14' src={product.img} alt="" />
                        <h1 className='mx-2'>{product.name}</h1>
                        <button onClick={()=>handleDeleteProduct(product.id)} className='bg-red-600 py-2 px-3 text-white hover:bg-red-500'>Delete</button>
                    </div>
                </div>
                ))
            }
        </div>
    );
};


Cart.propTypes = {
    selectedProducts: PropTypes.array.isRequired,
    handleDeleteProduct: PropTypes.func.isRequired
  };

export default Cart;