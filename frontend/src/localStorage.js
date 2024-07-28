export const getCartItems = () => {
    const cartItems = localStorage.getItem('cartItems')?
    JSON.parse(localStorage.getItem('cartItems')):
    [];
    return cartItems;
};

export const setCartItems = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
export const setUserInfo = ({
    _id = '',
    name = '',
    email = '',
    password = '',
    token = '',
    isAdmin = false,
}) => {
    localStorage.setItem(
        'userInfo',
        JSON.stringify({
        _id,
        name,
        email,
        password,
        token,
        isAdmin,
        })
    );
};
export const clearUser = () => {
    localStorage.removeItem('userInfo');
};
export const getUserInfo = () => {
    return localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : { name: '', email: '', password: ''};
};

export const getShipping = () => {
    const shipping = localStorage.getItem('shipping')?
    JSON.parse(localStorage.getItem('shipping')):
    {
        address: '',
        city: '',
        postalcode: '',
        country: '',
    };
    return shipping;
};
export const setShipping = ({
    address = '',
    city = '',
    postalcode = '',
    country = '',
}) => {
    localStorage.setItem(
     'shipping',
     JSON.stringify({address, city, postalcode, country})
    );
};

export const getPayment = () => {
    const shipping = localStorage.getItem('payment')?
    JSON.parse(localStorage.getItem('payment')):
    {
        paymentMethod: 'paypal',
    };
    return shipping;
};
export const setPayment = ({ paymentMethod = 'paypal', }) => { 
    localStorage.setItem('payment', JSON.stringify({ paymentMethod }));
};