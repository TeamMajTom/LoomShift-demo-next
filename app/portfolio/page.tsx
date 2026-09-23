import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <section className="section">
      <h1 className="section__title">Portfolio</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="card" key={project.slug}>
            <Image
              className="card__image"
              src={project.image}
              alt={project.title}
              width={640}
              height={400}
            />
            <div className="card__body">
              <h2 className="card__title">{project.title}</h2>
              <p className="card__description">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
