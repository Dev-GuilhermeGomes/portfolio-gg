"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { managementKanban, managementProjects, managementTimeline } from "@/data/site-data";
import { useState } from "react";

function StatusBadge({ status }: { status: "Active" | "Completed" }) {
  if (status === "Completed") {
    return <span className="rounded-full bg-blue-100 px-4 py-1 text-xl text-blue-700">Completed</span>;
  }

  return <span className="rounded-full bg-emerald-100 px-4 py-1 text-xl text-emerald-700">Active</span>;
}

function PriorityBadge({ priority }: { priority: "High" | "Medium" | "Low" }) {
  if (priority === "High") {
    return <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">High</span>;
  }

  if (priority === "Medium") {
    return <span className="rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-700">Medium</span>;
  }

  return <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">Low</span>;
}

function TimelineBadge({ status }: { status: "Done" | "In Progress" | "Planned" }) {
  if (status === "Done") {
    return <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">Done</span>;
  }

  if (status === "In Progress") {
    return <span className="rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-700">In Progress</span>;
  }

  return <span className="rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-700">Planned</span>;
}

export default function ManagementPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "kanban" | "timeline">("overview");

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 lg:py-16">
        <header className="mb-10 text-center">
          <h1 className="mb-4 text-6xl font-medium text-black">Management Projects</h1>
          <p className="text-4xl text-slate-600">Project management portfolio showcasing methodologies and leadership</p>
        </header>

        <div className="mb-10 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            className={`rounded-xl px-8 py-3 text-2xl font-medium transition ${
              activeTab === "overview" ? "bg-red-600 text-white" : "bg-white text-slate-600"
            }`}
          >
            Overview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("kanban")}
            className={`rounded-xl px-8 py-3 text-2xl font-medium transition ${
              activeTab === "kanban" ? "bg-red-600 text-white" : "bg-white text-slate-600"
            }`}
          >
            Kanban Board
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("timeline")}
            className={`rounded-xl px-8 py-3 text-2xl font-medium transition ${
              activeTab === "timeline" ? "bg-red-600 text-white" : "bg-white text-slate-600"
            }`}
          >
            Timeline
          </button>
        </div>

        {activeTab === "overview" && (
          <section className="grid gap-6 lg:grid-cols-2">
            {managementProjects.map((project) => (
              <article key={project.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h2 className="text-4xl font-medium text-black">{project.title}</h2>
                  <StatusBadge status={project.status} />
                </div>

                <div className="mb-2 flex items-center justify-between text-2xl text-slate-600">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="mb-5 h-3 rounded-full bg-slate-200">
                  <div className="h-3 rounded-full bg-red-600" style={{ width: `${project.progress}%` }} />
                </div>

                <ul className="space-y-2 text-2xl text-slate-600">
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
              <article key={column.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                <h2 className="mb-4 text-2xl font-semibold text-slate-800">{column.title}</h2>
                <div className="space-y-3">
                  {column.tasks.map((task) => (
                    <div key={task.title} className="rounded-xl bg-slate-50 p-3">
                      <p className="mb-2 text-base font-semibold text-slate-900">{task.title}</p>
                      <p className="text-sm text-slate-600">{task.project}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-sm text-slate-500">{task.owner}</span>
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
              <article key={milestone.month + milestone.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-3xl font-semibold text-black">{milestone.title}</h2>
                  <TimelineBadge status={milestone.status} />
                </div>
                <p className="mb-3 text-xl text-red-600">{milestone.month}</p>
                <p className="text-xl text-slate-600">{milestone.description}</p>
              </article>
            ))}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
