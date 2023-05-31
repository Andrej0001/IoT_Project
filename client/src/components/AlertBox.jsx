import React from "react";
import { useState, useEffect } from "react";
import Message from "./Message";
import axios from "axios";
import { useCookies } from "react-cookie";
import { SERVER_URL } from "../constant/constant";

const AlertBox = (props) => {
  const { title, id } = props;
  const [data, setData] = useState([]);
  const [cookies] = useCookies(["token"]);

  const token = cookies?.token;

  useEffect(() => {
    const fetchData = async () => {
      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.get(
        `${SERVER_URL}/station/alert-get/${id}`,
        { headers }
      );
      setData(response.data.reverse());
      //console.log(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="Alerts">
      <h2 style={{ marginLeft: "10px" }}>
        <b>{title}</b>
      </h2>
      {data.map((data) => (
        <Message
          key={data._id}
          id={data._id}
          message={data.message}
          time={data.time}
          typ={data.type[0]}
        />
      ))}
    </div>
  );
};

export default AlertBox;
