import React from "react";
import "./techcommittee.css";
import soumitraa from "../assets/soumitra.jpg";
import rohit from "../assets/rohitverma.jpeg";

// Tech Committee Data
const committeeData = {
  "Tech Committee": [
    {
      title: "",
      name: "Vijander Singh",
      designation: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDm7EMQfi4n_J9KTfNwLKDIlUr37fZckg8Q&s",
    },
    {
      title: "",
      name: "Mario Divan",
      designation: "",
      image:
        "https://i1.rgstatic.net/ii/profile.image/632076705464322-1527710238454_Q512/Mario-Divan.jpg",
    },
    // {
    //   title: "",
    //   name: "BharatTendra Rai",
    //   designation: "designation",
    //   image:
    //     "https://pxl-umassdedu.terminalfour.net/fit-in/1200x800/filters:format(webp)/filters:quality(90)/prod01/production-cdn-pxl/media/umassdartmouth/profiles/charlton/180406-rai-bharatendra-tjc-002.jpg",
    // },
    {
      title: "",
      name: "Thom IVES",
      designation: "",
      image:
        "https://media.licdn.com/dms/image/v2/C5603AQFwuiuFf4hNvQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517667530438?e=1742428800&v=beta&t=tTSSTmHyG59i-yncyPH-ThwPoc63RDtWJnduiNs43fs",
    },
    {
      title: "",
      name: "Dr. Rohit Verma",
      designation: "",
      image: rohit,
    },
    {
      title: "",
      name: "Dr. Soumitra Dwivedi",
      designation: "",
      image: soumitraa,
    },
    {
      title: "",
      name: "Dr. Ramesh C. Poonia",
      designation: "",
      image:
        "https://i0.wp.com/rameshcpoonia.com/wp-content/uploads/elementor/thumbs/IMG-20220503-WA0002-po9i2lj7r4z6pksjxui3qlxdvrz1oir07adz7aw0e8.jpg?ssl=1",
    },
    {
      title: "",
      name: "Dr. Sandeep Kumar Poonia",
      designation: "",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQFyiqdbJVuZZw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705258427526?e=1742428800&v=beta&t=PUMtpLgi4oGZAfAtrnXCwMEFZe6Nbuzw4173KU0_8QQ",
    },
    {
      title: "",
      name: "Dr. Basant Agarwal",
      designation: "",
      image:
        "https://www.curaj.ac.in/sites/default/files/styles/150_150/public/Screenshot%202023-01-16%20at%205.50.16%20PM.png?itok=hxpKkRD5",
    },
  ],
};

const TechCommitteeShowcase = () => {
  return (
    <div className="committees-page">
      {/* Hero Section */}
      <section className="hero-sectionn">
        <div className="hero-overlay">
          <h1>Meet Our Technical Program Committee</h1>
        </div>
      </section>

      {/* Committees Grid */}
      <section className="committees-grid-section">
        {Object.entries(committeeData).map(([category, members]) => (
          <div key={category} className="committee-category">
            <h2 className="category-title">{category}</h2>
            <div className="committees-grid">
              {members.map((committee, index) => (
                <div className="committee-card" key={index}>
                  <img
                    src={committee.image}
                    alt={committee.name}
                    className="committee-image"
                  />
                  <p className="committee-title">{committee.title}</p>
                  <h3 className="committee-name">{committee.name}</h3>
                  <p className="committee-designation">
                    {committee.designation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TechCommitteeShowcase;
