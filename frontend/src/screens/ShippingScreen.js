import { getUserInfo, getShipping, setShipping } from "../localStorage";
import CheckoutSteps from '../components/CheckoutSteps';

const ShippingScreen = {
  after_render: () => {
    document
      .getElementById("shipping-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        setShipping({
          address: document.getElementById('address').value,
          city: document.getElementById('city').value,
          postalcode: document.getElementById('postalcode').value,
          country: document.getElementById('country').value,
        })
        document.location.hash = '/payment';
      });
      
  },
  render: () => {
    const { name } = getUserInfo();
    if (!name) {
      document.location.hash = '/';
    }
    const {address, city, postalcode, country} = getShipping();
    return `
    ${CheckoutSteps.render({step1: true, step2: true})}
        <div class="form-container">
         <form id="shipping-form">
          <ul class="form-items">
          <li>
            <h1>Shipping</h1>
          </li>
          <li>
            <label for="address">Address</label>
            <input type="text" name="address" id="address" value="${address}"/>
          </li>
          <li>
            <label for="city">City</label>
            <input type="text" name="city" id="city" value="${city}"/>
          </li>
          <li>
            <label for="postalcode">Postal</label>
            <input type="text" name="postalcode" id="postalcode" value="${postalcode}"/>
          </li>
          <li>
            <label for="country">Country</label>
            <input type="text" name="country" id="country" value="${country}"/>
          </li>
          <li>
            <Button type="submit" class="primary">Continue</button>
          </li>
          </ul>
         </form>
        </div>
        `;
  }
};

export default ShippingScreen;
