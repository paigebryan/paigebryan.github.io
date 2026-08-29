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
      role: "Software Engineering Intern",
      date: "May 2026 to Aug 2026",
      note:
        "Built cloud simulation and engineering-data tools for New Glenn.",
      color: "blue",
      tilt: 2
    },
    {
      key: "nasa",
      company: "NASA",
      role: "Robotics Engineering Intern",
      date: "Aug 2025 to Dec 2025",
      note:
        "Developed robotic test hardware and analysis tools for Flat Floor and ISS applications.",
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
        "Performed equipment-life analysis and field inspection for refinery systems.",
      color: "pink",
      tilt: 2
},
    {
      key: "johnDeere",
      slug: "john-deere",
      company: "John Deere",
      role: "Advanced R&D Product Engineering Intern",
      date: "May 2024 to Aug 2024",
      note:
        "Built terrain-mapping and project-intake tools for Advanced R&D.",
      color: "green",
      tilt: -1
    }
  ],

  workDetails: {

    blueOrigin: {
      company: "Blue Origin",
      role: "Software Engineering Intern",
      dates: "May 2026 to Aug 2026",
      location: "Renton, WA",
      summary:
        "Built cloud simulation and engineering-data workflows that reduced analysis time and replaced costly legacy tooling.",
      team:
        "I worked with engineering teams supporting New Glenn analysis and internal materials data. My role connected simulation, cloud compute, and full-stack development to make large engineering workflows faster and less expensive.",
      sketch: "CI/CD + AWS + LS-DYNA / NEW GLENN",
      sections: [
        {
          title: "Automated simulation workflow",
          body: "Built a GitLab CI/CD pipeline to automate LS-DYNA simulations on AWS, using K9 and Slurm to manage compute resources.",
        },
        {
          title: "Faster landing analysis",
          body: "Applied the workflow to a Monte Carlo landing analysis with more than 4,000 cases for New Glenn, reducing runtime by 66.7%.",
        },
        {
          title: "Engineering materials platform",
          body: "Designed a React and FastAPI materials database to replace Granta MI, with projected annual licensing savings of more than $1.3 million.",
        },
      ],
    },

    nasa: {
      company: "NASA",
      role: "Robotics Engineering Intern",
      dates: "Aug 2025 to Dec 2025",
      location: "Huntsville, AL",
      summary:
        "Developed robotic test hardware and analysis tools supporting Flat Floor experiments and International Space Station operations.",
      team:
        "I worked on a robotics team developing and validating hardware for Flat Floor experiments and International Space Station applications. I contributed mechanical design, test-fixture development, and MATLAB analysis for robotic subsystems.",
      sketch: "ROBOTICS + TEST HARDWARE + TVAC",
      sections: [
        {
          title: "Laser profiling system",
          body: "Developed a laser-based profiling system with a 3D-printed LJ-X8400 mount to map the Flat Floor and assess surface damage.",
        },
        {
          title: "Vacuum-ready hardware",
          body: "Redesigned DISCMAN external hardware in Creo to reduce its size and achieve the operational vacuum required for testing on the ISS.",
        },
        {
          title: "Subsystem health analysis",
          body: "Wrote a MATLAB program to analyze more than 1,000 TVAC data points and verify the health of LASAR robotic subsystems.",
        },
      ],
    },

    exxonMobil: {
      company: "ExxonMobil",
      role: "Mechanical Engineering Intern",
      dates: "May 2025 to Aug 2025",
      location: "Joliet, IL",
      summary:
        "Combined pressure-vessel analysis and field inspection to extend equipment life, avoid replacement costs, and identify piping risks.",
      team:
        "I worked with the mechanical engineering and inspection teams at the Joliet refinery. My work combined equipment-life calculations with field data to support safe, cost-conscious maintenance decisions.",
      sketch: "PV ELITE + ASME VIII + LIDAR",
      sections: [
        {
          title: "Heat-exchanger life extension",
          body: "Recalculated heat-exchanger shell thickness in PV Elite per ASME Section VIII, supporting a service-life extension of more than five years.",
        },
        {
          title: "Avoided replacement cost",
          body: "Re-evaluated service conditions and exceeded the manufacturer's retirement estimate, avoiding approximately $350,000 in replacement costs.",
        },
        {
          title: "Piping circuit inspection",
          body: "Inspected a piping circuit using OpenSpace LiDAR mapping and infrared scans to identify dead legs.",
        },
      ],
    },

    johnDeere: {
      company: "John Deere",
      role: "Advanced R&D Product Engineering Intern",
      dates: "May 2024 to Aug 2024",
      location: "Dubuque, IA",
      summary:
        "Built mapping and project-intake tools for advanced R&D, supporting autonomous vehicle development and a broader engineering organization.",
      team:
        "I worked with the Advanced R&D product engineering team on autonomous articulated dump truck development and internal innovation tools. I turned large terrain datasets into useful maps and helped streamline how new projects entered the team.",
      sketch: "LIDAR + MATLAB + AUTONOMOUS ADT",
      sections: [
        {
          title: "Large-scale terrain capture",
          body: "Collected 400 million topographical data points using LiDAR and photogrammetry drone scans.",
        },
        {
          title: "Autonomous path-planning maps",
          body: "Programmed a MATLAB tool to read LAS files and generate occupancy maps for autonomous articulated dump truck path planning.",
        },
        {
          title: "R&D project intake",
          body: "Created an application for the Advanced R&D team to streamline project submission and evaluation for a target audience of more than 800 users.",
        },
      ],
    }
  },

  interests: {
    title: "About Me",
    intro:
      "The interests, experiences, and ideas that shape who I am outside engineering.",
    items: [
      [
        "Music",
        "Concerts, artists, playlists, and the experiences attached to them."
      ],
      [
        "Photography",
        "Framing places, people, and details with intention."
      ],
      [
        "Thrifting",
        "Finding unique pieces, hidden gems, and things with a story."
      ],
      [
        "Traveling",
        "Exploring new places, taking spontaneous trips, and experiencing unfamiliar environments."
      ],
      [
        "Watching Movies",
        "Discovering memorable stories, characters, visuals, and soundtracks."
      ]
    ]
  },

  contact: {
    title: "Contact",
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
      resumeReady: true
    },

  }
};
