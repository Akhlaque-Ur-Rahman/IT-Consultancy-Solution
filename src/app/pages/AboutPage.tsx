import { motion } from 'motion/react';
import { teamMembers } from '../data/mockData';
import { Target, Eye, Award, Users, Briefcase, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
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
    { title: 'Senior Full-Stack Developer', department: 'Engineering', location: 'Remote/Hybrid' },
    { title: 'UI/UX Designer', department: 'Design', location: 'Gurugram' },
    { title: 'Digital Marketing Manager', department: 'Marketing', location: 'Remote' },
    { title: 'Compliance Specialist', department: 'Legal', location: 'Gurugram' },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gradient-to-br from-[#f9fafb] to-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            About TechConsult Pro
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
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
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://source.unsplash.com/800x600/?office,technology,team"
              alt="Team at work"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            className="bg-gradient-to-br from-[#1a3a5c] to-[#0f2642] rounded-2xl p-10 text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Target className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-white/90">
              To empower businesses with cutting-edge technology solutions and expert guidance, 
              enabling them to scale efficiently, compete effectively, and achieve sustainable growth.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-[#14b8a6] to-[#0f766e] rounded-2xl p-10 text-white"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Eye className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-white/90">
              To be India's most trusted IT consulting partner, known for delivering exceptional 
              value, fostering innovation, and creating lasting impact for businesses of all sizes.
            </p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#14b8a6] to-[#0f766e] flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Leadership Team</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Meet the experienced professionals leading our mission to deliver excellence
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="relative h-64 bg-gray-100">
                  <ImageWithFallback
                    src={`https://source.unsplash.com/400x600/?${encodeURIComponent(member.image)}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-sm text-[#14b8a6] font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Careers Section */}
        <motion.div
          className="bg-white rounded-3xl border-2 border-gray-200 p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <Briefcase className="w-12 h-12 text-[#14b8a6] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about technology and innovation
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto mb-8">
            {openRoles.map((role, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 rounded-xl border border-gray-200 hover:border-[#14b8a6] hover:bg-gray-50 transition-all duration-200"
              >
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{role.title}</h4>
                  <p className="text-sm text-gray-600">
                    {role.department} • {role.location}
                  </p>
                </div>
                <Button
                  onClick={() => onNavigate('contact')}
                  variant="outline"
                  className="border-[#14b8a6] text-[#14b8a6] hover:bg-[#14b8a6] hover:text-white"
                >
                  Apply Now
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-[#1a3a5c] hover:bg-[#0f2642] text-white px-8"
            >
              <Mail className="mr-2 w-4 h-4" />
              Send Us Your Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
