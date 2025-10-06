import DataImage, { listProyek } from "./data";
import { listTools } from "./data";
import { timelineExperience } from "./data";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectDetail from "./pages/ProjectDetail";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      {/* HERO */}
      <div
        className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 sm:gap-10 gap-6 grid-cols-1"
        id="home"
      >
        <div className="animate__animated animate__fadeInLeft animate__delay-1s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Background"
              className="w-10 rounded-md"
              id="Home"
            ></img>
            <q>Let’s build websites that spark a little joy😻</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Curiosity leads, code follows — Hii, I’m Dina!!
          </h1>
          <p className="mb-6 opacity-70 text-base/loose">
            I’m a Frontend Developer who takes on Full Stack work from time to
            time when needed. I care deeply about how people feel when they use
            a website, such as smooth flow, clear visuals, and little details
            that make everything just work. I love learning new tools,
            experimenting with fresh ideas, and sometimes spending too long
            tweaking pixels until they feel right. When I’m not coding, you’ll
            probably find me playing with cats, stargazing, watching movies or
            cat memes, or getting lost in a good playlist. 🎧🎸✨
          </p>
          <div className="flex gap-4 items-center">
            <a
              href="https://www.linkedin.com/in/dina-septy-puspayani/"
              className="bg-blue-700 p-4 rounded-2xl hover:bg-blue-600 sm:gap-4 gap-2 flex items-center justify-center"
            >
              LinkedIn
            </a>
            <a
              href="#project"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Project
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-2s"
        />
      </div>

      {/* ABOUT */}
      <div className="about mt-32 py-10" id="about"></div>
      <div
        className="xl:w-2/3 lg:full mx-auto p-7 bg-zinc-800 rounded-lg"
        data-aos="fadeInUp"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <img
          src={DataImage.HeroImage}
          alt="About Image"
          className="w-12 rounded-md sm:hidden mb-10"
        />
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <p className="mb-6 opacity-70 text-base/loose">
          Hi! I’m Dina Septy Puspayani, a web developer and tech enthusiast from
          Indonesia. I love building things that look good and feel good to use
          like clean layouts, intuitive flow, and just the right amount of
          polish. I care about the small details that make a website easier to
          navigate and more enjoyable to explore. I also love exploring new
          ideas and learning along the way. To me, good design and good code go
          hand in hand, both tell a story about how something feels to use.
        </p>
        <div className="flex items-center justify-between">
          <img
            src={DataImage.HeroImage}
            alt="About Image"
            className="w-12 rounded-md sm:block hidden"
          />
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-1">
                20<span className="text-blue-500">+</span>
              </h1>
              <p>Projects built</p>
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-1">
                10<span className="text-blue-500">+</span>
              </h1>
              <p>Team Collaborations</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full max-w-4xl mx-auto py-12 relative"
        data-aos="fadeInUp"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-once="true"
      >
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

        <div className="space-y-12">
          {timelineExperience.map((experience, index) => (
            <div
              key={index}
              className={`flex items-center w-full`}
              data-aos="fadeInUp"
              data-aos-duration="1000"
              data-aos-delay={experience.dad}
              data-aos-once="true"
            >
              {experience.side === "left" ? (
                <>
                  <div className="w-1/2 pr-6 text-right">
                    <h3 className="font-semibold">{experience.title}</h3>
                    <p className="text-sm text-gray-200">
                      {experience.subtitle}
                    </p>
                    <span className="text-sm text-gray-400">
                      {experience.date}
                    </span>
                    <p className="mt-1 text-xs text-gray-300">
                      {experience.skill}
                    </p>
                  </div>
                  <div className="w-1/2"></div>
                </>
              ) : (
                <>
                  <div className="w-1/2"></div>
                  <div className="w-1/2 pl-6 text-left">
                    <h3 className="font-semibold">{experience.title}</h3>
                    <p className="text-sm text-gray-200">
                      {experience.subtitle}
                    </p>
                    <span className="text-sm text-gray-400">
                      {experience.date}
                    </span>
                    <p className="mt-1 text-xs text-gray-300">
                      {experience.skill}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* TOOLS */}

      <div className="tools mt-32" id="tool">
        <h1
          className="text-4xl/snug font-bold mb-4"
          data-aos="fadeInUp"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Tools that I use
        </h1>
        <p
          className="opacity-70 text-base/loose"
          data-aos="fadeInUp"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-once="true"
        >
          These are the tools I rely on to bring ideas to life from sketch to
          screen.
        </p>
        <div
          className="tools-box mt-14 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4"
          data-aos="fadeInUp"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {listTools.map((tool) => (
            <div
              key={tool.id}
              className="group flex items-center gap-4 p-4 rounded-md border border-zinc-600 hover:bg-zinc-800 cursor-pointer"
              data-aos="fadeInUp"
              data-aos-duration="1000"
              data-aos-delay={tool.dad}
              data-aos-once="true"
            >
              <img
                src={tool.gambar}
                alt="Tools Image"
                className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
              ></img>
              <div>
                <h4>{tool.nama}</h4>
                <p className="text-xs">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tentang */}

      <div className="projects mt-32" id="project"></div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
        <div>
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fadeInUp"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            My Projects
          </h1>
          <p
            className="opacity-70 text-base/loose md:w-2/3"
            data-aos="fadeInUp"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Every project teaches me something new about design, logic, or just
            how people use the web. Here are some of the projects I’ve poured my
            time (and a few playlists) into🎧
          </p>
        </div>
        <a
          href="https://github.com/DinaSeptyP"
          target="_blank"
          className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 text-sm/loose text-center md:w-1/7 w-full md:text-md"
          data-aos="fadeInUp"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-once="true"
        >
          Github Page
        </a>
      </div>

      <div className="projects-box grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {listProyek.map((proyek) => (
          <div
            key={proyek.id}
            className="group rounded-lg overflow-hidden border border-zinc-600 hover:shadow-lg cursor-pointer pb-5"
            data-aos="fadeInUp"
            data-aos-duration="1000"
            data-aos-delay={proyek.dad}
            data-aos-once="true"
          >
            <img
              src={proyek.gambar}
              alt={proyek.nama}
              className="w-full object-cover group-hover:scale-105 transition-all duration-300"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{proyek.nama}</h3>
              <p className="mb-4 opacity-70 text-sm/loose">{proyek.desk}</p>

              <div className="flex flex-wrap gap-1 mb-7">
                {proyek.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-zinc-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {proyek.github && (
                  <a
                    href={proyek.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700"
                  >
                    GitHub
                  </a>
                )}

                {proyek.github2 && (
                  <a
                    href={proyek.github2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700"
                  >
                    GitHub 2
                  </a>
                )}

                {proyek.demo && (
                  <a
                    href={proyek.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600"
                  >
                    Live Demo
                  </a>
                )}

                <Link
                  to={`/projects/${proyek.id}`}
                  className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600"
                >
                  Project Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CONTACT */}
      <div
        className="contact mt-32 mb-10"
        id="contact"
        data-aos="fadeInUp"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-once="true"
      >
        <div className="xl:w-2/3 lg:full mx-auto p-7 bg-zinc-800 rounded-lg">
          <h1
            className="text-3xl font-bold mb-6"
            data-aos="fadeInUp"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Contact Me
          </h1>
          <p
            className="mb-6 opacity-70 text-base/loose"
            data-aos="fadeInUp"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Let’s chat! Whether it’s about a project, an idea, or your favorite
            cat meme, I’d love to hear from you. I’m always open to new
            collaborations and creative challenges that spark something fun💬
          </p>
          <form
            action="https://formsubmit.co/dinaseptypuspayani87@gmail.com"
            method="POST"
            className="grid lg:grid-cols-2 grid-cols-1 gap-6 text-zinc-100"
            data-aos="fadeInUp"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="bg-zinc-700 p-4 rounded-lg border border-zinc-600 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-zinc-700 p-4 rounded-lg border border-zinc-600 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="bg-zinc-700 p-4 rounded-lg border border-zinc-600 focus:outline-none focus:border-blue-500 lg:col-span-2"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="bg-zinc-700 p-4 rounded-lg border border-zinc-600 focus:outline-none focus:border-blue-500 lg:col-span-2 h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-700 p-4 rounded-2xl hover:bg-blue-600 lg:col-span-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </>
  );
}
