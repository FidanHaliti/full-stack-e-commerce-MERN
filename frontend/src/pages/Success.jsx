import { Button, Result } from "antd";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";

const Success = () => {
  const { setCartItems } = useContext(CartContext);
  useEffect(() => {
    setCartItems([]);
  }, [setCartItems]);

  return (
    <div className="succes-pages">
      <div className="container">
        <Result
          status="success"
          title="Successfully Purchased Cloud Server ECS!"
          subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          extra={[
            <Link to={"/"} key="home">
              <Button type="primary">Go home</Button>
            </Link>,
            <a href="/admin/orders" key={"order"}> 
             <Button key="buy">My orders</Button>
             </a>
     
          ]}
        />
      </div>
    </div>
  );
};

export default Success;
