import { createFileRoute } from "@tanstack/react-router";
import { restaurant } from "@/data/restaurant";

export const Route = createFileRoute("/accessibility-page-01")({
  head: () => ({ meta: [{ title: "Accessibility Statement · Ciao Bella" }] }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="font-display text-5xl leading-tight">Accessibility Statement</h1>
      <h2 className="mt-8 font-display text-3xl">Accessibility Statement for Ciao Bella</h2>
      <p className="mt-5 text-[17px] leading-relaxed">
        Ciao Bella is committed to making our site accessible to people with disabilities. We are continuously gathering feedback and improving the user experience for everyone.
      </p>
      <h2 className="mt-10 font-display text-3xl">Conformance</h2>
      <p className="mt-5 text-[17px] leading-relaxed">
        To provide great experience to everyone we are using The Web Content Accessibility Guidelines (WCAG). The guidelines have three levels of accessibility (A, Level AA, and Level AAA). Ciao Bella has chosen level AA as a target for our website and we are fully committed to monitoring our site to maintain this level of compliance.
      </p>
      <h2 className="mt-10 font-display text-3xl">Third-Party Vendors</h2>
      <p className="mt-5 text-[17px] leading-relaxed">
        We encourage our third party vendors (online order and delivery providers, reservations and event management, social media, review sites, travel recommendation sites, etc.) to provide content that is accessible and user friendly, even though we cannot control their content that appears on our website.
      </p>
      <h2 className="mt-10 font-display text-3xl">Feedback</h2>
      <p className="mt-5 text-[17px] leading-relaxed">
        How are we doing? We welcome your feedback on how to improve accessibility and usability of Ciao Bella website. Please let us know using this email address: E-mail:{" "}
        <a className="underline" href={restaurant.emailHref}>
          {restaurant.email}
        </a>
      </p>
      <p className="mt-4 text-[17px] leading-relaxed">We try to respond to feedback within 2 business days.</p>
      <h2 className="mt-10 font-display text-3xl">Assistance</h2>
      <p className="mt-5 text-[17px] leading-relaxed">
        If you need any assistance please call us at{" "}
        <a className="underline" href={restaurant.phoneHref}>
          (954) 428-2676
        </a>{" "}
        during our regular business hours and we'd be happy to help you with anything on our site.
      </p>
    </article>
  );
}
