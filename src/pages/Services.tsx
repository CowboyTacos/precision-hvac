import React from 'react';
import { motion } from 'motion/react';
import { Snowflake, Flame, Wind, Thermometer, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'ac-repair',
      title: 'AC Repair',
      icon: <Snowflake className="w-12 h-12 text-blue-500" />,
      image: 'https://picsum.photos/seed/ac-repair/1000/800',
      description: 'Is your air conditioner blowing warm air or making strange noises? Our expert technicians can diagnose and repair any AC issue quickly.',
      features: ['24/7 Emergency Repair', 'All Brands & Models', 'Refrigerant Leak Detection', 'Compressor Repair']
    },
    {
      id: 'ac-installation',
      title: 'AC Installation',
      icon: <Wind className="w-12 h-12 text-emerald-500" />,
      image: 'https://picsum.photos/seed/ac-install/1000/800',
      description: 'Upgrade to a high-efficiency cooling system. We help you choose the right unit for your home size and budget.',
      features: ['Energy-Efficient Units', 'Professional Sizing', 'Ductwork Inspection', 'Financing Available']
    },
    {
      id: 'furnace-repair',
      title: 'Furnace Repair',
      icon: <Flame className="w-12 h-12 text-orange-500" />,
      image: 'https://picsum.photos/seed/furnace-repair/1000/800',
      description: 'Don\'t stay in the cold. We provide fast furnace and heating system repairs to keep your family warm all winter.',
      features: ['Gas & Electric Furnaces', 'Heat Pump Repair', 'Thermostat Calibration', 'Safety Inspections']
    },
    {
      id: 'heating-installation',
      title: 'Heating Installation',
      icon: <Thermometer className="w-12 h-12 text-red-500" />,
      image: 'https://picsum.photos/seed/heating-install/1000/800',
      description: 'Modern heating systems are more efficient than ever. We install top-tier furnaces and heat pumps designed for longevity.',
      features: ['Custom System Design', 'High-AFUE Ratings', 'Smart Thermostat Integration', 'Warranty Protection']
    },
    {
      id: 'maintenance',
      title: 'Preventative Maintenance',
      icon: <ShieldCheck className="w-12 h-12 text-slate-500" />,
      image: 'https://picsum.photos/seed/hvac-maintenance/1000/800',
      description: 'Regular maintenance extends the life of your HVAC system and prevents costly breakdowns. Join our Comfort Club today.',
      features: ['Seasonal Tune-ups', 'Filter Replacements', 'System Cleaning', 'Priority Scheduling']
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-blue py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our HVAC Services</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Comprehensive heating and cooling solutions delivered with precision and care.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:items-center gap-12 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                <div className="lg:w-1/2">
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 hidden sm:block">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <h2 className="text-3xl font-bold text-brand-blue">{service.title}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-brand-orange mr-3 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <a href="tel:5550123" className="btn-primary">
                      Schedule Service
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Not Sure What You Need?</h2>
          <p className="text-slate-600 mb-10 text-lg">
            Our experts are happy to help you diagnose your issue over the phone or schedule a comprehensive inspection.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:5550123" className="btn-primary px-10">Call (555) 0123</a>
            <button className="btn-outline px-10">Free Estimate</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
