"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { companyContact } from "@/lib/contact-info";

type Message = {
  role: "assistant" | "user";
  text: string;
};

const quickPrompts = [
  "What services do you offer?",
  "I need a website",
  "I want AI automation",
  "How can I contact you?",
];

function getAssistantReply(input: string) {
  const text = input.toLowerCase();

  if (text.includes("website") || text.includes("site") || text.includes("web")) {
    return "We build business websites, landing pages, client portals, and complete web platforms designed to help companies attract clients and present their services clearly.";
  }

  if (text.includes("ai") || text.includes("automation") || text.includes("automate")) {
    return "We help businesses automate repetitive work, connect tools, organize operations, and use AI to save time and improve response speed.";
  }

  if (text.includes("crm") || text.includes("system") || text.includes("platform")) {
    return "We also build custom systems such as CRM tools, internal dashboards, operational platforms, and client management workflows based on how your business actually works.";
  }

  if (text.includes("price") || text.includes("cost") || text.includes("quote")) {
    return "Pricing depends on the scope, timeline, and complexity. The fastest way is to send us your project on WhatsApp and we will guide you toward the right solution.";
  }

  if (text.includes("contact") || text.includes("whatsapp") || text.includes("phone")) {
    return `You can reach us at ${companyContact.phoneDisplay} or directly on WhatsApp. Our office is ${companyContact.addressLine1}, ${companyContact.addressLine2}, ${companyContact.city}.`;
  }

  if (text.includes("service") || text.includes("offer")) {
    return "Our main services are websites, SaaS development, AI automation, business systems, dashboards, and digital transformation support for growing companies.";
  }

  return "We help businesses with websites, AI automation, custom systems, and digital operations. If you want, send your project goal here or contact us on WhatsApp for a quick discussion.";
}

export function SiteActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: companyContact.assistantGreeting },
  ]);

  const lastAssistantHint = useMemo(
    () => "Ask about websites, AI automation, CRM systems, or contact options.",
    [],
  );

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      { role: "user", text: trimmed },
      { role: "assistant", text: getAssistantReply(trimmed) },
    ]);
    setInput("");
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3">
        <Link
          href={companyContact.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-full border border-[#25D366]/30 bg-[#25D366] px-5 py-3 text-sm font-medium text-white shadow-[0_18px_40px_rgba(37,211,102,0.28)] transition hover:scale-[1.02] hover:bg-[#20bd5a]"
        >
          <span className="text-base">W</span>
          <span>WhatsApp Us</span>
        </Link>

        <button
          type="button"
          onClick={() => setChatOpen((value) => !value)}
          className="inline-flex items-center gap-3 rounded-full border border-[#59bfd4]/30 bg-[#0f1b21] px-5 py-3 text-sm font-medium text-white shadow-[0_18px_40px_rgba(0,0,0,0.24)] transition hover:scale-[1.02] hover:bg-[#13242c]"
        >
          <span className="text-base">AI</span>
          <span>AI Assistant</span>
        </button>
      </div>

      {chatOpen ? (
        <div className="fixed bottom-28 right-5 z-[70] w-[min(92vw,380px)] overflow-hidden rounded-[28px] border border-white/10 bg-[#071015] text-white shadow-[0_28px_70px_rgba(0,0,0,0.34)] backdrop-blur-xl">
          <div className="border-b border-white/10 bg-[linear-gradient(90deg,rgba(89,191,212,0.16),rgba(202,122,58,0.12))] px-5 py-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold">GBuild AI Assistant</p>
                <p className="mt-1 text-xs text-white/64">{lastAssistantHint}</p>
              </div>
              <button
                type="button"
                onClick={() => setChatOpen(false)}
                className="text-sm text-white/72 transition hover:text-white"
              >
                Close
              </button>
            </div>
          </div>

          <div className="max-h-[360px] space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-7 ${
                  message.role === "assistant"
                    ? "bg-white/[0.06] text-white/84"
                    : "ml-auto bg-[#59bfd4]/18 text-white"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 px-4 py-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/72 transition hover:bg-white/[0.08] hover:text-white"
                >
                  {prompt}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    sendMessage(input);
                  }
                }}
                placeholder="Ask about your project..."
                className="w-full rounded-full border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/34"
              />
              <button
                type="button"
                onClick={() => sendMessage(input)}
                className="rounded-full bg-[#59bfd4] px-4 py-3 text-sm font-medium text-[#041015] transition hover:bg-[#73cbdd]"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
