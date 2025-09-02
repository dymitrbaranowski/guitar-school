import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import lessons from "../data/lessons";

function LessonDetail() {
  const { id } = useParams();
  const lesson = lessons.find((l) => l.id === parseInt(id));
  const storageKey = `lesson_${id}_tasks`;

  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(completed));
  }, [completed, storageKey]);

  if (!lesson) return <p>Урок не найден</p>;

  const toggleTask = (index) => {
    setCompleted((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="fade-up">
      <h2>{lesson.title}</h2>
      <p>{lesson.content}</p>

      {lesson.video && (
        <div style={{ margin: "20px 0" }}>
          <iframe
            width="560"
            height="315"
            src={lesson.video}
            title={lesson.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {lesson.images && lesson.images.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {lesson.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Аккорд ${index + 1}`}
              className="chord-image"
            />
          ))}
        </div>
      )}

      {lesson.tasks && lesson.tasks.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Задания:</h3>
          <ul className="tasks-list">
            {lesson.tasks.map((task, index) => (
              <li key={index}>
                <label>
                  <input
                    type="checkbox"
                    checked={completed.includes(index)}
                    onChange={() => toggleTask(index)}
                  />
                  {task}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}

      <br />
      <Link to="/lessons" className="btn">
        ⬅ Назад к урокам
      </Link>
    </div>
  );
}

export default LessonDetail;
