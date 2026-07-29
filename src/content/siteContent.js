export const siteContent = {
  person: {
    name: "PAIGE BRYAN",
    tagline: "Mechanical engineer, builder, and curious human.",
    intro:
      "A notebook of the systems I have worked on, the teams I have led, and the ideas I am still developing."
  },

  navigation: [
    { key: "home", label: "Home" },
    { key: "work", label: "Work Experience" },
    { key: "about", label: "About Me" },
    { key: "contact", label: "Contact" },
    { key: "resume", label: "Résumé" }
  ],

  workTimeline: [
    {
      key: "blueOrigin",
      slug: "blue-origin",
      company: "Blue Origin",
      role: "Mechanical Engineering",
      date: "May 2026 to Aug 2026",
      note:
        "Add one sentence describing the hardware, analysis, or design work you owned.",
      color: "blue",
      tilt: 2
    },
    {
      key: "nasa",
      company: "NASA",
      role: "Robotics Engineering",
      date: "Aug 2025 to Dec 2025",
      note:
        "Add one sentence describing the system, mission, or technical problem you supported.",
      color: "yellow",
      tilt: -2
    },
    {
      key: "exxonMobil",
      slug: "exxonmobil",
      company: "ExxonMobil",
      role: "Mechanical Engineering Intern",
      date: "May 2025 to Aug 2025",
      note:
        "Recalculated heat-exchanger retirement life in PV Elite, supporting a 5+ year life extension and avoiding approximately $350,000 in replacement cost.",
      color: "pink",
      tilt: 2
},
    {
      key: "johnDeere",
      slug: "john-deere",
      company: "John Deere",
      role: "Engineering",
      date: "May 2024 to Aug 2024",
      note:
        "Add one sentence describing the product, subsystem, or process you improved.",
      color: "green",
      tilt: -1
    }
  ],

  workDetails: {

    blueOrigin: {
      company: "Blue Origin",
      role: "Mechanical Engineering Intern",
      dates: "May 2026 to Aug 2026",
      summary:
        "Use non-confidential language to show your engineering judgment and contribution.",
    },

    nasa: {
      company: "NASA",
      role: "Robotics Engineering Intern",
      dates: "Aug 2025 to Dec 2025",
      summary:
        "Use this page to tell one complete engineering story rather than listing every task.",
    },

    exxonMobil: {
      company: "ExxonMobil",
      role: "Mechanical Engineering Intern",
      dates: "May 2025 to Aug 2025",
      summary:
        "Use this page to tell one complete engineering story rather than listing every task.",
    },

    johnDeere: {
      company: "John Deere",
      role: "Advanced R&D Engineering Intern",
      dates: "May 2026 to Aug 2024",
      summary:
        "Connect the engineering work to the product, manufacturing process, or customer need.",
    }
  },

  interests: {
    title: "About me",
    intro:
      "The interests, experiences, and ideas that shape who I am outside engineering.",
    items: [
      [
        "Outdoors",
        "Mountains, trails, rivers, waterfalls, and time outside."
      ],
      [
        "Music",
        "Concerts, artists, playlists, and the experiences attached to them."
      ],
      [
        "Photography",
        "Framing places, people, and details with intention."
      ],
      [
        "Jewelry",
        "Gemstones, metals, craftsmanship, and one-of-one design."
      ],
      [
        "Travel",
        "New places, spontaneous trips, and unfamiliar environments."
      ],
      [
        "Animals",
        "A long-term interest in work that improves animal lives."
      ]
    ]
  },

  contact: {
    title: "Let's connect.",
    intro:
      "For engineering opportunities, questions, or professional conversations.",
    emailLabel: "peachb@live.com",
  },

  resume: {
    title: "Résumé",
    intro:
      "The more formal version of this notebook.",

    links: {
      github:
        "https://github.com/paigebryan",
      linkedin:
        "https://www.linkedin.com/in/paige-bryan/",
      email:
        "peachb@live.com",
      resumePath:
        "../resume.pdf",
      resumeReady: false
    },

  }
};