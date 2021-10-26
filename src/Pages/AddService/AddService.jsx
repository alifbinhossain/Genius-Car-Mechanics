import React from "react";
import "./AddService.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://immense-beach-13258.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully added a service..");
          reset();
        }
      });
  };

  return (
    <div className="add-service">
      <h1 className="text-center my-3">Add a service</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="service name" type="text" {...register("name")} />
        <input
          placeholder="service price"
          type="number"
          {...register("price")}
        />
        <input placeholder="photo url" type="text" {...register("url")} />
        <textarea
          cols="30"
          rows="5"
          placeholder=" services description"
          type="text"
          {...register("description")}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
