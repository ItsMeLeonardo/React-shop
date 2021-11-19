import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "@containers/Layout";

import Home from "@pages/Home";
import Login from "@pages/Login";
import PasswordRecovery from "@pages/PasswordRecovery";
import SendEmail from "@pages/SendEmail";
import NewPassword from "@pages/NewPassword";
import MyAccount from "@pages/MyAccount";
import CreateAccount from "@pages/CreateAccount";
import Checkout from "@pages/Checkout";
import Orders from "@pages/Orders";
import OrderDetail from "@pages/OrderDetail";
import NotFound from "@pages/NotFound";
import { ShoppingCartProvider } from "@context/ShoppingCartContext";
import { ProductContextProvider } from "@context/ProductContext";
import { UserContextProvider } from "@context/UserContext";
import { OrdersContextProvider } from "@context/OrdersContext";

import "@styles/global.css";

const App = () => {
  return (
    <ProductContextProvider>
      <UserContextProvider>
        <ShoppingCartProvider>
          <BrowserRouter>
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route
                  exact
                  path="/password-recovery"
                  component={PasswordRecovery}
                />
                <Route exact path="/send-email" component={SendEmail} />
                <Route exact path="/new-password" component={NewPassword} />
                <Route exact path="/account" component={MyAccount} />
                <Route exact path="/signup" component={CreateAccount} />
                <Route exact path="/checkout" component={Checkout} />
                <OrdersContextProvider>
                  <Route exact path="/orders" component={Orders} />
                  <Route
                    exact
                    path="/orders/:userId/:orderId"
                    component={OrderDetail}
                  />
                </OrdersContextProvider>
                <Route path="*" component={NotFound} />
              </Switch>
            </Layout>
          </BrowserRouter>
        </ShoppingCartProvider>
      </UserContextProvider>
    </ProductContextProvider>
  );
};

export default App;
