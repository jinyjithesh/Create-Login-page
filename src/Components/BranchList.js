import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ListGroup, Button} from "reactstrap";
export const BranchList = () => {
  const [branchdata, setBranchData] = useState([]);
  const [userdata, setUserData] = useState({
    branchId: "",
    name: "",
    address: "",
    city: "",
    phone: "",
    timeZone: "",
    accessCode: "",
  });
  const token = getToken();
  const getBranchData = async () => {
    try {
      const data = await axios.get("https://staging.bfitds.com/api/Branch");

      console.log(data.data);
      setBranchData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBranchData();
  }, []);

  const removeHandler = (id) => {
    axios
      .delete(
        "https://staging.bfitds.com/api/Branch/83",
        {
          branchId: userdata.branchId,
          name: userdata.name,
          address: userdata.address,
          city: userdata.city,
          phone: userdata.phone,
          timeZone: userdata.timeZone,
          accessCode: userdata.accessCode,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )

      .then((res) => {
        if (res.data.statusText === "OK") {
          setUserData(res.data.userdata.branchId);
          setUserData((userData) =>
            userData.filter((item, index) => index !== id)
          );

          console.log(res.userdata);
        } else {
          console.log(res.userdata);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ListGroup className="mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <td>No</td>
            <td>Name</td>
            <td>Address</td>
            <td>City</td>
            <td>Phone</td>
            <td>TimeZone</td>
          </tr>
        </thead>

        {branchdata.map((p, id) => (
          <tbody>
            <tr key={id}>
              <td>{p.branchId}</td>
              <td>{p.name}</td>
              <td> {p.address}</td>
              <td> {p.city}</td>
              <td> {p.phone}</td>
              <td>{p.timeZone}</td>
              <td>
                {" "}
                <Link className="btn btn-warning mr-1  " to={"/edit/:{id}"}>
                  edit
                </Link>
              </td>
              <td>
                {" "}
                <Button onClick={(e) => removeHandler(e, id)} color="danger">
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </ListGroup>
  );
};
export const getToken = () => {
  return localStorage.getItem("token") || null;
};

