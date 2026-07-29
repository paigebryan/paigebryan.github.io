export const siteContent = {
  person: {
    name: "PAIGE BRYAN",
    tagline: "Mechanical engineer, builder, and curious human.",
    intro:
      "A notebook of the systems I have worked on, the teams I have led, and the ideas I am still developing."
  },

  navigation: [
    { key: "home", label: "Home" },
    { key: "work", label: "Work" },
    { key: "leadership", label: "Leadership" },
    { key: "coursework", label: "Coursework" },
    { key: "interests", label: "Interests" },
    { key: "resume", label: "Résumé" }
  ],

  workTimeline: [
    {
      key: "nasa",
      company: "NASA",
      role: "Robotics Engineering",
      date: "Add dates",
      note:
        "Add one sentence describing the system, mission, or technical problem you supported.",
      color: "yellow",
      tilt: -2
    },
    {
      key: "blueOrigin",
      slug: "blue-origin",
      company: "Blue Origin",
      role: "Mechanical Engineering",
      date: "Add dates",
      note:
        "Add one sentence describing the hardware, analysis, or design work you owned.",
      color: "blue",
      tilt: 2
    },
    {
      key: "johnDeere",
      slug: "john-deere",
      company: "John Deere",
      role: "Engineering",
      date: "Add dates",
      note:
        "Add one sentence describing the product, subsystem, or process you improved.",
      color: "green",
      tilt: -1
    }
  ],

  workDetails: {
    nasa: {
      company: "NASA",
      role: "Robotics Engineering",
      dates: "Add dates",
      sketch: "ROBOTICS / SYSTEMS / TESTING",
      summary:
        "Use this page to tell one complete engineering story rather than listing every task.",
      sections: [
        {
          title: "Problem statement",
          body:
            "Define the system need, constraint, failure mode, or technical uncertainty."
        },
        {
          title: "My responsibility",
          body:
            "Explain exactly what you owned and what decisions were yours."
        },
        {
          title: "Approach",
          body:
            "Describe the model, design, test, code, experiment, or analysis you used."
        },
        {
          title: "Result",
          body:
            "State the verified result, measurable outcome, or next-stage impact."
        }
      ]
    },

    blueOrigin: {
      company: "Blue Origin",
      role: "Mechanical Engineering",
      dates: "Add dates",
      sketch: "DESIGN / ANALYSIS / HARDWARE",
      summary:
        "Use non-confidential language to show your engineering judgment and contribution.",
      sections: [
        {
          title: "System context",
          body:
            "Explain the hardware or process at a level that gives the reader enough context."
        },
        {
          title: "Design constraint",
          body:
            "Identify the performance, integration, manufacturing, schedule, or safety constraint."
        },
        {
          title: "My contribution",
          body:
            "Describe what you designed, analyzed, tested, documented, or coordinated."
        },
        {
          title: "Result",
          body:
            "Show what changed because of your work."
        }
      ]
    },

    johnDeere: {
      company: "John Deere",
      role: "Engineering",
      dates: "Add dates",
      sketch: "PRODUCT / MANUFACTURING / RELIABILITY",
      summary:
        "Connect the engineering work to the product, manufacturing process, or customer need.",
      sections: [
        {
          title: "Context",
          body:
            "Introduce the machine, product, process, or user need."
        },
        {
          title: "Problem",
          body:
            "Define the inefficiency, design gap, failure mode, or performance target."
        },
        {
          title: "Engineering process",
          body:
            "Describe analysis, iteration, testing, prototyping, or collaboration."
        },
        {
          title: "Impact",
          body:
            "Connect the result to reliability, performance, cost, manufacturing, or customer value."
        }
      ]
    }
  },

  leadership: {
    title: "Leadership notes",
    intro:
      "Programs delivered, teams supported, budgets managed, and systems improved.",
    metrics: [
      ["750+", "alumni records"],
      ["100+", "banquet attendees"],
      ["$30K", "budget managed"],
      ["10", "committee members"]
    ],
    roles: [
      {
        title: "PESC",
        subtitle: "Secretary + Alumni Relations",
        body:
          "Add your strongest examples of coordination, process improvement, and event delivery."
      },
      {
        title: "PMEA",
        subtitle: "Professional Development",
        body:
          "Show how you developed programming, supported students, and worked with industry."
      },
      {
        title: "ASME",
        subtitle: "Treasurer + Industrial Relations",
        body:
          "Explain financial responsibility, external relationships, and operations."
      },
      {
        title: "Engineering Ambassadors",
        subtitle: "Student representation",
        body:
          "Describe how you communicated engineering programs and represented the college."
      }
    ]
  },

  coursework: {
    title: "Coursework index",
    intro:
      "Courses grouped by the engineering capability they developed.",
    groups: [
      {
        title: "Mechanics",
        courses: ["Statics", "Dynamics", "Mechanics of Materials", "Machine Design"],
        note: "Loads, motion, failure, structures, and component sizing."
      },
      {
        title: "Thermal sciences",
        courses: ["Thermodynamics", "Fluid Mechanics", "Heat Transfer"],
        note: "Energy, transport, fluids, and thermal system performance."
      },
      {
        title: "Design + manufacturing",
        courses: ["CAD", "Materials", "Manufacturing", "Design Methodology"],
        note: "Requirements, geometry, materials, prototyping, and production."
      },
      {
        title: "Computation + data",
        courses: ["Programming", "Numerical Methods", "Simulation", "Data Science"],
        note: "Code, models, data, and technical communication."
      }
    ]
  },

  interests: {
    title: "Outside the lab",
    intro:
      "The things that shape my taste, curiosity, and life outside engineering.",
    items: [
      ["Outdoors", "Mountains, trails, rivers, waterfalls, and time outside."],
      ["Music", "Concerts, artists, playlists, and the experiences attached to them."],
      ["Photography", "Framing places, people, and details with intention."],
      ["Jewelry", "Gemstones, metals, craftsmanship, and one-of-one design."],
      ["Travel", "New places, spontaneous trips, and unfamiliar environments."],
      ["Animals", "A long-term interest in work that improves animal lives."]
    ]
  },

  resume: {
    title: "Résumé + contact",
    intro:
      "The formal version of the notebook: experience, education, skills, links, and contact information.",
    links: {
      gitlab: "https://gitlab.com/your-username",
      linkedin: "https://www.linkedin.com/in/your-profile",
      email: "mailto:you@example.com",
      resumePath: "../resume.pdf",
      resumeReady: false
    },
    skills: [
      ["Engineering", ["Mechanical design", "Robotics", "Testing", "Analysis"]],
      ["Tools", ["CAD", "Simulation", "Programming", "Data analysis"]],
      ["Leadership", ["Team coordination", "Events", "Budgets", "Communication"]]
    ]
  }
};
