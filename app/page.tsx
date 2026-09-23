import { profile, workHistory, skills } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <h1 className="hero__title">{profile.name}</h1>
        <p className="hero__subtitle">{profile.title}</p>
        <p>{profile.bio}</p>
        <a className="btn" href={profile.resumeUrl} download>
          Download Resume
        </a>
      </section>

      <section className="section">
        <h2 className="section__title">Work History</h2>
        {workHistory.map((job) => (
          <div className="work-item" key={`${job.company}-${job.role}`}>
            <h3>{job.role}</h3>
            <p className="work-item__meta">
              {job.company} &middot; {job.period}
            </p>
            <p>{job.description}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <h2 className="section__title">Skills</h2>
        <ul className="tag-list">
          {skills.map((skill) => (
            <li className="tag" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
