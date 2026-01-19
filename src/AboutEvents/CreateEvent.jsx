import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const CreateEvent = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [eventDate, setEventDate] = useState(null);
  const [loading, setLoading] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleCreateEvent = (e) => {
    e.preventDefault();

    if (!eventDate) {
      toast.error("Please select a date");
      return;
    }

    setLoading(true);

    const form = e.target;
    const newEvent = {
      title: form.title.value,
      description: form.description.value,
      type: form.type.value,
      thumbnail: form.thumbnail.value,
      location: form.location.value,
      date: eventDate.toISOString().split("T")[0],
      createdBy: user.email,
    };
    // console.log(newEvent)

    fetch("http://localhost:3000/socialLift", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log ('post data is here', data)
        toast.success("🎉 Event created successfully!");
        navigate("/upcoming");
      })
      .catch(() => toast.error("Failed to create event"))
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-[#a1490f]">
            Create Event
          </h2>

          <form onSubmit={handleCreateEvent} className="space-y-4">

            <input name="title" required placeholder="Title"
              className="input input-bordered w-full" />

            <textarea name="description" required
              className="textarea textarea-bordered w-full"
              placeholder="Description" />

            <select name="type" required className="select select-bordered w-full">
              <option value="">Select type</option>
              <option>Cleanup</option>
              <option>Plantation</option>
              <option>Donation</option>
              <option>Awareness</option>
            </select>

            <input name="thumbnail" type="url" required
              className="input input-bordered w-full"
              placeholder="Image URL" />

            <input name="location" required
              className="input input-bordered w-full"
              placeholder="Location" />

            <label className="flex items-center gap-2">
              <FaCalendarAlt /> Event Date
            </label>

            <DatePicker
              selected={eventDate}
              onChange={(date) => setEventDate(date)}
              minDate={today}
              className="input input-bordered w-full"
              placeholderText="Select future date"
            />

            <button
              className="btn bg-[#FCBC45] w-full"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Event"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
