import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import WorkDetailPage from "./pages/WorkDetailPage";
import LeadershipPage from "./pages/LeadershipPage";
import CourseworkPage from "./pages/CourseworkPage";
import InterestsPage from "./pages/InterestsPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";

import "@fontsource/caveat/500.css";
import "@fontsource/caveat/400.css";
import "./styles/global.css";

const pageName =
  document.body.dataset.page ?? "home";

const depth = Number(
  document.body.dataset.depth ?? 0
);

const detailKey =
  document.body.dataset.detail ?? "";

const pages = {
  home: (
    <HomePage depth={depth} />
  ),

  work: (
    <WorkPage depth={depth} />
  ),

  "work-detail": (
    <WorkDetailPage
      depth={depth}
      detailKey={detailKey}
    />
  ),

  leadership: (
    <LeadershipPage depth={depth} />
  ),

  coursework: (
    <CourseworkPage depth={depth} />
  ),

  interests: (
    <InterestsPage depth={depth} />
  ),

  contact: (
    <ContactPage depth={depth} />
  ),

  resume: (
    <ResumePage depth={depth} />
  )
};

createRoot(
  document.getElementById("root")
).render(
  <StrictMode>
    {pages[pageName] ?? pages.home}
  </StrictMode>
);