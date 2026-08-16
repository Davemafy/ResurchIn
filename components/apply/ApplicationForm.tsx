"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export function ApplicationForm() {
  const router = useRouter();
  const [questionCount, setQuestionCount] = useState(0);
  const [whyCount, setWhyCount] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setSubmitting(true);
    window.setTimeout(() => router.push("/apply/success/"), 500);
  };

  return (
    <form className="application" onSubmit={submit}>
      <p className="form-note">All fields marked * are required.</p>
      <label>Full name *<input name="name" autoComplete="name" required /></label>
      <label>Email address *<input name="email" type="email" autoComplete="email" required /></label>
      <label>Current stage *
        <select name="stage" required defaultValue="">
          <option value="">Choose one</option>
          <option>Undergraduate student</option><option>Recent graduate</option><option>Graduate student</option><option>Career switcher</option><option>Other</option>
        </select>
      </label>
      <label>Area of interest *<input name="interest" required placeholder="e.g. public health, education, climate" /></label>
      <label>What question keeps pulling at you? *
        <textarea name="question" rows={5} required onChange={(event) => setQuestionCount(event.target.value.length)} />
        <small className="character-count">{questionCount} characters</small>
      </label>
      <label>Why do you want to join now? *
        <textarea name="why" rows={5} required onChange={(event) => setWhyCount(event.target.value.length)} />
        <small className="character-count">{whyCount} characters</small>
      </label>
      <label className="check"><input type="checkbox" required /><span>I can commit to live sessions and weekly project work.</span></label>
      <button className="button submit" type="submit" disabled={submitting}>Submit for review ↗</button>
      <p className="form-status" role="status">{submitting ? "Application ready. Taking you to confirmation…" : ""}</p>
    </form>
  );
}
