import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const StyledDateCalendar = () => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg w-full">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          className="text-white"
          sx={{
            width: "100%",
            "& .MuiPickersCalendarHeader-root": {
              paddingLeft: 0,
              paddingRight: 0,
              marginBottom: "8px",
            },
            "& .MuiPickersCalendarHeader-label": {
              fontSize: "1.2rem",
              fontWeight: "bold",
            },
            "& .MuiDayCalendar-header": {
              justifyContent: "space-between",
              paddingLeft: "12px",
              paddingRight: "12px",
            },
            "& .MuiDayCalendar-weekDayLabel": {
              width: "40px",
              height: "40px",
              fontSize: "0.9rem",
            },
            "& .MuiDayCalendar-weekContainer": {
              justifyContent: "space-between",
              margin: "4px 12px",
            },
            "& .MuiPickersDay-root": {
              width: "40px",
              height: "40px",
              fontSize: "1rem",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
              "&.Mui-selected": {
                backgroundColor: "rgb(249 115 22)",
                "&:hover": {
                  backgroundColor: "rgb(249 115 22)",
                },
              },
            },
            "& .MuiPickersDay-today": {
              border: "1px solid rgb(249 115 22)",
            },
            "& .MuiTypography-root": {
              color: "white",
            },
            "& .MuiSvgIcon-root": {
              color: "white",
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default StyledDateCalendar;
