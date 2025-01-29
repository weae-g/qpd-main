"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "./Icon";

const projects = [
  {
    id: 1,
    image: "/images/project-1.jfif",
    tags: ["WEB", "IT"],
    time: "8 недель",
  },
  {
    id: 2,
    image: "/images/project-2.jfif",
    tags: ["DESIGN", "UX"],
    time: "6 недель",
  },
  {
    id: 3,
    image: "/images/project-3.jfif",
    tags: ["APP", "DEV"],
    time: "10 недель",
  },
  {
    id: 4,
    image: "/images/project-4.jfif",
    tags: ["SEO", "MARKETING"],
    time: "5 недель",
  },
  {
    id: 5,
    image: "/images/project-5.jfif",
    tags: ["BRANDING", "STRATEGY"],
    time: "12 недель",
  },
];

export const ProjectsGrid = () => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  const handleViewProject = (id: number) => {
    router.push(`/portfolio/${id}`);
  };

  return (
    <div className="projects">
      <div className="projects__container">
        <div className="projects__info">
          <p className="subtitle">5 из 8</p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Поиск..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-bar"
            />
            <Icon
              className="search-icon"
              name="search"
              width={32}
              height={32}
              color="--bg-primary"
            />
          </div>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project"
              style={{ backgroundImage: `url(${project.image})` }}>
              <div className="project-info">
                <div className="project-info__tags">
                  {project.tags.map((tag) => (
                    <div key={tag} className="tag">
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="project-info__actions">
                  <p className="project-time">{project.time}</p>
                  <button
                    className="button button--outlined"
                    onClick={() => handleViewProject(project.id)}>
                    Смотреть
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
