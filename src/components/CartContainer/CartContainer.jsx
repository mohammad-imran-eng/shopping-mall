import About from "../About/About";
import Cart from "../Cart/Cart";
import PropTypes from 'prop-types';

const CartContainer = ({handleIsActive,isActive,selectedProducts,handleDeleteProduct}) => {

    return (
        <div>
            <h1 className="text-3xl">Cart Container</h1>
            <div className="flex justify-around mt-5 cursor-pointer">
                <div onClick={()=>handleIsActive('cart')} className={`${isActive.cart?"bg-green-500 text-white":""} py-2 px-3`}>Cart</div>
                <div onClick={()=>handleIsActive('about')} className={`${isActive.cart?"":"bg-green-500 text-white "} py-2 px-3`}>About</div>
            </div>
            {
                isActive.cart? <Cart  selectedProducts={selectedProducts} handleDeleteProduct={handleDeleteProduct}/>: <About />
            }
        </div>
    );
};

CartContainer.propTypes = {
    isActive: PropTypes.object.isRequired,
    handleIsActive: PropTypes.func.isRequired,
    selectedProducts: PropTypes.array.isRequired,
    handleDeleteProduct:PropTypes.func.isRequired
  };

export default CartContainer;