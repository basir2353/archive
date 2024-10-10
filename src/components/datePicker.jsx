
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css"; // Import custom styles
import { format } from "date-fns";
import SectionHeading from "./SectionHeading";

const CalendarComponent = ({ startDate, setStartDate, selectedTime, setSelectedTime }) => {
    // Time options for the time picker dropdown
    const timeOptions = [
        "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM",
        "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"
    ];

    return (
        <div>
            <SectionHeading
                title="Finishing up"
                desc="Double-check everything looks OK before confirming."
            />
            <div>
                <div className="bg-white rounded-xl max-w-md">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">What date & time?</h2>

                    {/* Calendar */}
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="flex-[3]">
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                inline
                                renderCustomHeader={({
                                    monthDate,
                                    decreaseMonth,
                                    increaseMonth
                                }) => (
                                    <div className="flex justify-between px-2 py-2">
                                        <button onClick={decreaseMonth} className="focus:outline-none">
                                            {"<"}
                                        </button>
                                        <span className="text-lg font-semibold">
                                            {format(monthDate, "MMMM yyyy")}
                                        </span>
                                        <button onClick={increaseMonth} className="focus:outline-none">
                                            {">"}
                                        </button>
                                    </div>
                                )}
                            />
                        </div>

                        {/* Time Picker */}
                        <div className="flex-1 flex flex-col justify-center">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Check-out time
                            </label>
                            <div className="relative">
                                <select
                                    className="block w-full border border-pink-500 text-center rounded-md py-2 pl-3 pr-10 text-base leading-6 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                                    value={selectedTime}
                                    onChange={(e) => setSelectedTime(e.target.value)}
                                >
                                    {timeOptions.map((time, index) => (
                                        <option key={index} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarComponent;
