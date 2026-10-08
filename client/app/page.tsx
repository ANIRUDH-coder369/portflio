'use client';

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  GithubIcon,
  LinkedinIcon,
  ChevronDownIcon,
} from "./componets/icons";
import { portfolioData } from "./data/portfolioData";

export default function HomePage() {
  const { hero, projects } = portfolioData;
  const [categoryFilter, setCategoryFilter] = useState<"all" | "web" | "mobile">("all");

  const filteredProjects =
    categoryFilter === "all"
      ? projects
      : projects.filter((p) => p.category === categoryFilter);

  const webCount = projects.filter((p) => p.category === "web").length;
  const mobileCount = projects.filter((p) => p.category === "mobile").length;

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center py-16 md:py-24">
        <div className="container px-4 md:px-6 my-auto">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/60 px-3.5 py-1 text-xs sm:text-sm font-medium text-foreground">

              </div>

              <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                <span className="block text-foreground">Hi, I&#x27;m</span>
                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mt-1">
                  {hero.name}
                </span>
              </h1>

              <div className="space-y-2">
                <p className="text-xl sm:text-2xl font-semibold text-foreground/90">
                  {hero.title || "MERN Stack Developer"}
                </p>
                <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
                  MERN Stack Developer
                </p>
              </div>

              {/* CTAs & Social Links */}
              <div className="flex flex-wrap items-center gap-4 pt-2">


                <div className="flex items-center gap-2 pl-2">


                </div>
              </div>
            </div>

            {/* Right Profile Photo */}
            <div className="relative order-first md:order-last mb-4 md:mb-0 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 sm:border-8 border-border/80 bg-muted shadow-2xl overflow-hidden flex items-center justify-center">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-full h-full object-cover object-[50%_20%]"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-12 md:mt-16 flex justify-center animate-bounce">
            <a
              href="#projects"
              className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-1 group"
              aria-label="Scroll to Projects"
            >
              <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                Explore Projects
              </span>
              <ChevronDownIcon className="h-5 w-5 opacity-70 group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section - 4 in a row */}
      <section id="projects" className="py-16 md:py-24 bg-muted/30 border-t border-border">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              My Projects
            </h2>

            <div className="mt-4 mx-auto h-1 w-20 bg-primary rounded-full"></div>
          </div>

          {/* Filter Pills */}
          <div className="mt-8 flex justify-center gap-2 sm:gap-3 flex-wrap">
            {/* <button
              type="button"
              onClick={() => setCategoryFilter("all")}
              className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all ${categoryFilter === "all"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-background text-muted-foreground hover:bg-accent hover:text-foreground border border-border"
                }`}
            >
              All Projects ({projects.length})
            </button> */}

            {/* {mobileCount > 0 && (
              // <button
              //   type="button"
              //   onClick={() => setCategoryFilter("mobile")}
              //   className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all ${categoryFilter === "mobile"
              //     ? "bg-primary text-primary-foreground shadow-sm"
              //     : "bg-background text-muted-foreground hover:bg-accent hover:text-foreground border border-border"
              //     }`}
              // >
              //   Mobile Apps ({mobileCount})
              // </button>
            )} */}
          </div>

          {/* 4 Projects Per Row Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Project Image */}
                  <div className="relative h-44 overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                    <span className="absolute top-2.5 right-2.5 rounded-full bg-background/90 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-semibold text-foreground uppercase tracking-wide border border-border shadow-xs">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Details: Big Headline & Subtitle */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Only Button: See More */}
                <div className="p-4 sm:p-5 pt-0" >
                  <Link
                    href={`/projects/${project.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs sm:text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-lg px-4 shadow-xs hover:shadow transition-all"
                  >
                    <span>See More</span>
                    <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div >
      </section >
    </div >
  );
}