import React, { useEffect, useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const OurTeam = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((data) => setTeams(data.data));
  }, []);

  return (
    <div className="bg-black/20 backdrop-blur-md my-5 rounded-lg p-5">
      <h2 className="text-center text-3xl font-bold text-secondary my-5">
        Our Team Member
      </h2>
      <div className="divider"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {teams.map((team) => (
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
            key={team.id}
            className="card bg-black/20 shadow-xl"
          >
            <figure className="px-10 pt-10">
              <img src={team.avatar} alt="Shoes" className="rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                {team.first_name} {team.last_name}
              </h2>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" /> {team.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
