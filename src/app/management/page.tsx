"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { managementKanban, managementProjects, managementTimeline } from "@/data/site-data";
import { useState } from "react";

function StatusBadge({ status }: { status: "Active" | "Completed" }) {
  if (status === "Completed") {
    return <span className="rounded-full bg-blue-100 dark:bg-blue-900/40 px-4 py-1 text-xl text-blue-700 dark:text-blue-400">Completed</span>;
  }

  return <span className="rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-4 py-1 text-xl text-emerald-700 dark:text-emerald-400">Active</span>;
}

function PriorityBadge({ priority }: { priority: "High" | "Medium" | "Low" }) {
  if (priority === "High") {
    return <span className="rounded-full bg-red-100 dark:bg-red-900/40 px-3 py-1 text-sm text-red-700 dark:text-red-400">High</span>;
  }

  if (priority === "Medium") {
    return <span className="rounded-full bg-amber-100 dark:bg-amber-900/40 px-3 py-1 text-sm text-amber-700 dark:text-amber-400">Medium</span>;
  }

  return <span className="rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-3 py-1 text-sm text-emerald-700 dark:text-emerald-400">Low</span>;
}

function TimelineBadge({ status }: { status: "Done" | "In Progress" | "Planned" }) {
  if (status === "Done") {
    return <span className="rounded-full bg-blue-100 dark:bg-blue-900/40 px-3 py-1 text-sm text-blue-700 dark:text-blue-400">Done</span>;
  }

  if (status === "In Progress") {
    return <span className="rounded-full bg-amber-100 dark:bg-amber-900/40 px-3 py-1 text-sm text-amber-700 dark:text-amber-400">In Progress</span>;
  }

  return <span className="rounded-full bg-slate-200 dark:bg-slate-700 px-3 py-1 text-sm text-slate-700 dark:text-slate-300">Planned</span>;
}

export default function ManagementPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "kanban" | "timeline">("overview");

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 lg:py-16">
        <header className="mb-10 text-center">
          <h1 className="mb-4 text-6xl font-medium text-black dark:text-white">Management Projects</h1>
          <p className="text-4xl text-slate-600 dark:text-slate-400">Project management portfolio showcasing methodologies and leadership</p>
        </header>

        <div className="mb-10 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            className={`rounded-xl px-8 py-3 text-2xl font-medium transition ${
              activeTab === "overview" ? "bg-red-600 text-white" : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            }`}
          >
            Overview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("kanban")}
            className={`rounded-xl px-8 py-3 text-2xl font-medium transition ${
              activeTab === "kanban" ? "bg-red-600 text-white" : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            }`}
          >
            Kanban Board
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("timeline")}
            className={`rounded-xl px-8 py-3 text-2xl font-medium transition ${
              activeTab === "timeline" ? "bg-red-600 text-white" : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            }`}
          >
            Timeline
          </button>
        </div>

        {activeTab === "overview" && (
          <section className="grid gap-6 lg:grid-cols-2">
            {managementProjects.map((project) => (
              <article key={project.title} className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h2 className="text-4xl font-medium text-black dark:text-white">{project.title}</h2>
                  <StatusBadge status={project.status} />
                </div>

                <div className="mb-2 flex items-center justify-between text-2xl text-slate-600 dark:text-slate-400">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="mb-5 h-3 rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-3 rounded-full bg-red-600 dark:bg-red-600" style={{ width: `${project.progress}%` }} />
                </div>

                <ul className="space-y-2 text-2xl text-slate-600 dark:text-slate-400">
                  <li>Methodology: {project.methodology}</li>
                  <li>Team Size: {project.teamSize} members</li>
                  <li>Deadline: {project.deadline}</li>
                </ul>
              </article>
            ))}
          </section>
        )}

        {activeTab === "kanban" && (
          <section className="grid gap-5 lg:grid-cols-4">
            {managementKanban.map((column) => (
              <article key={column.id} className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
                <h2 className="mb-4 text-2xl font-semibold text-slate-800 dark:text-white">{column.title}</h2>
                <div className="space-y-3">
                  {column.tasks.map((task) => (
                    <div key={task.title} className="rounded-xl bg-slate-50 dark:bg-slate-700 p-3">
                      <p className="mb-2 text-base font-semibold text-slate-900 dark:text-white">{task.title}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{task.project}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-sm text-slate-500 dark:text-slate-400">{task.owner}</span>
                        <PriorityBadge priority={task.priority} />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </section>
        )}

        {activeTab === "timeline" && (
          <section className="space-y-4">
            {managementTimeline.map((milestone) => (
              <article key={milestone.month + milestone.title} className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-3xl font-semibold text-black dark:text-white">{milestone.title}</h2>
                  <TimelineBadge status={milestone.status} />
                </div>
                <p className="mb-3 text-xl text-red-600 dark:text-red-400">{milestone.month}</p>
                <p className="text-xl text-slate-600 dark:text-slate-400">{milestone.description}</p>
              </article>
            ))}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
