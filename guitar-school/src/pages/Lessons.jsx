import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import lessons from "../data/lessons";

function Lessons() {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const savedProgress = {};
    lessons.forEach((lesson) => {
      const key = `lesson_${lesson.id}_tasks`;
      const saved = localStorage.getItem(key);
      savedProgress[lesson.id] = saved ? JSON.parse(saved).length : 0;
    });
    setProgress(savedProgress);
  }, []);

  const totalTasks = lessons.reduce(
    (sum, l) => sum + (l.tasks ? l.tasks.length : 0),
    0
  );
  const completedTasks = lessons.reduce(
    (sum, l) => sum + (progress[l.id] || 0),
    0
  );
  const overallPercent =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div>
      {/* Общий прогресс */}
      {totalTasks > 0 && (
        <div className="overall-progress">
          <h3>📊 Общий прогресс</h3>
          <p>
            Выполнено {completedTasks} из {totalTasks} заданий ({overallPercent}
            %)
          </p>
          <div className="progress-container">
            <div
              className={`progress-bar ${
                overallPercent === 100 ? "completed" : ""
              }`}
              style={{ width: `${overallPercent}%` }}
            ></div>
          </div>
        </div>
      )}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {lessons.map((lesson, idx) => {
          const total = lesson.tasks ? lesson.tasks.length : 0;
          const done = progress[lesson.id] || 0;
          const percent = total > 0 ? Math.round((done / total) * 100) : 0;

          return (
            <li
              key={lesson.id}
              className="lesson-card fade-up"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <h3>{lesson.title}</h3>
              <p>{lesson.description}</p>

              {total > 0 && (
                <div className="progress-container">
                  <div
                    className={`progress-bar ${
                      percent === 100 ? "completed" : ""
                    }`}
                    style={{ width: `${percent}%` }}
                  ></div>
                  <p style={{ marginTop: "5px" }}>
                    Прогресс: {done} / {total} ({percent}%)
                  </p>
                </div>
              )}

              <Link
                to={`/lessons/${lesson.id}`}
                className="btn"
                style={{ marginTop: "10px", display: "inline-block" }}
              >
                Перейти к уроку ➡
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Lessons;
