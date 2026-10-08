'use client';

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "../componets/icons";
import { portfolioData } from "../data/portfolioData";

export default function ProjectsPage() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<"all" | "web" | "mobile">("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="pb-16 pt-12 md:pb-24 md:pt-16">
      <div className="container px-4 md:px-6">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Projects
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive showcase of my recent work and creations
          </p>
          <div className="mt-4 mx-auto h-1 w-20 bg-primary rounded-full"></div>
        </div>

        {/* Filter Pills */}
        <div className="mt-10 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              filter === "all"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground border border-border"
            }`}
          >
            All Projects ({projects.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("web")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              filter === "web"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground border border-border"
            }`}
          >
            Web Apps
          </button>
          <button
            type="button"
            onClick={() => setFilter("mobile")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              filter === "mobile"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground border border-border"
            }`}
          >
            Mobile Apps
          </button>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-md hover:shadow-xl transition-all"
            >
              <div>
                <div className="relative h-[220px] sm:h-[260px] lg:h-[300px] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  <span className="absolute top-3 right-3 rounded-full bg-background/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-foreground uppercase tracking-wide border border-border">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-muted-foreground line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 mt-2">
                <Link
                  href={`/projects/${project.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-lg px-5 shadow-sm hover:shadow transition-all"
                >
                  <span>See More</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
