import React, { useState , useEffect} from 'react';
import { useSelector } from 'react-redux';

const SuperCoin =() =>{
    const [SuperCoins, setSuperCoins] = useState(0);
    const cartitem = useSelector(state => state.cart.cartItems);
    const totalamount = cartitem.reduce((total, item) => total + item.quantity * item.price, 0);

    useEffect(() => {
    if (totalamount >= 100 && totalamount < 200) {
        setSuperCoins(10);
    } else if (totalamount >= 200 && totalamount < 300) {
        setSuperCoins(20);
    } else if (totalamount >= 300) {
    setSuperCoins(30);
    } else {
    setSuperCoins(0);
    }
    }, [totalamount]);
    return(
        <div className="super-coins" style={{textAlign:'center'}}>
        <h2 className="super-coins-title">Super Coins</h2>
        <p className="super-coins-info">You will earn {SuperCoins} super coins with this purchase.</p>
        </div>
    )
}
export default SuperCoin;