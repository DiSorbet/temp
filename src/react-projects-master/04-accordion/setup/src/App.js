import React, { useState } from "react";
import data from "./data";
import Question from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3> questions and answers about login</h3>
        <section className="info">
          {questions.map((item) => {
            return (
              <div key={item.id}>
                <Question {...item} />
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
