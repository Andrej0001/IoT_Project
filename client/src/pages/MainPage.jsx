import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import useGetAxios from "../hooks/useGetAxios";
import { SERVER_URL } from "../constant/constant";
import Dashboard from "./../components/Dashboard";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import MainLayout from "../layouts/MainLayout";

const MainPage = (props) => {
  const [user] = useState({
    username: localStorage.getItem("name"),
    surname: localStorage.getItem("surname"),
  });
  // const [cookies] = useCookies(["token"]);

  const { data, loading, error } = useGetAxios(
    `${SERVER_URL}/station/stationList`
  );
  useEffect(() => {
    if (error?.response.data?.message) {
      toast.error(error?.response.data?.message);
    }
  }, [error?.response.data?.message]);

  if (!data) {
    return (
      <MainLayout>
        <CircularProgress></CircularProgress>
      </MainLayout>
    );
  }
  //console.log(data);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Navbar username={user.username} surname={user.surname}></Navbar>
      <div className="backgroud-main">
        {data &&
          data.map((stations) => {
            return (
              <Dashboard
                message={props.message}
                key={stations.idStation}
                title={stations.stationName}
                idDashboard={stations.idStation}
              />
            );
          })}
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default MainPage;
