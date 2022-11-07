/* 
  a new activity needs the following inputs:
  - farmer ID (website should do that using ID property)
  - streetAddress (website should do that using ID property to get farmer info, then streetAddress)
  - city (website should do that using ID property to get farmer info, then city)
  - typeOfProduce (farmer input)
  - priority (farmer input)
  - endDate (farmer input)
*/

import Router from "next/router";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuthContext } from '../hooks/useAuthContext';
import { useFarmersContext } from "../hooks/useFarmersContext";
import { useGleaningActivitiesContext } from '../hooks/useGleaningActivitiesContext';

export const GleaningModal = () => {
  const { user } = useAuthContext();
  const { farmers, dispatch } = useFarmersContext();
  const { dispatch: gleaningActivitiesDispatch } = useGleaningActivitiesContext();

  const [showModal, setShowModal] = useState(false);
  const [typeOfProduce, setTypeOfProduce] = useState('');
  const [isPriority, setIsPriority] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user) {
      Router.push("/");
    }
    const fetchFarmer = async () => {
      const response = await fetch("http://localhost:4000/api/farmer/" + user?._id);
      const json = await response.json();
      if (response.ok) {
        dispatch({
          type: 'SET_FARMER',
          payload: json
        })
      } else {
        Router.push("/");
      }
    }
    fetchFarmer();
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const activity = {
      farmer: user._id,
      streetAddress: farmers.streetAddress,
      city: farmers.city,
      typeOfProduce,
      priority: isPriority,
      endDate
    }
    const response = await fetch("http://localhost:4000/api/gleaningactivity", {
      method: 'POST',
      body: JSON.stringify(activity),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    if (!response.ok) {
      setError("Error: " + json.error);
    } else {
      gleaningActivitiesDispatch({ type: 'CREATE_ACTIVITY', payload: json });
      setShowModal(false);
    }
  }

  return (
    <>
      <button class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <p class="text-sm font-medium leading-none text-white">Add Gleaning Request</p>
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3x1">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-1xl font=semibold">New Gleaning Request</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full" onSubmit={handleSubmit}>
                    <label className="block text-black text-sm font-bold mb-1">
                      Type of Produce
                    </label>
                    <input
                      type="text"
                      placeholder="Tomatoes, Turnips, ..."
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black mb-2"
                      onChange={(e) => setTypeOfProduce(e.target.value)}
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      End Date
                    </label>
                    <DatePicker
                      className="mb-2"
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                    />
                    <div className="mt-1">
                      <label htmlFor="priority" className="block text-black text-sm font-bold mr-auto">
                        Priority?
                      </label>
                      <input
                        type="checkbox"
                        id="priority"
                        name="priority"
                        value={isPriority}
                        placeholder="City or Municipality"
                        className="shadow appearance-none border rounded py-2 px-1 mb-2 text-black"
                        checked={isPriority}
                        onChange={() => setIsPriority(!isPriority)}
                      />
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                    {error &&
                        <div>
                          {error}
                        </div>
                      }
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null
      }
    </>
  );
};

