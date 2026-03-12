import React from 'react';
import { MapPin, CheckCircle2, Phone } from 'lucide-react';

const ServiceAreas = () => {
  const cities = [
    { name: 'Springfield', zip: '12345', desc: 'Our home base, providing lightning-fast response times for all HVAC emergencies.' },
    { name: 'Oakwood', zip: '12346', desc: 'Serving the Oakwood community with premium heating and cooling installations.' },
    { name: 'Riverdale', zip: '12347', desc: 'Expert AC repair and maintenance for residential and commercial properties in Riverdale.' },
    { name: 'Maplewood', zip: '12348', desc: 'Helping Maplewood homeowners save on energy bills with high-efficiency upgrades.' },
    { name: 'Fairview', zip: '12349', desc: 'Reliable furnace repair and preventative maintenance for the Fairview area.' },
    { name: 'Westfield', zip: '12350', desc: 'Comprehensive HVAC solutions for the growing Westfield community.' },
    { name: 'Brookside', zip: '12351', desc: 'Trusted air quality and climate control services for Brookside families.' },
    { name: 'Summit', zip: '12352', desc: 'Top-rated heating and cooling services for homes in the Summit neighborhood.' }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-blue py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Service Areas</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            We proudly serve Springfield and the surrounding communities with expert HVAC care.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-blue mb-8">Where We Work</h2>
              <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                Precision Heating & Air is committed to providing the highest quality HVAC services to our neighbors. Whether you're in the heart of Springfield or in one of the surrounding suburbs, our team is ready to help. We understand the local climate and the specific needs of homes in our region.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cities.map((city) => (
                  <div key={city.name} className="card border-l-4 border-l-brand-orange">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-5 h-5 text-brand-orange mr-2" />
                      <h3 className="text-xl font-bold">{city.name}</h3>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">{city.desc}</p>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">ZIP: {city.zip}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold mb-6">Why Choose a Local Expert?</h3>
                <ul className="space-y-4">
                  {[
                    'Faster Response Times',
                    'Knowledge of Local Codes',
                    'Familiar with Regional Climate',
                    'Community-Focused Service',
                    'Local References Available'
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange mr-3 shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-orange p-8 rounded-3xl text-white">
                <h3 className="text-xl font-bold mb-4">Don't See Your City?</h3>
                <p className="mb-6 opacity-90">
                  We are constantly expanding our service area. Give us a call to see if we can make it to your location!
                </p>
                <a href="tel:5550123" className="bg-white text-brand-orange px-6 py-3 rounded-full font-bold inline-flex items-center w-full justify-center hover:bg-slate-50 transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  (555) 0123
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Text */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Your Trusted Local HVAC Partner</h2>
          <p className="text-slate-600 leading-relaxed">
            Finding a reliable HVAC contractor in the Springfield area shouldn't be a hassle. At Precision Heating & Air, we've built our reputation on transparency, expertise, and a deep commitment to our local community. From emergency AC repairs in Oakwood to new furnace installations in Riverdale, we bring the same level of precision and care to every job. Our technicians are familiar with the unique architectural styles and HVAC requirements of homes across the region, ensuring you get the best possible service every time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServiceAreas;
