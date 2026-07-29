const paths = {
  home: "",
  work: "work/",
  leadership: "leadership/",
  coursework: "coursework/",
  interests: "interests/",
  resume: "resume/"
};

export function pathTo(key, depth = 0) {
  return `${"../".repeat(depth)}${paths[key] ?? ""}`;
}

export function workPath(slug, depth = 0) {
  return `${"../".repeat(depth)}work/${slug}/`;
}
