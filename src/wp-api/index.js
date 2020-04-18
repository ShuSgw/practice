import React from "react";
import axios from "axios";

const Index = (props) => {
  const getProfile = async () => {
    try {
      await axios
        .get("http://dummy.restapiexample.com/api/v1/employees")
        .then((res) => {
          return res.data.status;
        });
    } catch (error) {
      console.log("error!!");
    }
  };
  console.log(getProfile());

  return (
    <div>
      <h1>Wp Api</h1>
    </div>
  );
};

export default Index;
