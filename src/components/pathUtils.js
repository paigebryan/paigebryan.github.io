const paths = {
  home: "",
  work: "work/",
  about: "interests/",
  contact: "contact/",
  resume: "resume/",

  // These pages remain available through the About Me page.
  leadership: "leadership/",
  coursework: "coursework/"
};

export function pathTo(key, depth = 0) {
  const prefix = "../".repeat(depth);

  return `${prefix}${paths[key] ?? ""}`;
}

export function workPath(slug, depth = 0) {
  const prefix = "../".repeat(depth);

  return `${prefix}work/${slug}/`;
}