import { MdOutlineStoreMallDirectory } from "react-icons/md";
import './Navbar.css'
import PropTypes from 'prop-types';

const Navbar = ({selectedProducts,prices}) => {
    
    return (
        <div>
            <div className="flex justify-around bg-gray-200 items-center p-5">
                <div>
                    <h1 className="text-5xl"><MdOutlineStoreMallDirectory /></h1>
                </div>
                <div>
                    <ul className="flex text-2xl font-bold">
                        <li>Home</li>
                        <li>Product</li>
                        <li>Cart {selectedProducts.length}</li>
                        <li>$ {prices}</li>
                    </ul>
                </div>
            </div>
            

        </div>
    );
};

Navbar.propTypes = {
    selectedProducts: PropTypes.array.isRequired
  };

export default Navbar;