import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./ImportantDates.css";

const ImportantDates = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const dates = [
    { title: "Start Date", date: "1 Jan 2025" },
    { title: "Acceptance Notification", date: "30th July 2025" },
    { title: "Camera Ready", date: "15 Sep 2025" },
    { title: "Registration", date: "30th Sep 2025" },
    { title: "Conference", date: "1 - 2 Dec 2025" },
  ];

  return (
    <section className="important-dates">
      <div className="important-dates-content" data-aos="fade-up">
        <h1 className="date-title">
          Important <span>Dates</span>
          <br /> <p className="name"></p>
        </h1>
        <div className="date-list">
          {dates.map((item, index) => (
            <div
              className="date-item"
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              <h3 className="date-item-title">{item.title}</h3>
              <p className="date-item-date">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
