"use client";

import { TeamMember } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48 w-full">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
        <p className="text-indigo-400 mb-3">{member.role}</p>
        <p className="text-gray-300 mb-4">{member.bio}</p>
        <div className="flex gap-4">
          {member.social.discord && (
            <a href={`https://discord.com/users/${member.social.discord}`} className="text-gray-400 hover:text-indigo-400">
              <FontAwesomeIcon icon={faDiscord} className="h-5 w-5" />
            </a>
          )}
          {member.social.twitter && (
            <a href={`https://twitter.com/${member.social.twitter}`} className="text-gray-400 hover:text-indigo-400">
              <FontAwesomeIcon icon={faTwitter} className="h-5 w-5" />
            </a>
          )}
          {member.social.github && (
            <a href={`https://github.com/${member.social.github}`} className="text-gray-400 hover:text-indigo-400">
              <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}