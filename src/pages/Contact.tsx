import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-blue py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            We're here to help with all your heating and cooling needs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-8">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">Message Sent!</h3>
                  <p className="text-emerald-700">Thank you for reaching out. A member of our team will contact you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-emerald-600 font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Service Needed</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all bg-white">
                      <option>AC Repair</option>
                      <option>AC Installation</option>
                      <option>Heating Repair</option>
                      <option>Heating Installation</option>
                      <option>Maintenance</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 text-lg">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-brand-blue mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-orange-50 p-3 rounded-xl mr-5 shrink-0">
                      <Phone className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Call Us</h4>
                      <p className="text-slate-600 mb-1">Available 24/7 for emergencies</p>
                      <a href="tel:5550123" className="text-xl font-bold text-brand-blue hover:text-brand-orange transition-colors">(555) 0123</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-50 p-3 rounded-xl mr-5 shrink-0">
                      <Mail className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Email Us</h4>
                      <p className="text-slate-600 mb-1">For general inquiries</p>
                      <a href="mailto:info@precisionhvac.com" className="text-lg font-bold text-brand-blue hover:text-brand-orange transition-colors">info@precisionhvac.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-50 p-3 rounded-xl mr-5 shrink-0">
                      <MapPin className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Visit Our Office</h4>
                      <p className="text-slate-600">123 Comfort Lane, Suite 100<br />Springfield, ST 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-blue mb-6 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-brand-orange" />
                  Business Hours
                </h3>
                <div className="space-y-3 text-slate-600">
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span>Saturday</span>
                    <span className="font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed (Emergency Only)</span>
                  </div>
                  <p className="text-sm text-brand-orange font-medium pt-2">
                    * 24/7 Emergency Service available every day of the year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-slate-500 flex-col p-4 text-center">
          <MapPin className="w-12 h-12 mb-4 opacity-20" />
          <p className="text-xl font-medium">Google Maps Embed Placeholder</p>
          <p className="text-sm">In a production app, the interactive map would be loaded here.</p>
        </div>
        {/* Real map would be an iframe here */}
      </section>
    </div>
  );
};

export default Contact;
