// Md Faizal Razza — one-page resume
#set document(title: "Md Faizal Razza — Resume", author: "Md Faizal Razza")
#set page(
  paper: "a4",
  margin: (x: 1.4cm, y: 1.2cm),
)
#set text(font: "New Computer Modern", size: 10pt, fill: rgb("#1a1a1a"))
#set par(justify: true, leading: 0.55em)

#let accent = rgb("#1f3a93")

// ---- Section heading helper ----
#let section(title) = [
  #v(6pt)
  #text(size: 11pt, weight: "bold", fill: accent, tracking: 0.5pt)[#upper(title)]
  #v(-4pt)
  #line(length: 100%, stroke: 0.6pt + accent)
  #v(2pt)
]

// ---- Entry header: title left, dates right ----
#let entry(lhs, rhs) = [
  #grid(
    columns: (1fr, auto),
    align: (left, right),
    text(weight: "bold")[#lhs],
    text(fill: rgb("#555"))[#rhs],
  )
]

// =================== HEADER ===================
#align(center)[
  #text(size: 20pt, weight: "bold")[Md Faizal Razza] \
  #v(2pt)
  #text(size: 9.5pt)[
    #link("mailto:faizalrazza756@gmail.com")[faizalrazza756\@gmail.com]
    #h(6pt) | #h(6pt) +91 70082 55675 \
    #link("https://github.com/fgdhs788687")[github.com/fgdhs788687]
    #h(6pt) | #h(6pt) #link("https://www.linkedin.com/in/md-faizal-razza-a15098325")[linkedin.com/in/md-faizal-razza-a15098325]
  ]
]

#v(2pt)

// =================== SUMMARY ===================
#section("Summary")
Computer Science graduate (B.Tech, 2025) with hands-on experience in Python and Java, building software and data-driven applications. Strong foundation in DSA, OOP, SQL and machine learning. Seeking software, ML/AI, data science, or full-stack engineering roles where I can ship clean, reliable code.

// =================== EDUCATION ===================
#section("Education")
#entry[B.Tech, Computer Science & Engineering — GITA Autonomous College][2022 – 2025]
#text(size: 9.5pt, fill: rgb("#555"))[Bhubaneswar, Odisha]
#v(3pt)
#entry[Diploma, Computer Science — DRIEMS][2019 – 2022]
#text(size: 9.5pt, fill: rgb("#555"))[Tangi, Odisha]

// =================== EXPERIENCE ===================
#section("Experience")
#entry[Python Programming Intern — Motion Cut Pvt. Ltd.][Jul 2024 – Aug 2024]
#text(style: "italic", size: 9.5pt, fill: rgb("#555"))[Remote, Lucknow, India]
#v(2pt)
- Built data pipelines for preprocessing, feature engineering and cleaning across real-world datasets using Pandas and NumPy.
- Delivered exploratory data analysis and visualizations that surfaced actionable patterns for decision-making.
- Strengthened production-style workflow with Git-based version control and structured, project-driven delivery.

// =================== PROJECTS ===================
#section("Projects")
#entry[Algerian Forest Fires — FWI Prediction][Python, scikit-learn]
- Built and evaluated a regression model to predict the Fire Weather Index from meteorological data.
- Engineered features with scaling and categorical encoding; compared Linear, Ridge, Lasso and ElasticNet to cut overfitting.
- Published a reproducible end-to-end workflow with performance visualizations on GitHub.
#v(3pt)
#entry[Library Management System][Java, OOP, MySQL]
- Designed an OOP-driven system automating book inventory, member registration and issue/return operations.
- Integrated a MySQL backend for persistent records, reducing manual effort and improving data accuracy.
#v(3pt)
#entry[Exploratory Data Analysis Toolkit][Python, Pandas, Seaborn]
- Performed end-to-end EDA on structured datasets: cleaning, feature engineering and correlation analysis.
- Produced clear visualizations that translated raw data into interpretable insights.

// =================== SKILLS ===================
#section("Technical Skills")
#set par(leading: 0.6em)
#grid(
  columns: (auto, 1fr),
  row-gutter: 4pt,
  column-gutter: 8pt,
  text(weight: "bold")[Languages], [Python, Java, SQL],
  text(weight: "bold")[ML / Data], [scikit-learn, Pandas, NumPy, Matplotlib, Seaborn, EDA, Regression],
  text(weight: "bold")[Backend / DB], [MySQL, OOP, REST fundamentals, Data Structures & Algorithms],
  text(weight: "bold")[Tools], [Git, GitHub, Jupyter, VS Code, Eclipse, Linux],
)
