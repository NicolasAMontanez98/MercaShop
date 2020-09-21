import React, { useEffect, useState } from "react";
import axios from "axios";
import Payed from "../components/Payed";
import NotPayed from "../components/NotPayed";

export default function OrdersProfileProvider() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
      axios
        .get(process.env.REACT_APP_SERVER_URL + "order/")
        .then(({ data }) => {
          setOrders(data);
          console.log(data)
        })
        .catch((err) => console.log("error: ", err));
  }, []);

  const formatCurrency = (number) => {
    let res = new Intl.NumberFormat("en-CO").format(number);
    return res;
  };

  return (
    <div>
      {orders.map((order) => {
        return <Payed order={order} key={order.invoice} />;
      })}
    </div>
  );
}
