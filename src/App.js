/***************************************************************************************
 *    Title: ReduCart App source code
 *    Author: Huzefa Ehsan
 *    Date: 27-10-2022
 *    Code version: 0.1
 *    Availability: https://github.com/HuzefaEhsan
 *
 ***************************************************************************************/

import { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    // const sendCartData = async () => {
    // dispatch(
    //   uiActions.showNotification({
    //     status: 'pending',
    //     title: 'sending...',
    //     message: 'Sending cart data!',
    //   })
    // );
    // const response = await fetch(
    //   'https://redux-http-97de6-default-rtdb.firebaseio.com/cart.json',
    //   {
    //     method: 'PUT',
    //     body: JSON.stringify(cart),
    //   }
    // );
    // if (!response.ok) throw new Error('Sending cart data failed!');
    // dispatch(
    //   uiActions.showNotification({
    //     status: 'success',
    //     title: 'Success!',
    //     message: 'Send cart data successfully!',
    //   })
    // );
    // };

    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) dispatch(sendCartData(cart));

    // sendCartData().catch((error) => {
    //   // dispatch(
    //   //   uiActions.showNotification({
    //   //     status: 'error',
    //   //     title: 'Error',
    //   //     message: 'Sending cart data failed!',
    //   //   })
    //   // );
    // });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
