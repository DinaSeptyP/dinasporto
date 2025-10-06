import HeroImage from "/assets/hero-img.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/php.png";
import Tools3 from "/assets/tools/laravel.png";
import Tools4 from "/assets/tools/reactjs.png";
import Tools5 from "/assets/tools/tailwind.png";
import Tools6 from "/assets/tools/bootstrap.png";
import Tools7 from "/assets/tools/js.png";
import Tools8 from "/assets/tools/nextjs.png";
import Tools9 from "/assets/tools/nodejs.png";
import Tools10 from "/assets/tools/github.png";
import Tools11 from "/assets/tools/canva.png";
import Tools12 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "PHP",
    ket: "Backend Development",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Laravel",
    ket: "Backend Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "React JS",
    ket: "Frontend Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Tailwind CSS",
    ket: "CSS Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Bootstrap",
    ket: "CSS Framework",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Javascript",
    ket: "Programming Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Next JS",
    ket: "React Framework",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Node JS",
    ket: "JS Runtime",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Github",
    ket: "Version Control",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Canva",
    ket: "Design Tool",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Figma",
    ket: "UI/UX Design Tool",
    dad: "1200",
  },
];

import Proyek1 from "/assets/proyek/project1.jpg";
import Proyek2 from "/assets/proyek/project2.jpg";
import Proyek3 from "/assets/proyek/project3.jpg";
import Proyek4 from "/assets/proyek/project4.jpg";
import Proyek5 from "/assets/proyek/project5.jpg";
import Proyek6 from "/assets/proyek/project6.jpg";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website for Determining the Shortest Route for Disaster Medical Evacuation",
    desk: "Developed a web-based system to calculate the shortest evacuation routes using Dijkstra’s Algorithm",
    desk2:
      "Developed a web-based system to determine the shortest evacuation routes using Dijkstra’s Algorithm. Integrated Google Maps API for real-time spatial visualization. Implemented AHP (Analytic Hierarchy Process) to combine distance and time as route weights, enabling optimized decision-making during disaster medical evacuations.",
    role: "Full-Stack Developer",
    date: "2025",
    tools: [
      "PHP",
      "Laravel 12",
      "Tailwind",
      "Filament",
      "HTML",
      "CSS",
      "Javascript",
      "Google Maps API",
      "Dijkstra",
      "MySQL",
    ],
    details: [
      "Developed a web-based system to calculate the shortest evacuation routes using Dijkstra’s Algorithm.",
      "Integrated spatial data visualization with Google Maps API for real-time route visualization.",
      "Implemented decision-making weights with Analytic Hierarchy Process (AHP) for distance-time optimization.",
      "Designed interactive dashboards to assist medical evacuation in disaster-prone areas.",
      "Developed an interactive interface for users to input start and destination points dynamically.",
      "Built the system’s backend using PHP and Laravel Filament, ensuring efficient data processing and route computation.",
    ],
    features: [
      "Dashboard",
      "Waktu dan Cuaca / Time and Weather",
      "Page Manajemen Data (CRUD) Edge, Node, Titik Evakuasi, Puskesmas, Rumah Sakit, Persimpangan / Data Management Page (CRUD) Edge, Node, Evacuation Point, Health Center, Hospital, Intersection",
      "Hitung Bobot / Weight Calculation",
      "Update Edge / Edge Update",
      "Maps Hitung Rute Evakuasi / Evacuation Route Calculation Map",
    ],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Pijar",
    desk: "A website platform to support “Guru Muda” at Titik Pijar in reporting their activities, progress, documentation, achievements, assessments, and one-year plans.",
    desk2:
      "A website platform to support Guru Muda at Titik Pijar in reporting their activities, progress, documentation, achievements, assessments, and one-year plans. The platform enables administrators to manage annual reports, ensuring every aspect of teacher activities and accomplishments is well-documented and can be thoroughly evaluated. Integrated OpenStreetMap API for geospatial data visualization of remote program areas.",
    role: "Front-End Programmer",
    date: "2024",
    tools: [
      "PHP",
      "Laravel 11",
      "Bootstrap",
      "MySQL",
      "HTML",
      "CSS",
      "Javascript",
      "OpenStreetMap API",
    ],
    details: [
      "Built a responsive frontend interface from Figma designs using HTML, CSS, and Laravel Blade.",
      "Developed components to handle activity reports, documentation, and assessments submission.",
      "Integrated OpenStreetMap API for visualizing program areas and school locations in remote regions.",
      "Improved page load performance and ensured accessibility for low-bandwidth environments.",
    ],
    features: [
      "Dashboard",
      "Titik Pijar (menampilkan seluruh titik sekolah binaan pijar) / Pijar Points (displaying all Pijar partner school locations)",
      "Assessment (hasil observasi) / Assessment (observation results)",
      "Detail Titik Pijar (data SDM dan fasilitas sekolah) / Pijar Point Details (HR data and school facilities)",
      "Rencana Satu Tahun / One-Year Plan",
      "Kalender Pendidikan / Academic Calendar",
      "Data Siswa (menampilkan data siswa binaan beserta nilai calistung) / Student Data (displaying student records and literacy-numeracy scores)",
      "Form Cuti / Leave Form",
      "Rencana Satu Tahun / One-Year Plan",
      "Laporan Program (chart laporan kegiatan guru muda, hasil calistung, dan pencapaian program) / Program Report (charts of teacher activities, literacy-numeracy results, and program achievements)",
    ],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Website ArsaNote",
    desk: "A platform for working, collaborating, and managing multiple boards in an organized way to maximize team productivity and collaboration, while improving task organization and workflow efficiency in a work environment.",
    desk2:
      "A platform for working, collaborating, and managing multiple boards in an organized way to maximize team productivity and efficiency. Contributed to the development of features including user accounts, divisions, task notifications, and resource requests. Improved task board UI/UX and optimized team collaboration workflows.",
    role: "Front-End Programmer",
    date: "2024",
    tools: [
      "PHP",
      "CodeIgniter 3",
      "Bootstrap",
      "MySQL",
      "HTML",
      "CSS",
      "Javascript",
    ],
    details: [
      "Contributed to a Trello-like project management platform for internal organizational use.",
      "Developed new features including user accounts, divisions, notifications, and resource requests.",
      "Implemented a task assignment and progress tracking system for better workflow management.",
      "Improved UI/UX for task boards, optimizing layout and responsiveness for better usability.",
      "Collaborated with the backend team to fix critical bugs in real-time collaboration and data sync.",
    ],
    features: [
      "Workspace",
      "Board",
      "Card",
      "Division",
      "Kalender Kegiatan / Calender Activity",
      "Warehouse Request",
    ],
    detail: "/projects/arsanote",
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Ideku - Furniture Company Profile Website",
    desk: "Developed a dynamic company profile website using Node.js and Express.js, designed RESTful APIs and implemented modular architecture for scalability, delivered a clean, responsive frontend integrated with backend services.",
    desk2:
      "Developed a dynamic company profile website using Node.js and Express.js, designed RESTful APIs, and implemented modular architecture for scalability. Delivered a clean, responsive frontend fully integrated with backend services.",
    role: "Back-End and Front-End Programmer",
    date: "2023",
    tools: [
      "NodeJS",
      "ExpressJS",
      "MySQL",
      "REST API",
      "HTML",
      "CSS",
      "Javascript",
    ],
    details: [
      "Built RESTful APIs to handle company profile data dynamically.",
      "Implemented modular backend architecture for scalability and maintainability.",
      "Designed and developed a responsive frontend interface with integrated API calls.",
      "Managed user input validation and routing using Express middleware.",
      "Managed routing logic, data flow, and API response formatting for efficient communication with the frontend.",
    ],
    features: ["Dashboard", "Login", "Page Manajemen Data (CRUD)"],
    github:
      "https://github.com/Kampus-Merdeka-Software-Engineering/BE-Semarang-1",
    github2:
      "https://github.com/Kampus-Merdeka-Software-Engineering/FE-Semarang-1",
    demo: "https://dinaseptyp.github.io/FE-Semarang-G-1.github.io/",
    detail: "/projects/ideku",
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Sapi-Mou: Website Management and Administration of Dairy Cattle Farming",
    desk: "Website for Dairy Cattle Farming management. Responsible for system analysis, including designing and defining system requirements and database design.",
    desk2:
      "A website for dairy cattle farming management, responsible for system analysis, designing and defining system requirements and database architecture. Created Business Process Flows to guide development and ensure the system aligned with organizational goals. Oversaw implementation, supported issue resolution after deployment, and ensured data integrity through efficient and scalable database schema design.",
    role: "System Analyst (Product Owner)",
    date: "2023",
    tools: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "Javascript"],
    details: [
      "Conducted system requirement analysis and documented technical specifications.",
      "Designed Business Process Flows to visualize and guide the development process.",
      "Created database design and schema to ensure data consistency and scalability.",
      "Ensured system alignment with organizational workflows and operational goals.",
      "Monitored system implementation and resolved issues during the initial deployment phase.",
    ],
    features: [
      "Dashboard",
      "Login & Register / Login & Register",
      "Data Akun Pemilik / Owner Account Data",
      "Pencatatan Data Susu / Milk Production Records",
      "Data Stok Tahu/Combor / Tofu/Combor Stock Data",
      "Pemesanan Stok / Stock Ordering",
      "Pembukuan Data Keuangan / Financial Record Keeping",
      "Penjadwalan Pemberian Pakan dan Memerah Susu / Feeding and Milking Schedule Management",
      "Mengirim Pesan ke Pengguna Lain / Send Messages to Other Users",
    ],
    detail: "/projects/sapimou",
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Fashion Website: API CRUD Assignment",
    desk: "A web-based fashion platform featuring CRUD operations to manage products, users, and collections.  it includes secure login with JWT authentication and a simple interface.",
    desk2:
      "A web-based fashion platform featuring CRUD operations for managing products, users, and collections. Built using Python Flask with JWT authentication and a RESTful API. Integrated a simple frontend with HTML, CSS, and JavaScript, showcasing core principles of API development, authentication, and CRUD functionality.",
    role: "Full-Stack Developer",
    date: "2023",
    tools: [
      "Python",
      "JWT",
      "Flask",
      "PostgreSQL",
      "REST API",
      "AJAX",
      "HTML",
      "CSS",
      "Javascript",
    ],
    details: [
      "Developed a RESTful API using Python Flask to handle CRUD operations.",
      "Implemented JWT authentication for secure user login and session handling.",
      "Built a simple frontend with HTML, CSS, and JavaScript to interact with backend endpoints.",
      "Designed API endpoints for managing products, users, and fashion collections.",
      "Focused on demonstrating API integration, authentication, and CRUD logic in a cohesive project.",
    ],
    features: ["Dashboard", "Page Manajemen Data (CRUD)", "Login & Register"],
    detail: "/projects/fashion",
    dad: "700",
  },
];

