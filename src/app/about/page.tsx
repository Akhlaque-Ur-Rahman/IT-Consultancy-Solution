'use client';

import { motion } from 'motion/react';
import { teamMembers } from '@/data/mockData';
import { Target, Eye, Award, Users, Briefcase, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Customer-Centric',
      description: 'We put our clients\' success at the heart of everything we do',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver exceptional quality in every project we undertake',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work as an extension of your team to achieve shared goals',
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'We leverage cutting-edge technologies to solve complex challenges',
    },
  ];

  const openRoles = [
    { 
      title: 'Frontend Developer Intern', 
      department: 'Engineering', 
      location: 'Remote',
      tech: 'React, Next.js, TypeScript, UI/UX'
    },
    { 
      title: 'Backend Developer Intern', 
      department: 'Engineering', 
      location: 'Remote',
      tech: 'Node.js, Express, PostgreSQL, Docker'
    },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            About TechConsult Pro
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Empowering businesses through technology, innovation, and expert guidance since 2015
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Founded in 2015, TechConsult Pro began with a simple mission: to help businesses navigate 
                the complexities of digital transformation with confidence and clarity.
              </p>
              <p>
                What started as a small team of passionate developers and consultants has grown into a 
                full-service IT consulting firm serving 250+ clients across India and beyond.
              </p>
              <p>
                Today, we combine deep technical expertise with business acumen to deliver end-to-end 
                solutions—from web development and CRM systems to compliance services and digital marketing.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden border border-[#262626]">
            <ImageWithFallback
              src="https://source.unsplash.com/800x600/?office,technology,team"
              alt="Team at work"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            className="group relative overflow-hidden bg-[#121212] border border-[#262626] rounded-2xl p-10 hover:border-[#f59e0b]/50 transition-colors duration-300"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#f59e0b]/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#f59e0b]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To empower businesses with cutting-edge technology solutions and expert guidance, 
              enabling them to scale efficiently, compete effectively, and achieve sustainable growth.
            </p>
            {/* Animation */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#f59e0b] to-[#d97706] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
          </motion.div>

          <motion.div
            className="group relative overflow-hidden bg-[#121212] border border-[#262626] rounded-2xl p-10 hover:border-[#f59e0b]/50 transition-colors duration-300"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#f59e0b]/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#f59e0b]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To be India's most trusted IT consulting partner, known for delivering exceptional 
              value, fostering innovation, and creating lasting impact for businesses of all sizes.
            </p>
            {/* Animation */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#f59e0b] to-[#d97706] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-16 h-16 rounded-full bg-[#121212] border border-[#262626] group-hover:border-[#f59e0b] flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-[#f59e0b]" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Leadership Team</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Meet the experienced professionals leading our mission to deliver excellence
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="group relative overflow-hidden bg-[#121212] rounded-2xl border border-[#262626] hover:border-[#f59e0b]/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="relative h-64 bg-[#0a0a0a]">
                  <ImageWithFallback
                    src={`https://source.unsplash.com/400x600/?${encodeURIComponent(member.image)}`}
                    alt={member.name}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-1">{member.name}</h4>
                  <p className="text-sm text-[#f59e0b] font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-400">{member.bio}</p>
                </div>
                {/* Animation */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#f59e0b] to-[#d97706] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Careers Section */}
        <motion.div
          className="bg-[#121212] rounded-3xl border border-[#262626] p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <Briefcase className="w-12 h-12 text-[#f59e0b] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about technology and innovation
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto mb-8">
            {openRoles.map((role, index) => (
              <div
                key={index}
                className="group relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl border border-[#262626] hover:border-[#f59e0b] hover:bg-[#1a1a1a] transition-all duration-200 gap-4"
              >
                <div>
                  <h4 className="font-semibold text-white mb-1">{role.title}</h4>
                  <p className="text-sm text-gray-400 mb-2">
                    {role.department} • {role.location}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {role.tech.split(', ').map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href="https://forms.gle/gNNNhFhdS545neR58" target="_blank">
                    <Button
                    variant="outline"
                    className="w-full md:w-auto border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-black bg-transparent"
                    >
                    Apply Now
                    </Button>
                </Link>
                {/* Animation */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#f59e0b] to-[#d97706] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="https://forms.gle/gNNNhFhdS545neR58" target="_blank">
                <Button
                className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-black font-semibold hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] px-8 py-6"
                >
                <Mail className="mr-2 w-4 h-4" />
                Send Us Your Resume
                </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
