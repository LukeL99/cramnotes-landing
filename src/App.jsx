import { Player } from '@remotion/player';
import { DemoVideo } from './remotion/DemoVideo';
import { useState } from 'react';

// Icons
const BookIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// Feature icons
const features = [
  {
    icon: "📝",
    title: "Key Concepts Extracted",
    description: "Main ideas from each section, clearly explained and easy to memorize.",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    icon: "❓",
    title: "Likely Exam Questions",
    description: "AI predicts what your professor might ask based on the content.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: "⚡",
    title: "Quick Facts & Mnemonics",
    description: "Bite-sized facts and memory tricks for fast recall during exams.",
    color: "bg-amber-100 text-amber-600"
  },
  {
    icon: "📖",
    title: "Definitions Library",
    description: "All important terms collected in one searchable glossary.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    description: "Track what you've studied and what still needs review.",
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: "📤",
    title: "Export Anywhere",
    description: "Download as PDF, Markdown, or sync to Notion and Anki.",
    color: "bg-cyan-100 text-cyan-600"
  },
];

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
              <BookIcon />
            </div>
            <span className="font-bold text-xl">CramNotes<span className="text-indigo-600">.ai</span></span>
          </div>
          <a href="#waitlist" className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium transition-colors">
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 to-white overflow-hidden relative">
        <div className="absolute top-10 -left-20 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-400 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/80 rounded-full px-4 py-2 mb-6 text-sm font-medium text-gray-600 shadow-sm">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                AI-Powered Study Assistant
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                Turn Any Textbook PDF into{' '}
                <span className="text-indigo-600">Exam-Ready Notes</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Stop wasting hours reading entire chapters. Upload your PDF, tell us the topics, and get perfectly structured notes you can actually study from. Built by students, for students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#waitlist" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-center transition-all hover:shadow-lg hover:shadow-indigo-200">
                  Get Early Access — It's Free
                </a>
                <a href="#demo" className="flex items-center justify-center gap-2 text-gray-600 hover:text-indigo-600 font-medium transition-colors">
                  <PlayIcon />
                  See How It Works
                </a>
              </div>
              <div className="flex items-center gap-4 mt-8 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-200 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-green-200 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-yellow-200 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-pink-200 border-2 border-white"></div>
                </div>
                <span><strong className="text-gray-700">500+</strong> students on the waitlist</span>
              </div>
            </div>
            
            {/* Remotion Video Player */}
            <div id="demo" className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <Player
                  component={DemoVideo}
                  durationInFrames={360}
                  fps={30}
                  compositionWidth={640}
                  compositionHeight={400}
                  style={{ width: '100%' }}
                  loop
                  autoPlay
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Study Smarter in 3 Steps</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">No more highlighting entire chapters. Get structured, exam-ready notes in minutes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Upload Your PDF', desc: 'Drag and drop any textbook PDF. We support files up to 500 pages.', color: 'bg-indigo-100 text-indigo-600' },
              { step: '2', title: 'Select Your Topics', desc: 'Tell us exactly what chapters or topics you need to study for your exam.', color: 'bg-emerald-100 text-emerald-600' },
              { step: '3', title: 'Get Exam-Ready Notes', desc: 'AI extracts key concepts, definitions, likely exam questions, and more.', color: 'bg-amber-100 text-amber-600' },
            ].map(item => (
              <div key={item.step} className="text-center">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notes That Actually Help You Pass</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Not just summaries. Structured study material designed for exam success.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(feature => (
              <div key={feature.title} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4 text-2xl`}>
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Student-Friendly Pricing</h2>
            <p className="text-gray-600">Start free. Upgrade when you need more.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free */}
            <div className="border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-2">Free</h3>
              <p className="text-gray-600 mb-6">Perfect for trying it out</p>
              <div className="text-4xl font-bold mb-6">$0<span className="text-lg font-normal text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                {['3 documents per month', 'Up to 50 pages each', 'PDF & Markdown export', 'Basic quiz mode'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="block w-full text-center py-3 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Get Started
              </a>
            </div>
            
            {/* Pro */}
            <div className="border-2 border-indigo-600 rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <p className="text-gray-600 mb-6">For serious students</p>
              <div className="text-4xl font-bold mb-6">$9<span className="text-lg font-normal text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                {['Unlimited documents', 'Up to 500 pages each', 'All export formats + Anki', 'Advanced quiz mode', 'Priority processing', 'No watermarks'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="block w-full text-center py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="py-20 bg-indigo-600">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Study Smarter?</h2>
          <p className="text-indigo-200 mb-8 text-lg">Join 500+ students already on the waitlist. Get early access and 3 months free when we launch.</p>
          {submitted ? (
            <div className="bg-white/10 rounded-xl p-6 max-w-md mx-auto">
              <div className="text-white text-xl font-semibold mb-2">🎉 You're on the list!</div>
              <p className="text-indigo-200">We'll notify you when we launch.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-xl border-0 focus:ring-2 focus:ring-white/50 outline-none"
                required
              />
              <button type="submit" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Join Waitlist
              </button>
            </form>
          )}
          <p className="text-indigo-200 text-sm mt-4">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white">
              <BookIcon />
            </div>
            <span className="font-medium text-white">CramNotes.ai</span>
          </div>
          <p className="text-sm">© 2026 CramNotes. Built with ❤️ for students everywhere.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
