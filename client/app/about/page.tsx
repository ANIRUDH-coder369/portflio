'use client';

import React, { useState } from "react";
import {
  UserIcon,
  GraduationCapIcon,
  CalendarIcon,
  MapPinIcon,
} from "../componets/icons";
import { portfolioData } from "../data/portfolioData";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"bio" | "education" | "personal">("bio");
  const { hero, bio, education, personalInfo } = portfolioData;

  return (
    <div className="pb-16 pt-12 md:pb-24 md:pt-16">
      <div className="container px-4 md:px-6">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            About Me
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know me better
          </p>
          <div className="mt-4 mx-auto h-1 w-20 bg-primary rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-14 items-start">
          {/* Left: Profile Image Card */}
          <div className="relative max-w-md mx-auto md:max-w-none w-full">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-muted shadow-lg">
              <img
                src={hero.image}
                alt={hero.name}
                className="w-full h-full object-cover object-[50%_20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Corner Badge */}
            <div className="absolute -bottom-4 -right-4 rounded-full bg-background p-3 shadow-xl border border-border">
              <div className="rounded-full bg-primary/10 p-3">
                <UserIcon className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>

          {/* Right: Tabbed Content */}
          <div className="w-full">
            {/* Tabs List */}
            <div className="grid w-full grid-cols-3 rounded-xl bg-muted p-1 border border-border">
              <button
                type="button"
                onClick={() => setActiveTab("bio")}
                className={`py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === "bio"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                Bio
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("education")}
                className={`py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === "education"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                Education
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("personal")}
                className={`py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === "personal"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                Personal
              </button>
            </div>

            {/* Tab 1: Bio */}
            {activeTab === "bio" && (
              <div className="mt-6 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Hello There!
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {bio.introduction}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {bio.journey}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {bio.current}
                </p>
              </div>
            )}

            {/* Tab 2: Education */}
            {activeTab === "education" && (
              <div className="mt-6 space-y-4">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-border bg-card p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                        <GraduationCapIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base sm:text-lg font-semibold text-foreground">
                          {edu.degree}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {edu.institution}
                        </p>
                        <div className="mt-1 flex items-center text-xs text-muted-foreground font-medium">
                          <CalendarIcon className="mr-1 h-3.5 w-3.5" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Personal */}
            {activeTab === "personal" && (
              <div className="mt-6 space-y-4">
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-card p-4 sm:p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-2 text-primary">
                        <CalendarIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Date of Birth</p>
                        <p className="font-semibold text-sm sm:text-base text-foreground">
                          {personalInfo.dateOfBirth}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-4 sm:p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-2 text-primary">
                        <MapPinIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Location</p>
                        <p className="font-semibold text-sm sm:text-base text-foreground">
                          {personalInfo.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Languages Card */}
                <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <h4 className="text-sm sm:text-base font-semibold text-foreground">
                    Languages
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {personalInfo.languages.map((lang, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs sm:text-sm font-medium text-primary"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Downside: Technical Skills Section */}
        <div className="mt-20 pt-14 border-t border-border">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Technical Skills
            </h2>

            <div className="mt-4 mx-auto h-1 w-20 bg-primary rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {portfolioData.skills.map((skill) => (
              <div
                key={`${skill.name}`}
                className="flex flex-col justify-between rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md hover:border-primary/50 transition-all hover:-translate-y-1"
              >
                <div>
                  <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider block">
                    {skill.category || "Skill"}
                  </span>
                  <h3 className="mt-1 font-bold text-sm sm:text-base text-foreground">
                    {skill.name}
                  </h3>
                </div>
                {/* <div className="mt-4"> */}
                {/* <div className="flex justify-between items-center text-xs text-muted-foreground mb-1"> */}
                {/* <span>Proficiency</span>
                    <span className="font-semibold text-foreground">{skill.level}%</span> */}
                {/* </div> */}
                {/* <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden"> */}
                {/* <div
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    /> */}
                {/* </div> */}
                {/* </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
