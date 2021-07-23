import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const EditBranch = () => {
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
  const updateHandler = (e) => {
    e.preventDefault();
    console.log(userdata);

    axios
      .put(
        "https://staging.bfitds.com/api/Branch/${branchId}",
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

          console.log(res.userdata);
          console.log(res.data.token);
        } else {
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={updateHandler} className="border border-primary">
        <h5>Edit User</h5>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">branchId</label>
          <div class="col-sm-10">
            <input
              type="branchId"
              value={userdata.branchId}
              onChange={(e) =>
                setUserData({ ...userdata, branchId: e.target.value })
              }
            />
            <br />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">name</label>
          <div class="col-sm-10">
            <input
              type="name"
              value={userdata.name}
              onChange={(e) =>
                setUserData({ ...userdata, name: e.target.value })
              }
            />
            <br />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">address</label>
          <div class="col-sm-10">
            <input
              type="address"
              value={userdata.address}
              onChange={(e) =>
                setUserData({ ...userdata, address: e.target.value })
              }
            />{" "}
            <br />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">City</label>
          <div class="col-sm-10">
            <input
              type="text"
              value={userdata.city}
              onChange={(e) =>
                setUserData({ ...userdata, city: e.target.value })
              }
            />
            <br />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">phone</label>
          <div class="col-sm-10">
            <input
              type="text"
              value={userdata.phone}
              onChange={(e) =>
                setUserData({ ...userdata, phone: e.target.value })
              }
            />
            <br />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">province</label>
          <div class="col-sm-10">
            <input
              type="province"
              value={userdata.province}
              onChange={(e) =>
                setUserData({ ...userdata, province: e.target.value })
              }
            />
            <br />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">timeZone</label>
          <div class="col-sm-10">
            <select
              class="custom-select mr-sm-2"
              id="inlineFormCustomSelect"
              value={userdata.timeZone}
              onChange={(e) =>
                setUserData({ ...userdata, timeZone: e.target.value })
              }
              className="custom-select"
            >
              <option selected>Africa/Abidjan</option>
              <option value="Australia/Hobart">Australia/Hobart</option>
              <option value="Africa/Addis-Ababa">Africa/Addis-Ababa</option>
              <option value="Africa/Algier">Africa/Algier</option>
              <option value="Africa/Asmara">Africa/Asmara</option>
            </select>
          </div>
        </div>
        <div class="form-group row ">
          <div class="col-sm-10 ">
            <button
              type="submit"
              class="btn btn-primary"
              onClick={updateHandler}
            >
              Edit
            </button>

            <Link to="/" className="btn btn-danger ml-2 ">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export const getToken = () => {
  return localStorage.getItem("token") || null;
};
