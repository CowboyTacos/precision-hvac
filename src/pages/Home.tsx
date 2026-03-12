import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, Award, Phone, ArrowRight, Snowflake, Flame, Thermometer, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Emergency Banner */}
      <div className="bg-brand-orange text-white py-2 text-center text-sm font-medium">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-2">
          <Clock className="w-4 h-4" />
          <span>24/7 Emergency HVAC Service Available - Call Now!</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ec3?auto=format&fit=crop&q=80&w=2000" 
            alt="HVAC Technician" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Reliable Heating & Air Services <span className="text-brand-orange">You Can Trust</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              Expert HVAC repair, installation, and maintenance for your home. Our certified technicians ensure your comfort all year round.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:5550123" className="btn-primary text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (555) 0123
              </a>
              <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-4">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Expert HVAC Solutions</h2>
            <p className="text-slate-600">From emergency repairs to energy-efficient installations, we've got you covered.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'AC Repair', 
                icon: <Snowflake className="w-10 h-10 text-blue-500" />,
                desc: 'Fast and reliable air conditioning repair to keep you cool during the hottest days.'
              },
              { 
                title: 'Heating Service', 
                icon: <Flame className="w-10 h-10 text-orange-500" />,
                desc: 'Expert furnace and heating system maintenance and repair for those cold winter nights.'
              },
              { 
                title: 'Installation', 
                icon: <Wind className="w-10 h-10 text-emerald-500" />,
                desc: 'Energy-efficient HVAC system installations tailored to your home\'s specific needs.'
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="card text-center"
              >
                <div className="flex justify-center mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.desc}</p>
                <Link to="/services" className="text-brand-orange font-semibold inline-flex items-center hover:underline">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000" 
                alt="HVAC Service" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block border border-slate-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Award className="w-8 h-8 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-brand-blue">15+ Years</p>
                    <p className="text-sm text-slate-500">Of Trusted Service</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8">Why Precision Heating & Air?</h2>
              <div className="space-y-8">
                {[
                  { 
                    title: 'Certified Technicians', 
                    icon: <ShieldCheck className="w-6 h-6 text-brand-orange" />,
                    desc: 'Our team is fully licensed, insured, and background-checked for your peace of mind.'
                  },
                  { 
                    title: 'Upfront Pricing', 
                    icon: <Award className="w-6 h-6 text-brand-orange" />,
                    desc: 'No hidden fees or surprises. We provide clear, honest estimates before any work begins.'
                  },
                  { 
                    title: 'Satisfaction Guaranteed', 
                    icon: <ShieldCheck className="w-6 h-6 text-brand-orange" />,
                    desc: 'We stand behind our work with a 100% customer satisfaction guarantee.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="bg-orange-50 p-3 rounded-xl mr-5 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Award key={i} className="w-5 h-5 text-brand-orange fill-brand-orange" />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                text: "Precision HVAC saved us during a heatwave! They arrived within 2 hours and fixed our AC quickly. Highly recommend!",
                location: "Springfield"
              },
              {
                name: "Michael Chen",
                text: "Professional, clean, and honest. They explained exactly what was wrong with my furnace and gave me a fair price.",
                location: "Oakwood"
              },
              {
                name: "Robert Miller",
                text: "We had a full system replacement. The crew was respectful of our home and the new unit works perfectly. Very efficient!",
                location: "Riverdale"
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                <p className="text-slate-300 italic mb-6">"{t.text}"</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-slate-400 text-sm">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Serving Your Neighborhood</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
            We provide expert HVAC services to Springfield and the surrounding communities. Check our full service area to see if we're in your town.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Springfield', 'Oakwood', 'Riverdale', 'Maplewood', 'Fairview'].map(city => (
              <span key={city} className="bg-slate-100 px-4 py-2 rounded-full text-slate-700 font-medium">
                {city}
              </span >
            ))}
          </div>
          <Link to="/service-areas" className="btn-outline">
            View All Service Areas
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-blue rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Get Comfortable?</h2>
              <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                Don't wait for a breakdown. Schedule your service or maintenance today and experience the Precision difference.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:5550123" className="btn-primary text-lg px-10">
                  Call (555) 0123
                </a>
                <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-slate-900 text-lg px-10">
                  Book Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
