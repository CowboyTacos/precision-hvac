import React from 'react';
import { ShieldCheck, Users, Award, CheckCircle2, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-blue py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Dedicated to excellence in home comfort since 2010.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Precision in Every Detail</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Precision Heating & Air was founded with a simple mission: to provide honest, high-quality HVAC services that homeowners can rely on. What started as a single truck and a commitment to excellence has grown into a leading service provider in the Springfield region.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We believe that comfort shouldn't be a luxury. That's why we focus on energy-efficient solutions that save our customers money while keeping their homes perfectly tempered. Our growth is built on referrals from satisfied neighbors who appreciate our "no-surprises" approach to pricing and service.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold text-brand-orange mb-2">15+</p>
                  <p className="text-slate-500 font-medium">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-brand-orange mb-2">5k+</p>
                  <p className="text-slate-500 font-medium">Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
                alt="HVAC Team" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-brand-blue">Top Rated Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide every service call.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrity',
                icon: <ShieldCheck className="w-10 h-10 text-brand-orange" />,
                desc: 'We are honest about what you need and what you don\'t. No upselling, just solutions.'
              },
              {
                title: 'Expertise',
                icon: <Award className="w-10 h-10 text-brand-orange" />,
                desc: 'Our technicians undergo continuous training to stay ahead of the latest HVAC technology.'
              },
              {
                title: 'Community',
                icon: <Users className="w-10 h-10 text-brand-orange" />,
                desc: 'We live where we work. Supporting our local community is at the heart of what we do.'
              }
            ].map((value, idx) => (
              <div key={idx} className="card text-center">
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-blue rounded-3xl p-12 text-white">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Certified & Insured</h2>
                <p className="text-slate-300 mb-8 text-lg">
                  Your home is your biggest investment. We protect it by maintaining the highest industry certifications and full insurance coverage.
                </p>
                <div className="space-y-4">
                  {[
                    'NATE Certified Technicians',
                    'EPA 608 Certified',
                    'Licensed & Bonded',
                    'Energy Star Partner',
                    'BBB A+ Accredited'
                  ].map((cert) => (
                    <div key={cert} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange mr-3" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-8 rounded-2xl flex items-center justify-center">
                  <span className="font-bold text-xl">NATE</span>
                </div>
                <div className="bg-white/10 p-8 rounded-2xl flex items-center justify-center">
                  <span className="font-bold text-xl">EPA</span>
                </div>
                <div className="bg-white/10 p-8 rounded-2xl flex items-center justify-center">
                  <span className="font-bold text-xl">BBB</span>
                </div>
                <div className="bg-white/10 p-8 rounded-2xl flex items-center justify-center">
                  <span className="font-bold text-xl">HVAC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
