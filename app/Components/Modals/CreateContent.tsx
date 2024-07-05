"use client";
import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Button from "../Button/Button";

function CreateContent() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [completed, setCompleted] = useState(false);
    const [important, setImportant] = useState(false);

    const handleChange = (name: string) => (e: any) => {
        switch (name) {
          case "title":
            setTitle(e.target.value);
            break;
          case "description":
            setDescription(e.target.value);
            break;
          case "date":
            setDate(e.target.value);
            break;
          case "completed":
            setCompleted(e.target.checked);
            break;
          case "important":
            setImportant(e.target.checked);
            break;
          default:
            break;
        }
      };

      const handleSubmit = async (e: any) => {
        e.preventDefault();
    
        const task = {
          title,
          description,
          date,
          completed,
          important,
        };
    
        try {
          const res = await axios.post("/api/tasks", task);
    
          if (res.data.error) {
            toast.error(res.data.error);
          }

          toast.success("Task created successfully.");
        } catch (error) {
            toast.error("Something went wrong.");
            console.log(error);
        }
      };

  return (
    <div>
        <Toaster />
        <h1>Create a Task</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              name="title"
              onChange={handleChange("title")}
              placeholder="e.g, Watch a video from Fireship."
            />
          </div>
          <div className="input-control">
            <label htmlFor="description">Description</label>
            <textarea
              value={description}
              onChange={handleChange("description")}
              name="description"
              id="description"
              rows={4}
              placeholder="e.g, Watch a video about Next.js Auth"
            ></textarea>
          </div>
          <div className="input-control">
            <label htmlFor="date">Date</label>
            <input
              value={date}
              onChange={handleChange("date")}
              type="date"
              name="date"
              id="date"
            />
          </div>
          <div className="input-control toggler">
            <label htmlFor="completed">Toggle Completed</label>
            <input
              checked={completed}
              onChange={handleChange("completed")}
              type="checkbox"
              name="completed"
              id="completed"
            />
          </div>
          <div className="input-control toggler">
            <label htmlFor="important">Toggle Important</label>
            <input
              checked={important}
              onChange={handleChange("important")}
              type="checkbox"
              name="important"
              id="important"
            />
          </div>

          <div className="submit-btn flex justify-end">
            <Button
              type="submit"
              name="Create Task"
              padding={"0.8rem 2rem"}
              borderRad={"0.8rem"}
              fw={"500"}
              fs={"1.2rem"}
              background={"rgb(0, 163, 255)"}
            />
          </div>
        </form>
    </div>
  )
}

export default CreateContent;