export const timelineExperience = [
  {
    side: "left",
    title: "Universitas Jember",
    subtitle: "Bachelor Degree, Information Technology",
    date: "Aug 2021 - Jul 2025",
    skill: [
      "Algorithms and Programming I, Database System, Object Oriented Programming, UI/UX Design, Web Based Programming, Software Analysis and Design, Mobile Based Programming, Human Computer Interaction, Internship",
    ],
    dad: "100",
  },
  {
    side: "right",
    title: "Frontend Developer of CTARSA Foundation, detikcom",
    subtitle: "Certified Internship (MSIB) by Ministry of Education",
    date: "Feb 2024 - Jun 2024",
    skill: [
      "Frontend Development, UI/UX Design, Project Management, Teamwork, Communication, Problem Solving, Critical Thinking, Time Management",
    ],
    dad: "200",
  },
  {
    side: "left",
    title: "Revou x Kampus Merdeka Batch Aug'23",
    subtitle: "Independent Study (SIB) by Ministry of Education",
    date: "Aug 2023 - Dec 2023",
    skill: [
      "Fullstack Web Development, Frontend Development, Backend Development, Database, Deployment, Project Management, Teamwork, Data Analytics",
    ],
    dad: "300",
  },
  {
    side: "right",
    title: "Laboratory Teaching Assistant",
    subtitle: "Database Laboratory of Computer Science, University of Jember",
    date: "Aug 2022 - Aug 2023",
    skill: [
      "Database, SQL, MySQL, PostgreSQL, Teamwork, Communication, Problem Solving, Critical Thinking, Time Management",
    ],
    dad: "400",
  },
];
