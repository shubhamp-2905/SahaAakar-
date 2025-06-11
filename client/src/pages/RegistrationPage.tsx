import { useState } from 'react';
import { useRouter } from '../hooks/useRouter';
import emailjs from '@emailjs/browser';

export default function RegistrationPage() {
  const { navigateTo } = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedinUrl: '',
    currentTitle: '',
    company: '',
    goals: '',
    selectedPlan: 'basic'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const plans = [
    {
      id: 'basic',
      name: '💫 Basic Plan',
      price: '₹499',
      description: 'Perfect for beginners who want a polished presence.',
      features: [
        'LinkedIn Bio rewrite',
        'Headline optimization',
        '1 Custom Banner Design'
      ]
    },
    {
      id: 'standard',
      name: '🌟 Standard Plan',
      price: '₹749',
      description: 'Best for individuals ready to start building authority.',
      features: [
        'Full LinkedIn Profile Rewrite',
        '4 Ghostwritten LinkedIn Posts',
        'Visual Styling Theme',
        'Growth Tips for Consistency'
      ]
    },
    {
      id: 'premium',
      name: '🚀 Premium Plan',
      price: '₹999',
      description: 'Ideal for those who want long-term impact & weekly growth.',
      features: [
        'Everything in Standard',
        '12 Ghostwritten LinkedIn Posts',
        'Weekly Strategy Check-ins',
        'DM + Connection Plan',
        'Personalized Design Tweaks'
      ]
    }
  ];

  const selectedPlanDetails = plans.find(plan => plan.id === formData.selectedPlan);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // EmailJS configuration from Vite environment variables
      const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const businessEmail = import.meta.env.VITE_BUSINESS_EMAIL || 'connect.sahaakar@gmail.com';

      // Enhanced validation with specific error messages
      if (!emailjsServiceId) {
        console.error('VITE_EMAILJS_SERVICE_ID is missing');
        setMessage('Email service configuration error: Service ID missing. Please contact support.');
        return;
      }

      if (!emailjsTemplateId) {
        console.error('VITE_EMAILJS_TEMPLATE_ID is missing');
        setMessage('Email service configuration error: Template ID missing. Please contact support.');
        return;
      }

      if (!emailjsPublicKey) {
        console.error('VITE_EMAILJS_PUBLIC_KEY is missing');
        setMessage('Email service configuration error: Public key missing. Please contact support.');
        return;
      }

      // Initialize EmailJS (this is crucial!)
      emailjs.init(emailjsPublicKey);

      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        linkedin_url: formData.linkedinUrl || 'Not provided',
        current_title: formData.currentTitle || 'Not provided',
        company: formData.company || 'Not provided',
        goals: formData.goals || 'Not provided',
        selected_plan: selectedPlanDetails?.name,
        plan_price: selectedPlanDetails?.price,
        plan_description: selectedPlanDetails?.description,
        plan_features: selectedPlanDetails?.features.join(', '),
        to_email: businessEmail,
        message: `New registration from ${formData.firstName} ${formData.lastName} for ${selectedPlanDetails?.name} (${selectedPlanDetails?.price})`
      };

      console.log('Sending email with params:', templateParams);

      // Send email using EmailJS with better error handling
      const response = await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        templateParams
      );

      console.log('EmailJS response:', response);

      if (response.status === 200) {
        setIsSubmitted(true);
        setMessage('Thank you for your request. We will reach you soon!');
        
        // Reset form on success
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          linkedinUrl: '',
          currentTitle: '',
          company: '',
          goals: '',
          selectedPlan: 'basic'
        });
      } else {
        console.error('EmailJS failed with status:', response.status);
        setMessage('Registration failed. Please try again or contact support.');
      }
    } catch (error) {
      console.error('Registration error details:', error);
      
      // More specific error handling
      if (error instanceof Error) {
        if (error.message.includes('Failed to fetch')) {
          setMessage('Network error. Please check your internet connection and try again.');
        } else if (error.message.includes('Invalid template ID')) {
          setMessage('Email template configuration error. Please contact support.');
        } else if (error.message.includes('Invalid service ID')) {
          setMessage('Email service configuration error. Please contact support.');
        } else {
          setMessage(`Registration failed: ${error.message}. Please try again or contact support.`);
        }
      } else {
        setMessage('Registration failed due to an unexpected error. Please try again or contact support.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show thank you message after successful submission
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-12 rounded-2xl shadow-lg">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Thank You!</h1>
              <p className="text-xl text-gray-600 mb-8">
                Your registration has been received successfully. We will reach out to you soon to get started on your LinkedIn growth journey.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setMessage('');
                }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Join <span className="gradient-text">SahaAakar</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your LinkedIn presence? Choose your plan and let's get started on building your personal brand.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Registration Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get Started</h2>
              
              {message && !isSubmitted && (
                <div className={`p-4 rounded-lg mb-6 ${message.includes('successful') || message.includes('Thank you') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    name="linkedinUrl"
                    value={formData.linkedinUrl}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Title
                    </label>
                    <input
                      type="text"
                      name="currentTitle"
                      value={formData.currentTitle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Software Engineer, Marketing Manager, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your current company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your LinkedIn Goals
                  </label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us what you want to achieve with your LinkedIn presence..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Your Plan *
                  </label>
                  <select
                    name="selectedPlan"
                    value={formData.selectedPlan}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {plans.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {plan.name} - {plan.price}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Selected Plan Summary */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Selected Plan Summary:</h4>
                  <div className="text-blue-700">
                    <p className="font-medium">{selectedPlanDetails?.name}</p>
                    <p className="text-lg font-bold text-blue-600">{selectedPlanDetails?.price}</p>
                    <p className="text-sm mt-1">{selectedPlanDetails?.description}</p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Start My LinkedIn Growth Journey'}
                </button>
              </form>
            </div>

            {/* Plan Details */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose SahaAakar?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    100+ profiles optimized successfully
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    95% success rate in achieving client goals
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    Personalized strategy for your industry
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    Quick turnaround within 24-48 hours
                  </li>
                </ul>
              </div>

              {plans.map((plan) => (
                <div key={plan.id} className={`p-6 rounded-2xl border-2 transition-all ${formData.selectedPlan === plan.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h4>
                  <div className="text-2xl font-bold gradient-text mb-2">{plan.price}</div>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}