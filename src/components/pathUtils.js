const paths = {
  home: "",
  work: "work/",
  about: "interests/",
  contact: "contact/",
  resume: "resume/"
};

export function pathTo(key, depth = 0) {
  const prefix = "../".repeat(depth);

  return `${prefix}${paths[key] ?? ""}`;
}

export function workPath(slug, depth = 0) {
  const prefix = "../".repeat(depth);

  return `${prefix}work/${slug}/`;
}