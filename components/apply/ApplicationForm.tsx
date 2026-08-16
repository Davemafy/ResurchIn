"use client";

import { useRouter } from "next/navigation";
import { useRef, useState, type FormEvent } from "react";

const stepMeta = [
  ["01", "IDENTITY", "Who is arriving at the question?"],
  ["02", "QUESTION", "What is pulling you toward research?"],
  ["03", "COMMITMENT", "Can you stay with the work long enough to revise it?"],
];

export function ApplicationForm() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [whyCount, setWhyCount] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const validateStep = () => {
    const form = formRef.current;
    if (!form) return false;
    const controls = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(`[data-step="${step}"] input, [data-step="${step}"] textarea, [data-step="${step}"] select`));
    const invalid = controls.find((control) => !control.checkValidity());
    if (invalid) {
      invalid.reportValidity();
      return false;
    }
    return true;
  };

  const next = () => {
    if (!validateStep()) return;
    setStep((value) => Math.min(stepMeta.length - 1, value + 1));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setSubmitting(true);
    window.setTimeout(() => router.push("/apply/success/"), 520);
  };

  return (
    <form className="application pf2-application" ref={formRef} onSubmit={submit}>
      <div className="pf2-form-progress" aria-label={`Application step ${step + 1} of ${stepMeta.length}`}>
        {stepMeta.map(([n, label], index) => (
          <button key={n} type="button" className={index === step ? "active" : index < step ? "complete" : undefined} onClick={() => index < step && setStep(index)} disabled={index > step}>
            <b>{n}</b><span>{label}</span><i />
          </button>
        ))}
      </div>

      <header className="pf2-form-step-head">
        <span>{stepMeta[step][0]} / 03</span>
        <h3>{stepMeta[step][2]}</h3>
        <p>All fields marked * are required. Your answers do not need to sound polished.</p>
      </header>

      <fieldset data-step="0" hidden={step !== 0}>
        <legend>Identity</legend>
        <label>Full name *<input name="name" autoComplete="name" required /></label>
        <label>Email address *<input name="email" type="email" autoComplete="email" required /></label>
        <label>Current stage *
          <select name="stage" required defaultValue="">
            <option value="">Choose one</option><option>Undergraduate student</option><option>Recent graduate</option><option>Graduate student</option><option>Career switcher</option><option>Other</option>
          </select>
        </label>
        <label>Area of interest *<input name="interest" required placeholder="e.g. public health, education, climate" /></label>
      </fieldset>

      <fieldset data-step="1" hidden={step !== 1}>
        <legend>Question</legend>
        <label className="wide">What question keeps pulling at you? *
          <textarea name="question" rows={7} required maxLength={900} placeholder="It can still be broad. Tell us what you keep noticing or wondering about." onChange={(event) => setQuestionCount(event.target.value.length)} />
          <small className="character-count">{questionCount} / 900</small>
        </label>
        <label className="wide">What have you already tried to understand about it?
          <textarea name="attempt" rows={5} maxLength={700} placeholder="A paper you read, an observation, a class, a conversation, a failed first attempt…" />
        </label>
      </fieldset>

      <fieldset data-step="2" hidden={step !== 2}>
        <legend>Commitment</legend>
        <label className="wide">Why do you want to join now? *
          <textarea name="why" rows={7} required maxLength={900} onChange={(event) => setWhyCount(event.target.value.length)} />
          <small className="character-count">{whyCount} / 900</small>
        </label>
        <label className="check"><input type="checkbox" name="commitment" required /><span>I can commit to live sessions and weekly project work.</span></label>
        <label className="check"><input type="checkbox" name="revision" required /><span>I am willing to show unfinished work and revise it after critique.</span></label>
      </fieldset>

      <div className="pf2-form-actions">
        <button className="pf2-form-back" type="button" onClick={() => setStep((value) => Math.max(0, value - 1))} disabled={step === 0}>← Previous</button>
        {step < stepMeta.length - 1 ? (
          <button className="pf-cta pf-cta-dark" type="button" onClick={next}>Continue <span>→</span></button>
        ) : (
          <button className="pf-cta pf-cta-dark" type="submit" disabled={submitting}>{submitting ? "Recording…" : "Submit for review"} <span>↗</span></button>
        )}
      </div>
      <p className="form-status" role="status">{submitting ? "Application ready. Taking you to confirmation…" : ""}</p>
    </form>
  );
}
