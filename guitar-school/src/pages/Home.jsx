import lessons from "../data/lessons";

function Home() {
  const totalTasks = lessons.reduce(
    (sum, l) => sum + (l.tasks ? l.tasks.length : 0),
    0
  );
  let completedTasks = 0;
  lessons.forEach((lesson) => {
    const saved = localStorage.getItem(`lesson_${lesson.id}_tasks`);
    completedTasks += saved ? JSON.parse(saved).length : 0;
  });
  const overallPercent =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="fade-up">
      <h2>Добро пожаловать в Guitar School! 🎸</h2>
      <p>Здесь ты научишься играть на гитаре шаг за шагом.</p>
      {totalTasks > 0 && (
        <div className="overall-progress fade-up fade-up-delay">
          <h3>📊 Общий прогресс курса</h3>
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
    </div>
  );
}

export default Home;
