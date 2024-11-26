import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
const getCart = async () => {
    const initialCart = {};
    const token = localStorage.getItem("token");

    if (token) {
        const decoder = jwtDecode(token);
        const userId = decoder.id;

        try {
            const response = await fetch(`http://localhost:8080/api/cart/getCart/${userId}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const cartItems = await response.json();
                console.log("Fetched cart items:", cartItems); // Log the fetched data
                cartItems.forEach((item) => {
                    initialCart[item.itemId] = {
                        id: item.id,
                        price: item.price,
                        quantity: item.quantity,
                        title: item.title,
                        cartId: item.cartId,
                    };
                });
            }
        } catch (err) {
            console.error("Error fetching cart", err);
        }
    }

    return initialCart;
};

function Cart() {
    const [cart, setCart] = useState({});

    useEffect(() => {
        const fetchCart = async () => {
            const cartData = await getCart();
            console.log("Cart data after fetch:", cartData); // Log the data before setting it
            setCart(cartData);
        };
        fetchCart();
    }, []);

    return (
      <div className="cart">
        <h1>Your Cart</h1>
        {/* Check if cart has any items */}
        {Object.entries(cart).length === 0 ? (
          <p>Your cart is empty</p> // Display message if cart is empty
        ) : (
          // Use map to display all cart items
          Object.entries(cart).map(([itemId, itemDetails]) => (
            <div key={itemId} className="cart-item">
              <h2>{itemDetails.title}</h2>
              <p>Price: ₹{itemDetails.price}</p>
              <p>Quantity: {itemDetails.quantity}</p>
              <p>Total: ₹{itemDetails.price * itemDetails.quantity}</p>
            </div>
          ))
        )}
      </div>
    );
}

export default Cart;
