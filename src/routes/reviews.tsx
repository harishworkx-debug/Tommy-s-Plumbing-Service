import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/data/images";
import { CtaBand, PageHero, Section } from "@/components/site/ui";
import { pageHead } from "@/lib/seo";
import { reviews } from "@/data/reviews";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () =>
    pageHead({
      title: "Reviews | Tommy's Plumbing Service, Bakersfield CA",
      description:
        "Read reviews from satisfied Bakersfield homeowners who trusted Tommy's Plumbing Service. Call 661 689-3958.",
      path: "/reviews/",
    }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        image={img("reviews-hero")}
        alt="Satisfied Bakersfield homeowner with a plumber after a completed repair"
        h1="Customer Reviews"
        lede="See what your neighbors are saying about our professional plumbing services."
      />
      <Section>
        <div className="prose-local mx-auto max-w-3xl text-center mb-12">
          <h2 className="!mt-0">Real Feedback from Real Customers</h2>
          <p>
            As a licensed and insured plumbing contractor, we stand behind our work. Don't just take our word for it—read what our actual customers have to say about their experience with Tommy's Plumbing Service.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#fbbc04] text-[#fbbc04]" />
                ))}
              </div>
              <p className="flex-grow text-sm leading-relaxed text-muted-foreground mb-6">"{r.text}"</p>
              <div>
                <p className="font-bold text-card-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{r.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <CtaBand
        heading="Ready to Schedule Your Service?"
        text="Call today to speak with our plumbing experts."
      />
    </>
  );
}
