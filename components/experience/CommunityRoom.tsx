"use client";

import { useState, type KeyboardEvent } from "react";
import { useSwipeCycle } from "./useSwipeCycle";

const rooms = [
  {
    n: "01",
    label: "QUESTION ROOM",
    object: "QUESTION MEMO / V02",
    stuck: "My topic is youth mental health and social media. It still feels too big.",
    response: "Which behaviour would change if your concern were true? Pick one population, one behaviour and one period.",
    move: "Rewrite the topic as something evidence could fail to support.",
  },
  {
    n: "02",
    label: "SOURCE TABLE",
    object: "EVIDENCE MATRIX / V01",
    stuck: "I have fourteen papers and I cannot tell which ones actually support my paragraph.",
    response: "Stop sorting by title. Put each source beside the exact claim, measure, result and limitation.",
    move: "Build the disagreement into the table instead of hiding it in notes.",
  },
  {
    n: "03",
    label: "DRAFT CLINIC",
    object: "FINDINGS / V04",
    stuck: "The result looks convincing, but I keep writing ‘caused’ when the design only observed an association.",
    response: "Keep the exciting interpretation in the margin. Put only what the design earns in the sentence.",
    move: "Replace certainty with the exact boundary of the study.",
  },
];

export function CommunityRoom() {
  const [active, setActive] = useState(0);
  const item = rooms[active];
  const swipe = useSwipeCycle(rooms.length, active, setActive);
  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    setActive((value) => event.key === "ArrowRight" ? (value + 1) % rooms.length : (value - 1 + rooms.length) % rooms.length);
  };

  return (
    <section className="pf2-community-room" aria-labelledby="community-room-title" tabIndex={0} onKeyDown={onKeyDown} {...swipe}>
      <header>
        <p className="pf-kicker">THE OPEN ROOM / LIVE FORMAT</p>
        <h2 id="community-room-title">Bring the bit<br /><em>that will not behave.</em></h2>
        <p>Nothing here begins polished. The useful unit is an unresolved decision another researcher can inspect with you.</p>
      </header>
      <nav aria-label="Choose a work-in-progress room">
        {rooms.map((room, index) => (
          <button type="button" key={room.n} className={active === index ? "active" : undefined} onClick={() => setActive(index)} aria-pressed={active === index}>
            <b>{room.n}</b><span>{room.label}</span><small>{room.object}</small>
          </button>
        ))}
      </nav>
      <article className="pf2-community-sheet" key={item.n} aria-live="polite">
        <header><span>WORK IN PROGRESS / {item.n}</span><span>{item.object}</span></header>
        <div className="pf2-community-stamp" aria-hidden="true">UNFINISHED</div>
        <section><span>WHAT IS STUCK</span><p>{item.stuck}</p></section>
        <section><span>PEER RESPONSE</span><p>{item.response}</p></section>
        <aside><span>NEXT MOVE</span><strong>{item.move}</strong></aside>
        <footer><span>ASK</span><i /><span>SHOW</span><i /><span>ARGUE</span><i /><span>REVISE</span></footer>
      </article>
    </section>
  );
}
