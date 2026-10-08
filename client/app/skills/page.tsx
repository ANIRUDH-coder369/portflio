'use client';

import React, { useState } from "react";
import { BrainCircuitIcon } from "../componets/icons";
import { portfolioData } from "../data/portfolioData";

export default function SkillsPage() {
  const { skills, learningApproach } = portfolioData;

  // Extract unique categories
  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Programming Language",
    "State Management",
    "UI Library",
    "Tools & Deployment",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((s) => s.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="pb-16 pt-12 md:pb-24 md:pt-16">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            My Skills
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with
          </p>
          <div className="mt-4 mx-auto h-1 w-20 bg-primary rounded-full"></div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div>
                <span className="text-xs font-medium text-blue-600 uppercase tracking-wider block">
                  {skill.category || "General"}
                </span>
                <h3 className="mt-1 font-bold text-base sm:text-lg text-foreground">
                  {skill.name}
                </h3>
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center text-xs text-muted-foreground mb-1">
                  <span>Proficiency</span>
                  <span className="font-semibold text-foreground">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Approach Card */}
        <div className="mt-16 md:mt-20">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-full bg-primary/10 p-2.5 text-primary">
                <BrainCircuitIcon className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  My Learning Approach
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  How I stay updated with the latest technologies
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
              {learningApproach.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border bg-background p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
