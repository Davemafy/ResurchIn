"use client";

import { useReveal } from "@/components/site/useReveal";

function Term({ value, label, note }: { value: string; label: string; note: string }) {
  const { ref, seen } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`quiet-reveal${seen ? " seen" : ""}`}>
      <span>{value}</span><p>{label}</p><small>{note}</small>
    </div>
  );
}

export function TermsSection() {
  return (
    <section className="v14-terms">
      <Term value="06" label="MONTHS OF PRACTICE" note="Enough time to revise the same work more than once." />
      <Term value="1:1" label="DOCUMENT-SPECIFIC REVIEW" note="Feedback attached to the sentence, table or decision." />
      <Term value="2–3" label="LIVE SESSIONS / WEEK" note="Teaching, work-in-progress review and research conversation." />
      <Term value="$0" label="TUITION FEE" note="Selection is based on readiness to do the work." />
    </section>
  );
}
