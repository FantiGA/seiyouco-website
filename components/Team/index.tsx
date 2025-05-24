"use client";

import Image from "next/image";
import type { FC } from "react";
import clsx from "clsx";

type TeamMember = {
  name: string;
  position: string;
  description: string;
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
    name: "Walter White",
    position: "Chief Executive Officer",
    description: "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
    image: "/img/team/team-1.jpg",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Sarah Jhonson",
    position: "Product Manager",
    description: "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
    image: "/img/team/team-2.jpg",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "William Anderson",
    position: "CTO",
    description: "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
    image: "/img/team/team-3.jpg",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Amanda Jepson",
    position: "Accountant",
    description: "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
    image: "/img/team/team-4.jpg",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

interface SocialProps {
  icon: string;
  url: string;
}

const Social: FC<SocialProps> = ({ icon, url }) => {
  return (
    <a
      href={url}
      className={clsx(
        "bg-[color-mix(in_srgb,var(--default-color),transparent_94%)]",
        "transition-all duration-300 ease-in-out",
        "flex items-center justify-center",
        "rounded-full",
        "w-9 h-9",
        "hover:bg-[var(--accent-color)]",
      )}
    >
      <i>{icon}</i>
    </a>
  );
};

interface CardProps {
  index: number;
  member: TeamMember;
}

const Card: FC<CardProps> = ({ index, member }) => {
  return (
    <div
      className={clsx(
        "bg-[var(--surface-color)]",
        "shadow-[0px_2px_15px_rgba(0,0,0,0.1)]",
        "relative",
        "rounded-md",
        "!transition-all !duration-500 !ease-in-out",
        "p-8",
        "h-full",
        "flex items-start",
        "hover:-translate-y-2.5",
        "group",
      )}
      data-aos="fade-up"
      data-aos-delay={(index + 1) * 100}
    >
      <div
        className={clsx(
          "overflow-hidden",
          "w-[150px]",
          "rounded-full",
          "flex-shrink-0",
        )}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          className={clsx(
            "transition-all duration-300 ease-in-out",
            "max-w-full h-auto",
            "!size-[150px]",
            "!h-auto !left-auto !right-auto !top-auto !bottom-auto !static",
          )}
        />
      </div>
      <div className={clsx("pl-8")}>
        <h4 className={clsx("font-bold", "mb-1", "text-xl")}>{member.name}</h4>
        <span
          className={clsx(
            "block text-base pb-2.5 relative font-medium",
            "after:content-[''] after:absolute after:block after:w-14 after:h-px after:bg-[color-mix(in_srgb,var(--default-color),transparent_85%)] after:bottom-0 after:left-0",
          )}
        >
          {member.position}
        </span>
        <p className={clsx("mt-2.5", "text-sm")}>{member.description}</p>
        <div
          className={clsx(
            "mt-3",
            "flex gap-4 items-center justify-start",
            "w-full",
          )}
        >
          {member.social.twitter && (
            <Social icon={""} url={member.social.twitter} />
          )}
          {member.social.facebook && (
            <Social icon={""} url={member.social.facebook} />
          )}
          {member.social.instagram && (
            <Social icon={""} url={member.social.instagram} />
          )}
          {member.social.linkedin && (
            <Social icon={""} url={member.social.linkedin} />
          )}
        </div>
      </div>
    </div>
  );
};

export const Team = () => {
  return (
    <section
      id="team"
      className={clsx(
        "text-[var(--default-color)] bg-[var(--background-color)]",
        "py-15",
        "scroll-mt-20",
        "overflow-clip",
      )}
    >
      <div
        className={clsx("text-center", "pb-15", "relative")}
        data-aos="fade-up"
      >
        <h2 className={clsx("text-4xl font-bold mb-4 uppercase")}>Team</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div
        className={clsx(
          "max-w-[1140px]",
          "[--bs-gutter-x:1.5rem] [--bs-gutter-y:0]",
          "w-full px-[calc(var(--bs-gutter-x)*.5)] mx-auto",
        )}
      >
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {teamMembers.map((member: TeamMember, index: number) => (
            <Card key={index} index={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};
