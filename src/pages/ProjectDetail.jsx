import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { listProyek } from "../data";

export default function ProjectDetail() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  const { id } = useParams();
  const navigate = useNavigate();
  const proyek = listProyek.find((item) => item.id === parseInt(id));

  if (!proyek) {
    return <div className="p-10 text-center">Project not found 😢</div>;
  }

  return (
    <div className="p-5 max-w-5xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 text-white mb-6 inline-block text-xs md:text-sm lg:text-md"
      >
        ← Back to projects
      </button>
      <img
        src={proyek.gambar}
        alt={proyek.nama}
        className="w-full object-cover mb-6 rounded"
      />
      <h1 className="text-3xl font-bold mb-3">{proyek.nama}</h1>

      <p className="mb-2">
        <strong>Role:</strong> {proyek.role}
      </p>
      <p className="mb-4">
        <strong>Date:</strong> {proyek.date}
      </p>

      <p className="mb-4 opacity-100">{proyek.desk}</p>
      <p className="mb-4 opacity-80">{proyek.desk2}</p>

      <h3 className="text-xl font-semibold mb-2">Tools:</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {proyek.tools.map((tool, i) => (
          <span key={i} className="bg-gray-700 px-3 py-1 rounded text-sm">
            {tool}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-semibold mb-2">Details:</h3>
      <ul className="list-disc pl-5 mb-4">
        {proyek.details?.map((point, i) => (
          <li key={i} className="mb-1">
            {point}
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mb-2">Pages / Features:</h3>
      <ul className="list-disc pl-5 mb-4">
        {proyek.features?.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <div className="flex gap-3">
        {proyek.github && (
          <a
            href={proyek.github}
            target="_blank"
            className="bg-black text-white px-4 py-2 rounded"
          >
            GitHub
          </a>
        )}
        {proyek.demo && (
          <a
            href={proyek.demo}
            target="_blank"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
