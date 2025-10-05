import DataImage, { listProyek } from "./data";
import { listTools } from "./data";
import { timelineItems } from "./data";
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
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Background"
              className="w-10 rounded-md"
              id="Home"
            ></img>
            <q>Lorem ipsum dolor sit amet consectetur👌</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Haii, Lorem Ipsum Dina
          </h1>
          <p className="mb-6 opacity-70 text-base/loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            perspiciatis labore iusto fugit debitis, fugiat deleniti temporibus
            doloribus, facere iure velit praesentium nesciunt reiciendis qui,
            tempore maxime facilis? Repellat tempore asperiores possimus omnis
            autem mollitia sequi quisquam nisi? Totam debitis quas non minus
            obcaecati molestias. Nobis blanditiis commodi mollitia voluptatibus?
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
          className="w-[500px] md:ml-auto"
        />
      </div>

      {/* ABOUT */}
      <div className="about mt-32 py-10" id="about"></div>
      <div className="xl:w-2/3 lg:full mx-auto p-7 bg-zinc-800 rounded-lg">
        <img
          src={DataImage.HeroImage}
          alt="About Image"
          className="w-12 rounded-md sm:hidden mb-10"
        />
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <p className="mb-6 opacity-70 text-base/loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          perspiciatis labore iusto fugit debitis, fugiat deleniti temporibus
          doloribus, facere iure velit praesentium nesciunt reiciendis qui,
          tempore maxime facilis? Repellat tempore asperiores possimus omnis
          autem mollitia sequi quisquam nisi? Totam debitis quas non minus
          obcaecati molestias. Nobis blanditiis commodi mollitia voluptatibus?
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
                45<span className="text-blue-500">+</span>
              </h1>
              <p>Proyek selesai</p>
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-1">
                45<span className="text-blue-500">+</span>
              </h1>
              <p>Proyek selesai</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto py-12 relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

        <div className="space-y-12">
          {timelineItems.map((item, index) => (
            <div key={index} className={`flex items-center w-full`}>
              {item.side === "left" ? (
                <>
                  <div className="w-1/2 pr-6 text-right">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.subtitle}</p>
                    <span className="text-sm text-gray-400">{item.date}</span>
                    <p className="mt-1 text-xs text-gray-300">{item.skill}</p>
                  </div>
                  <div className="w-1/2"></div>
                </>
              ) : (
                <>
                  <div className="w-1/2"></div>
                  <div className="w-1/2 pl-6 text-left">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.subtitle}</p>
                    <span className="text-sm text-gray-400">{item.date}</span>
                    <p className="mt-1 text-xs text-gray-300">{item.skill}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* TOOLS */}

      <div className="tools mt-32" id="tool">
        <h1 className="text-4xl/snug font-bold mb-4">Tools that I use</h1>
        <p className="opacity-70 text-base/loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          perspiciatis labore iusto fugit debitis, fugiat deleniti temporibus
        </p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div
              key={tool.id}
              className="group flex items-center gap-4 p-4 rounded-md border border-zinc-600 hover:bg-zinc-800 cursor-pointer"
            >
              <img
                src={tool.gambar}
                alt="Tools Image"
                className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
              ></img>
              <div>
                <h4>{tool.nama}</h4>
                <p>{tool.desk}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tentang */}

      <div className="projects mt-32" id="project"></div>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl/snug font-bold mb-4">My Projects</h1>
          <p className="w-2/3 opacity-70 text-base/loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            perspiciatis labore iusto fugit debitis, fugiat deleniti temporibus
          </p>
        </div>
        <a
          href="https://github.com/DinaSeptyP"
          target="_blank"
          className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
        >
          Github Page
        </a>
      </div>

      <div className="projects-box grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {listProyek.map((proyek) => (
          <div
            key={proyek.id}
            className="group rounded-lg overflow-hidden border border-zinc-600 hover:shadow-lg cursor-pointer pb-5"
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
                  Lihat Proyek
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CONTACT */}
      <div className="contact mt-32 mb-10" id="contact">
        <div className="xl:w-2/3 lg:full mx-auto p-7 bg-zinc-800 rounded-lg">
          <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
          <p className="mb-6 opacity-70 text-base/loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            perspiciatis labore iusto fugit debitis, fugiat deleniti temporibus
            doloribus, facere iure velit praesentium nesciunt reiciendis qui,
            tempore maxime facilis? Repellat tempore asperiores possimus omnis
            autem mollitia sequi quisquam nisi? Totam debitis quas non minus
            obcaecati molestias. Nobis blanditiis commodi mollitia voluptatibus?
          </p>
          <form
            action="https://formsubmit.co/dinaseptypuspayani87@gmail.com"
            method="POST"
            className="grid lg:grid-cols-2 grid-cols-1 gap-6 text-zinc-100"
          >
            <input
              type="text"
              name="name"
              placeholder="Nama"
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
              placeholder="Subjek"
              className="bg-zinc-700 p-4 rounded-lg border border-zinc-600 focus:outline-none focus:border-blue-500 lg:col-span-2"
            />
            <textarea
              name="message"
              placeholder="Pesan"
              className="bg-zinc-700 p-4 rounded-lg border border-zinc-600 focus:outline-none focus:border-blue-500 lg:col-span-2 h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-700 p-4 rounded-2xl hover:bg-blue-600 lg:col-span-2"
            >
              Kirim Pesan
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
