"use client";

import { FormEvent, useMemo, useState } from "react";
import { companyContact } from "@/lib/contact-info";

type InquiryFormProps = {
  source: "contact_page" | "about_page";
};

const inquiryOptions = [
  "Website Design and Development",
  "AI and Automation",
  "CRM or Internal System",
  "Business Digitalization",
  "Other Inquiry",
];

export function ContactInquiryForm({ source }: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const successText = useMemo(
    () =>
      `Your inquiry was sent to ${companyContact.inquiryEmail}. We will review it and get back to you shortly.`,
    [],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const inquiryType = String(formData.get("inquiryType") ?? "").trim();
    const details = String(formData.get("details") ?? "").trim();
    const website = String(formData.get("_honey") ?? "").trim();

    if (website) {
      return;
    }

    if (!firstName || !lastName || !email || !details) {
      setStatus("error");
      setMessage("Please complete your name, email, and project details before sending.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${companyContact.inquiryEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New GBuild inquiry from ${firstName} ${lastName}`,
          _captcha: "false",
          _template: "table",
          _replyto: email,
          source,
          firstName,
          lastName,
          fullName: `${firstName} ${lastName}`,
          email,
          company,
          inquiryType,
          details,
          phone: companyContact.phoneDisplay,
        }),
      });

      const result = (await response.json()) as { success?: string; message?: string };

      if (!response.ok || result.success !== "true") {
        throw new Error(result.message || "Submission failed");
      }

      form.reset();
      setStatus("success");
      setMessage(successText);
    } catch {
      setStatus("error");
      setMessage(
        `The form could not be sent automatically. Please email us directly at ${companyContact.inquiryEmail}.`,
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4 border border-line bg-background p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="firstName"
          required
          className="border border-line bg-background px-4 py-3 outline-none"
          placeholder="First Name"
        />
        <input
          name="lastName"
          required
          className="border border-line bg-background px-4 py-3 outline-none"
          placeholder="Last Name"
        />
      </div>
      <input
        name="email"
        type="email"
        required
        className="border border-line bg-background px-4 py-3 outline-none"
        placeholder="Work Email"
      />
      <input
        name="company"
        className="border border-line bg-background px-4 py-3 outline-none"
        placeholder="Company / Organization"
      />
      <select
        name="inquiryType"
        defaultValue={inquiryOptions[0]}
        className="border border-line bg-background px-4 py-3 outline-none"
      >
        {inquiryOptions.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <textarea
        name="details"
        required
        rows={5}
        className="border border-line bg-background px-4 py-3 outline-none"
        placeholder="Project Scope / Technical Details"
      />
      <input
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={status === "submitting"} className="stitch-button-primary w-fit disabled:opacity-70">
          {status === "submitting" ? "Sending..." : "Submit Inquiry"}
        </button>
        <p className="text-sm text-muted">
          Inquiries go to <span className="text-foreground">{companyContact.inquiryEmail}</span>
        </p>
      </div>
      {message ? (
        <p className={`text-sm ${status === "success" ? "text-teal" : "text-rust"}`}>{message}</p>
      ) : null}
    </form>
  );
}
