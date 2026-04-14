"use client";

import { motion } from "motion/react";
import { teamMembers } from "@/data/mockData";
import { Target, Eye, Award, Users, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { SectionAmbient } from "@/components/SectionAmbient";

function AuthorityCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-[1.05rem] opacity-75"
        style={{
          background:
            "linear-gradient(135deg, rgba(245,158,11,0.28) 0%, rgba(245,158,11,0.06) 45%, transparent 68%)",
          filter: "blur(18px)",
        }}
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-2xl border border-[#f59e0b]/30 bg-[#121212] p-8 shadow-[0_0_0_1px_rgba(245,158,11,0.08),0_28px_80px_-32px_rgba(0,0,0,0.9),0_0_56px_-24px_rgba(245,158,11,0.14)] lg:p-12">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/45 to-transparent" />
        {children}
      </div>
    </div>
  );
}

export default function AboutClient() {
  const values = [
    {
      icon: Target,
      title: "Honest Work",
      description:
        "We tell you exactly what you need and what it will cost. No hidden fees.",
    },
    {
      icon: Award,
      title: "Built to Last",
      description:
        "We don't just build for today; we build systems that grow with you.",
    },
    {
      icon: Users,
      title: "Partners, Not Just Vendors",
      description:
        "We treat your business like our own and care about your growth.",
    },
    {
      icon: Eye,
      title: "Always Simple",
      description:
        "We take complex problems and turn them into simple, easy-to-use tools.",
    },
  ];

  const openRoles = [
    {
      title: "Frontend Developer Intern",
      department: "Engineering",
      location: "Remote",
      tech: "React, Next.js, TypeScript, UI/UX",
    },
    {
      title: "Backend Developer Intern",
      department: "Engineering",
      location: "Remote",
      tech: "Node.js, Express, PostgreSQL, Docker",
    },
  ];

  return (
    <div className="page-depth-grain min-h-screen bg-black text-white">
      <div className="relative z-[1]">
        <BreadcrumbSchema
          items={[
            { name: "Home", item: "/" },
            { name: "About Us", item: "/about" },
          ]}
        />

        <SectionAmbient
          preset="surface"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/25 bg-[#f59e0b]/10 px-4 py-2 shadow-[0_0_32px_-12px_rgba(245,158,11,0.35)]">
                <Users className="h-4 w-4 text-[#fbbf24]" aria-hidden />
                <span className="text-sm font-semibold text-[#fbbf24]">
                  About EDUNEX
                </span>
              </div>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl md:leading-tight">
                Meet the Team Behind Your{" "}
                <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                  Success
                </span>
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl [text-wrap:balance]">
                Since 2018, we&apos;ve been helping business owners in Patna and
                beyond grow with simple, honest technology and expert advice.
              </p>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AuthorityCard>
                <div className="prose prose-invert prose-lg md:prose-xl max-w-none">
                  <h2 className="mb-6 border-b border-[#262626] pb-4 text-3xl font-bold text-white">
                    Local Roots, Practical Execution
                  </h2>
                  <div className="grid items-start gap-12 lg:grid-cols-2">
                    <div className="space-y-6 leading-relaxed text-gray-400">
                      <p>
                        At EDUNEX Services, we believe that technology should
                        make your life easier, not more complicated. Founded in
                        2018 right here in Bihar, we saw local businesses
                        struggling to digitize. Small shop owners and distributors
                        were being overcharged by out-of-state agencies for
                        complex software they didn&apos;t need and couldn&apos;t
                        use.
                      </p>
                      <p>
                        We built EDUNEX to fix this. We act as your local
                        technology partner. We don&apos;t just sell you software;
                        we visit your godown, understand how your staff works with
                        paper bills today, and build simple digital systems that
                        make sense to them. Whether you need an offline-ready
                        billing system, a website that brings in local customers
                        from Google Maps, or help filing your GST without
                        headaches, we handle it all.
                      </p>
                      <p>
                        Our goal is simple: to stop you from losing money to
                        manual mistakes, and to give you the peace of mind that
                        comes from having a reliable tech team just a phone call
                        or a short drive away. Explore our{" "}
                        <Link
                          href="/case-studies"
                          className="text-[#f59e0b] hover:underline"
                        >
                          Local Success Stories
                        </Link>{" "}
                        to see how we&apos;ve helped businesses like yours.
                      </p>
                    </div>
                    <div className="relative h-full min-h-[400px] overflow-hidden rounded-xl border border-[#262626]">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                        alt="Local Business Support"
                        className="h-full w-full object-cover opacity-80"
                      />
                    </div>
                  </div>
                </div>
              </AuthorityCard>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surface"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AuthorityCard>
                <div className="prose prose-invert prose-lg max-w-none">
                  <h2 className="mb-6 border-b border-[#262626] pb-4 text-3xl font-bold text-white">
                    How We Work With You
                  </h2>
                  <div className="space-y-6 leading-relaxed text-gray-400 md:columns-2 md:gap-12">
                    <p>
                      We know that learning a new software can be scary for your
                      staff. That is why we never just install a program and
                      disappear. We stay with you until everything works
                      perfectly. Our process is built around trust,
                      transparency, and face-to-face support.
                    </p>
                    <p>
                      <strong>Step 1: On-Site Business Review.</strong> Before
                      any money changes hands, we sit down with you at your shop,
                      clinic, or factory. We watch exactly how you do things
                      today—how you write invoices, track stock, and manage
                      customers. We then suggest the simplest, lowest-cost digital
                      way to automate that work.
                    </p>
                    <p>
                      <strong>Step 2: Fast, Practical Delivery.</strong> We build
                      exactly what we promised, on time. For custom software, we
                      show you progress every week so you can request changes
                      before we finish. For simple websites or GST registrations,
                      we move incredibly fast so you can get started immediately.
                    </p>
                    <p>
                      <strong>Step 3: Training &amp; Ongoing Support.</strong>{" "}
                      This is where we are completely different. We provide
                      on-site training for your staff in Hindi or English. If your
                      system goes down or if you get stuck on a GST filing, our
                      team is right here in Bihar to fix it immediately, ensuring
                      your business never has to stop.
                    </p>
                  </div>
                </div>
              </AuthorityCard>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-[#171717] via-[#121212] to-[#0c0c0c] p-10 shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_12px_40px_-18px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-[#f59e0b]/35"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#f59e0b]/10">
                  <Target className="h-8 w-8 text-[#f59e0b]" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Our Mission
                </h3>
                <p className="leading-relaxed text-gray-400">
                  To give every business owner access to high-quality, reliable,
                  and affordable technology that makes their work easier every
                  single day.
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 transform bg-gradient-to-r from-[#f59e0b] to-[#d97706] transition-transform duration-200 group-hover:scale-x-100" />
              </motion.div>

              <motion.div
                className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-[#171717] via-[#121212] to-[#0c0c0c] p-10 shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_12px_40px_-18px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-[#f59e0b]/35"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#f59e0b]/10">
                  <Eye className="h-8 w-8 text-[#f59e0b]" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Our Vision
                </h3>
                <p className="leading-relaxed text-gray-400">
                  To be the most trusted name in Patna for technology help, known
                  for our honesty, simple solutions, and real results for our
                  clients.
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 transform bg-gradient-to-r from-[#f59e0b] to-[#d97706] transition-transform duration-200 group-hover:scale-x-100" />
              </motion.div>
            </div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surface"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-12 text-center text-3xl font-bold text-white">
                Our Values
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="group text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#262626] bg-[#121212] transition-colors duration-300 group-hover:border-[#f59e0b]">
                      <value.icon className="h-8 w-8 text-[#f59e0b]" />
                    </div>
                    <h4 className="mb-2 text-xl font-semibold text-white">
                      {value.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-400">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4 text-center text-3xl font-bold text-white">
                Leadership Team
              </h2>
              <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
                Meet the experienced professionals leading our mission to deliver
                excellence
              </p>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-[#171717] via-[#121212] to-[#0c0c0c] shadow-[0_12px_40px_-18px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-[#f59e0b]/30"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="relative h-64 bg-[#0a0a0a]">
                      <ImageWithFallback
                        src={`https://source.unsplash.com/400x600/?${encodeURIComponent(member.image)}`}
                        alt={member.name}
                        className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="mb-1 text-xl font-semibold text-white">
                        {member.name}
                      </h4>
                      <p className="mb-3 text-sm font-medium text-[#f59e0b]">
                        {member.role}
                      </p>
                      <p className="text-sm text-gray-400">{member.bio}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 transform bg-gradient-to-r from-[#f59e0b] to-[#d97706] transition-transform duration-200 group-hover:scale-x-100" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="relative border-t border-[#262626] py-16 md:py-24"
        >
          <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.06]">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto max-w-[1400px] px-6">
            <motion.div
              className="overflow-hidden rounded-3xl border border-[#262626] bg-[#121212] p-10 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-12 text-center">
                <Briefcase className="mx-auto mb-4 h-12 w-12 text-[#f59e0b]" />
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Join Our Team
                </h2>
                <p className="mx-auto max-w-2xl text-gray-400">
                  We&apos;re always looking for talented individuals who are
                  passionate about technology and innovation
                </p>
              </div>

              <div className="mx-auto mb-8 max-w-3xl space-y-4">
                {openRoles.map((role, index) => (
                  <div
                    key={index}
                    className="group relative flex flex-col justify-between gap-4 overflow-hidden rounded-xl border border-[#262626] p-6 transition-all duration-200 hover:border-[#f59e0b] hover:bg-[#1a1a1a] md:flex-row md:items-center"
                  >
                    <div>
                      <h4 className="mb-1 font-semibold text-white">
                        {role.title}
                      </h4>
                      <p className="mb-2 text-sm text-gray-400">
                        {role.department} • {role.location}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {role.tech.split(", ").map((tech, i) => (
                          <span
                            key={i}
                            className="rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/10 px-2 py-1 text-xs text-[#f59e0b]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      href="https://forms.gle/gNNNhFhdS545neR58"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="w-full border-[#f59e0b] bg-transparent text-[#f59e0b] hover:bg-[#f59e0b] hover:text-black md:w-auto"
                      >
                        Apply Now
                      </Button>
                    </Link>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 transform bg-gradient-to-r from-[#f59e0b] to-[#d97706] transition-transform duration-200 group-hover:scale-x-100" />
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="https://forms.gle/gNNNhFhdS545neR58"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] px-8 py-6 font-semibold text-black hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Us Your Resume
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </SectionAmbient>
      </div>
    </div>
  );
}
