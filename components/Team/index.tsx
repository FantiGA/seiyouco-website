"use client";

import Image from "next/image";

type TeamMember = {
  id: number;
  name: string;
  position: string;
  image: string;
  social: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Walter White",
    position: "Chief Executive Officer",
    image: "/img/team/team-1.jpg",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Sarah Jhonson",
    position: "Product Manager",
    image: "/img/team/team-2.jpg",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "William Anderson",
    position: "CTO",
    image: "/img/team/team-3.jpg",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Amanda Jepson",
    position: "Accountant",
    image: "/img/team/team-4.jpg",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

export const Team = () => {
  return (
    <section id="team" className="section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={member.id * 100}
            >
              <div className="relative h-80 overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-200 mb-4">{member.position}</p>
                <div className="flex gap-4">
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                  )}
                  {member.social.facebook && (
                    <a
                      href={member.social.facebook}
                      className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                  )}
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
