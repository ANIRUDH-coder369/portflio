import React, { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { portfolioData } from "../../data/portfolioData";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  GithubIcon,
} from "../../componets/icons";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Anirudh Sontakke`,
    description: project.description,
  };
}

function ProjectDetailSkeleton() {
  return (
    <div className="min-h-screen py-10 md:py-16 animate-pulse">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-8">
        <div className="h-5 w-32 bg-muted rounded-md" />
        <div className="space-y-3">
          <div className="h-6 w-24 bg-muted rounded-full" />
          <div className="h-10 w-2/3 bg-muted rounded-xl" />
          <div className="h-5 w-full max-w-2xl bg-muted rounded-md" />
        </div>
        <div className="aspect-video w-full rounded-2xl bg-muted border border-border" />
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="h-40 rounded-2xl bg-muted" />
            <div className="h-40 rounded-2xl bg-muted" />
          </div>
          <div className="h-64 rounded-2xl bg-muted" />
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={<ProjectDetailSkeleton />}>
      <ProjectDetailContent params={params} />
    </Suspense>
  );
}

async function ProjectDetailContent({ params }: PageProps) {
  const { id } = await params;
  const projectIndex = portfolioData.projects.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    notFound();
  }

  const project = portfolioData.projects[projectIndex];
  const prevProject =
    projectIndex > 0 ? portfolioData.projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < portfolioData.projects.length - 1
      ? portfolioData.projects[projectIndex + 1]
      : null;

  // Other recommended projects
  const otherProjects = portfolioData.projects
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen py-10 md:py-16">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              {project.category === "web" ? "Web Application" : "Mobile App"}
            </span>
            {project.featured && (
              <span className="rounded-full bg-amber-500/10 border border-amber-500/30 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Action Links (Live Demo & GitHub) */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <span>Live Demo</span>
              <ExternalLinkIcon className="h-4 w-4" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base font-semibold border border-input bg-card hover:bg-accent hover:text-accent-foreground text-foreground h-11 px-6 rounded-xl shadow-xs hover:shadow transition-all"
            >
              <GithubIcon className="h-4 w-4" />
              <span>View Source Code</span>
            </a>
          </div>
        </div>

        {/* Featured Preview Banner */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
          <div className="relative aspect-video w-full overflow-hidden bg-muted">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Project Information & Metadata Grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {/* Main Details (2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Note Alert if present */}
            {project.note && (
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-5 text-amber-700 dark:text-amber-400 space-y-1">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <span>⚠️ Important Note</span>
                </div>
                <p className="text-sm leading-relaxed">{project.note}</p>
              </div>
            )}

            {/* About Section */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                About this Project
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>{project.description}</p>
                <p>
                  This project was designed and engineered with modern MERN stack
                  best practices, prioritizing responsive UI, robust data handling,
                  and smooth user experience across all devices.
                </p>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Technologies & Tools
              </h2>
              <p className="text-sm text-muted-foreground">
                The core technologies, libraries, and frameworks powering this application:
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-lg bg-primary/10 border border-primary/20 px-3 py-1.5 text-xs sm:text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Quick Info (1 col) */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 space-y-6 shadow-xs">
              <h3 className="text-lg font-bold text-foreground border-b border-border pb-3">
                Project Overview
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Category
                  </span>
                  <span className="mt-1 font-medium text-foreground">
                    {project.category === "web" ? "Web Application" : "Mobile Application"}
                  </span>
                </div>

                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Deployment
                  </span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 font-medium text-primary hover:underline break-all"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLinkIcon className="h-3.5 w-3.5 inline shrink-0" />
                  </a>
                </div>

                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Repository
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 font-medium text-primary hover:underline break-all"
                  >
                    <span>GitHub Code</span>
                    <ExternalLinkIcon className="h-3.5 w-3.5 inline shrink-0" />
                  </a>
                </div>

                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Developer
                  </span>
                  <span className="mt-1 font-medium text-foreground">
                    Anirudh Sontakke
                  </span>
                </div>
              </div>

              {/* Action Buttons in sidebar */}
              <div className="pt-2 space-y-2.5">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-lg px-4 shadow-xs transition-all"
                >
                  <span>Open Live Demo</span>
                  <ExternalLinkIcon className="h-4 w-4" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold border border-input bg-background hover:bg-accent hover:text-accent-foreground text-foreground h-10 rounded-lg px-4 shadow-xs transition-all"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project Pagination (Prev / Next) */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.id}`}
              className="w-full sm:w-auto inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group p-2"
            >
              <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <div className="text-left">
                <span className="block text-xs text-muted-foreground">Previous</span>
                <span className="font-semibold text-foreground group-hover:text-primary line-clamp-1">
                  {prevProject.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.id}`}
              className="w-full sm:w-auto inline-flex items-center justify-end gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group p-2 ml-auto"
            >
              <div className="text-right">
                <span className="block text-xs text-muted-foreground">Next</span>
                <span className="font-semibold text-foreground group-hover:text-primary line-clamp-1">
                  {nextProject.title}
                </span>
              </div>
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* More Projects Section */}
        {otherProjects.length > 0 && (
          <div className="mt-16 pt-12 border-t border-border">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Explore More Projects
              </h2>
              <Link
                href="/#projects"
                className="text-xs sm:text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
              >
                <span>View all</span>
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((p) => (
                <div
                  key={p.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-xs hover:shadow-lg transition-all"
                >
                  <div>
                    <div className="relative h-40 overflow-hidden bg-muted">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <Link
                      href={`/projects/${p.id}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 whitespace-nowrap text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-lg px-3 transition-colors"
                    >
                      <span>See More</span>
                      <ArrowRightIcon className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
