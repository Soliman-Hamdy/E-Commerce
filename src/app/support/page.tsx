"use client";

import { type FormEvent } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import {
  Clock3,
  Headset,
  Mail,
  MapPin,
  RotateCcw,
  Send,
  ShieldCheck,
  Truck,
  Phone,
} from "lucide-react";

const contactCardClass =
  "rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8";
const inputClass =
  "mt-1.5 w-full min-w-0 rounded-md border border-slate-200 bg-white px-4 py-3 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-2 focus:ring-green-100";
const labelClass = "block text-sm font-medium text-slate-700";

function submitMessage(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

  window.location.href = `mailto:support@freshcart.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function SupportPage() {
  return (
    <>
      <header className="relative left-1/2 mb-8 w-screen -translate-x-1/2 bg-linear-to-r from-green-700 via-emerald-500 to-green-400 text-white">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-12">
          <div className="mb-5 flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-white/75 transition hover:text-white"
            >
              Home
            </Link>
            <span aria-hidden="true" className="text-white/60">
              /
            </span>
            <span aria-current="page">Contact Us</span>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/15 shadow-lg">
              <Headset aria-hidden="true" className="size-10" />
            </div>
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl">Contact Us</h1>
              <p className="mt-1 text-white/85">
                We&apos;d love to hear from you. Get in touch with our team.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="relative left-1/2 grid w-screen min-w-0 -translate-x-1/2 grid-cols-1 gap-6 px-4 pb-10 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.9fr)] lg:px-12 2xl:px-16">
        <div className="grid content-start gap-5">
          <section className={contactCardClass} aria-labelledby="phone-title">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
                <Phone aria-hidden="true" className="size-5" />
              </span>
              <div className="min-w-0">
                <h2
                  id="phone-title"
                  className="text-base font-semibold text-slate-900"
                >
                  Phone
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Mon-Fri from 8am to 6pm
                </p>
                <a
                  href="tel:+18001234567"
                  className="mt-2 inline-block text-base text-green-700 hover:underline"
                >
                  +1 (800) 123-4567
                </a>
              </div>
            </div>
          </section>

          <section className={contactCardClass} aria-labelledby="email-title">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
                <Mail aria-hidden="true" className="size-5" />
              </span>
              <div className="min-w-0">
                <h2
                  id="email-title"
                  className="text-base font-semibold text-slate-900"
                >
                  Email
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  We&apos;ll respond within 24 hours
                </p>
                <a
                  href="mailto:support@freshcart.com"
                  className="mt-2 inline-block break-all text-base text-green-700 hover:underline"
                >
                  support@freshcart.com
                </a>
              </div>
            </div>
          </section>

          <section className={contactCardClass} aria-labelledby="office-title">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
                <MapPin aria-hidden="true" className="size-5" />
              </span>
              <div className="min-w-0">
                <h2
                  id="office-title"
                  className="text-base font-semibold text-slate-900"
                >
                  Office
                </h2>
                <address className="mt-1 not-italic text-sm leading-6 text-slate-500">
                  123 Commerce Street
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </address>
              </div>
            </div>
          </section>

          <section className={contactCardClass} aria-labelledby="hours-title">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
                <Clock3 aria-hidden="true" className="size-5" />
              </span>
              <div className="min-w-0">
                <h2
                  id="hours-title"
                  className="text-base font-semibold text-slate-900"
                >
                  Business Hours
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Monday - Friday: 8am - 6pm
                  <br />
                  Saturday: 9am - 4pm
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </section>

          <section className={contactCardClass} aria-labelledby="social-title">
            <h2
              id="social-title"
              className="text-base font-semibold text-slate-900"
            >
              Follow Us
            </h2>
            <div className="mt-4 flex gap-2">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="flex size-11 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-green-600 hover:text-white"
              >
                <FaFacebookF aria-hidden="true" className="size-5" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="flex size-11 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-green-600 hover:text-white"
              >
                <FaInstagram aria-hidden="true" className="size-5" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="flex size-11 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-green-600 hover:text-white"
              >
                <span className="text-base font-semibold">in</span>
              </a>
            </div>
          </section>
        </div>

        <div className="min-w-0">
          <section
            id="contact-form"
            className={contactCardClass}
            aria-labelledby="message-title"
          >
            <div className="mb-7 flex items-center gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
                <Headset aria-hidden="true" className="size-6" />
              </span>
              <div>
                <h2
                  id="message-title"
                  className="text-xl font-semibold text-slate-900"
                >
                  Send us a Message
                </h2>
                <p className="text-base text-slate-500">
                  Fill out the form and we&apos;ll get back to you
                </p>
              </div>
            </div>

            <form onSubmit={submitMessage} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className={labelClass}>
                  Full Name
                  <input
                    className={inputClass}
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    autoComplete="name"
                    required
                  />
                </label>
                <label className={labelClass}>
                  Email Address
                  <input
                    className={inputClass}
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <label className={labelClass}>
                Subject
                <select
                  className={inputClass}
                  name="subject"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option>Order Issue</option>
                  <option>Shipping Question</option>
                  <option>Returns and Refunds</option>
                  <option>Product Question</option>
                  <option>Other</option>
                </select>
              </label>

              <label className={labelClass}>
                Message
                <textarea
                  className={`${inputClass} min-h-36 resize-y`}
                  name="message"
                  placeholder="How can we help you?"
                  required
                />
              </label>

              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                <Send aria-hidden="true" className="size-5" />
                Send Message
              </button>
            </form>
          </section>

          <aside className="mt-6 flex items-start gap-4 rounded-lg border border-green-100 bg-green-50 p-6 sm:p-7">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white text-green-600 shadow-sm">
              <Headset aria-hidden="true" className="size-6" />
            </span>
            <div className="min-w-0">
              <h2 className="text-lg font-semibold text-slate-900">
                Looking for quick answers?
              </h2>
              <p className="mt-1 text-base leading-7 text-slate-600">
                Our support team can help with orders, shipping, returns, and
                product questions.
              </p>
              <a
                href="#contact-form"
                className="mt-3 inline-block text-sm font-medium text-green-700 hover:underline"
              >
                Contact our team <span aria-hidden="true">-&gt;</span>
              </a>
            </div>
          </aside>
        </div>
      </main>

    </>
  );
}
