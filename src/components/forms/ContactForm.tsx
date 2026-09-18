import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { budgetRanges, services } from "@/config/site";
import { enquirySchema, submitEnquiry, type EnquiryInput } from "@/lib/enquiry.functions";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const emptyForm: EnquiryInput = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  details: "",
  website: "",
};

const fieldClass =
  "w-full rounded-lg bg-card px-4 py-3 text-[15px] text-ink ring-1 ring-ink/15 transition-shadow placeholder:text-ink-soft/50 focus:ring-2 focus:ring-coral";

const labelClass =
  "mb-2 block font-display text-[12px] font-semibold tracking-[0.12em] text-ink-soft uppercase";

export function ContactForm() {
  const send = useServerFn(submitEnquiry);
  const [form, setForm] = useState<EnquiryInput>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryInput, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const update = (key: keyof EnquiryInput, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const parsed = enquirySchema.safeParse(form);
    if (!parsed.success) {
      const next: Partial<Record<keyof EnquiryInput, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof EnquiryInput;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("error");
      setMessage("Please check the highlighted fields and try again.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      await send({ data: parsed.data });
      setStatus("success");
      setMessage(
        "Thanks — your enquiry has been received. We'll get back to you soon.",
      );
      setForm(emptyForm);
      toast.success("Enquiry sent");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage(
        "Something went wrong sending your enquiry. Please message us on WhatsApp instead.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full name *
          </label>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            required
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={cn(fieldClass, errors.fullName && "ring-destructive")}
            placeholder="Your name"
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1.5 text-[13px] text-destructive">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(fieldClass, errors.email && "ring-destructive")}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-[13px] text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={fieldClass}
            placeholder="+91 …"
          />
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Company / brand
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            className={fieldClass}
            placeholder="Optional"
          />
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>
            Service required *
          </label>
          <select
            id="service"
            name="service"
            required
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={cn(fieldClass, errors.service && "ring-destructive")}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" className="mt-1.5 text-[13px] text-destructive">
              {errors.service}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget range
          </label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={(e) => update("budget", e.target.value)}
            className={fieldClass}
          >
            <option value="">Prefer not to say</option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="details" className={labelClass}>
          Project details *
        </label>
        <textarea
          id="details"
          name="details"
          required
          rows={6}
          value={form.details}
          onChange={(e) => update("details", e.target.value)}
          aria-invalid={Boolean(errors.details)}
          aria-describedby={errors.details ? "details-error" : undefined}
          className={cn(fieldClass, "resize-y", errors.details && "ring-destructive")}
          placeholder="Tell us what you need, any deadlines, and where the design will be used."
        />
        {errors.details && (
          <p id="details-error" className="mt-1.5 text-[13px] text-destructive">
            {errors.details}
          </p>
        )}
      </div>

      {/* honeypot — hidden from people, catches bots */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2.5 rounded-full bg-ink py-3.5 pr-7 pl-6 font-display text-[15px] font-semibold text-paper ring-1 ring-ink transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send Enquiry"}
          <span aria-hidden="true">→</span>
        </button>
        <p className="text-[13px] text-ink-soft">Fields marked * are required.</p>
      </div>

      <p
        role="status"
        aria-live="polite"
        className={cn(
          "text-[14px]",
          status === "success" && "text-cobalt",
          status === "error" && "text-destructive",
        )}
      >
        {message}
      </p>
    </form>
  );
}
