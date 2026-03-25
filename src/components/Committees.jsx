import React from "react";
import "./committees.css"; // <- The updated CSS file below
import chandreshekharImage from "../assets/chandreshekhar.jpg";

const committeesData = {
  Patrons: [
    {
      title: "Chief Patron",
      name: "Dr. Sh. S. Vaitheeswaran",
      designation: "Chairperson, MUJ",
      image:
        "https://sparkpr.in/wp-content/uploads/2022/05/IMG_0315-scaled.jpg",
    },
    {
      title: "Patron",
      name: "Dr. Niti Nipun Sharma",
      designation: "President, MUJ",
      image: "https://jaipur.manipal.edu/img/N%20N%20Sharma.png",
    },
    {
      title: "Co-Patron",
      name: "Dr. Karunakar A Kotegar",
      designation: "Pro-President, MUJ",
      image: "https://jaipur.manipal.edu/img/karunakar-1.jpg",
    },
    {
      title: "Co-Patron",
      name: "Dr. Amit Soni",
      designation: "Registrar, MUJ",
      image: "https://jaipur.manipal.edu/foe/img/amit-soni.jpg",
    },
    {
      title: "Co-Patron",
      name: "Dr. Nitu Bhatnagar",
      designation: "Provost, MUJ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXd1gvdTNBKC-8ScDmccpzccLB34y7x0FKlw&s",
    },
  ],
  Chairs: [
    {
      title: "General Chair",
      name: "Dr. Kuldip Singh Sangwan",
      designation: "Dean - FoS, MUJ",
      image: "https://jaipur.manipal.edu/foe/img/Dr%20Kuldip%20Singh.jpg",
    },
    {
      title: "General Chair",
      name: "Dr. Roheet Bhatnagar",
      designation: "Associate Dean - FoS, MUJ",
      image: "https://jaipur.manipal.edu/admin/photo/3/faculty/12/151.jpg",
    },
    {
      title: "Conference Chair",
      name: "Dr. Shilpa Sharma",
      designation: "HoD - CA, MUJ",
      image: "https://jaipur.manipal.edu/fos/img/shilpa.jpg",
    },
    {
      title: "Program Chair",
      name: "Dr. Linesh Raja",
      designation: "Associate Professor, CA, MUJ",
      image: "https://jaipur.manipal.edu/admin/photo/4/faculty/26/576.jpg",
    },
  ],
  Conveners: [
    {
      title: "Convener",
      name: "Dr. Vaibhav Bhatnagar",
      designation: "Associate Professor, CA, MUJ",
      image: "https://jaipur.manipal.edu/admin/photo/4/faculty/26/581.jpg",
    },
    {
      title: "Convener",
      name: "Dr. Chandrashekhar Patel",
      designation: "Assistant Professor, CA, MUJ",
      image: chandreshekharImage,
    },
  ],
  "Publicity Chairs": [
    {
      title: "Publicity Chair",
      name: "Dr. Devershi Pallavi Bhatt",
      designation: "Professor, CA, MUJ",
      image: "https://jaipur.manipal.edu/admin/photo/4/faculty/26/573.jpg",
    },
    {
      title: "Publicity Chair",
      name: "Dr. Deepak Sinwar",
      designation: "Associate Professor, IoT&IS, MUJ",
      image: "https://jaipur.manipal.edu/admin/photo/3/faculty/17/701.jpg",
    },
    {
      title: "Publicity Chair",
      name: "Dr. Pradeep Kumar",
      designation: "Assistant Professor, CA, MUJ",
      image: "https://jaipur.manipal.edu/admin/photo/4/faculty/26/584.jpg",
    },
  ],
  "Registration Chairs": [
    {
      title: "Registration Chair",
      name: "Dr. Kuntal Gaur",
      designation: "Assistant Professor, CA, MUJ",
      image: "https://jaipur.manipal.edu/admin/photo/4/faculty/26/578.jpg",
    },
    {
      title: "Registration Chair",
      name: "Dr. Smaranika Mohapatra",
      designation: "Assistant Professor, IT, MUJ",
      image: "https://jaipur.manipal.edu/admin/photo/3/faculty/14/389.jpg",
    },
    {
      title: "Registration Chair",
      name: "Dr. Pragya Vaishnav",
      designation: "Assistant Professor, CA, MUJ",
      image: "https://jaipur.manipal.edu/admin/photo/4/faculty/26/589.jpg",
    },
  ],
};

const MeetOurCommittees = () => {
  return (
    <div className="committees-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Meet Our Conference Committee</h1>
        </div>
      </section>

      {/* Patrons Section (Flexbox) */}
      <section className="patrons-section">
        <h2 className="category-title">Patrons</h2>
        <div className="patrons-grid">
          {committeesData.Patrons.map((committee, index) => (
            <div className="committee-card" key={index}>
              <img
                src={committee.image}
                alt={committee.name}
                className="committee-image"
              />
              <p className="committee-title">{committee.title}</p>
              <h3 className="committee-name">{committee.name}</h3>
              <p className="committee-designation">{committee.designation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Committees (CSS Grid) */}
      <section className="committees-grid-section">
        {Object.entries(committeesData).map(([category, members]) => {
          // Skip the Patrons category here to avoid repeating
          if (category === "Patrons") return null;

          return (
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
          );
        })}
      </section>
    </div>
  );
};

export default MeetOurCommittees;
