import { Github, MessageCircle, Book, Heart } from 'lucide-react';

const Community = () => {
  const communityLinks = [
    {
      icon: Github,
      title: 'GitHub',
      description: 'Source code, issues, and contributions',
      link: 'https://github.com/vuiodev/vuio',
      color: 'bg-gray-900 hover:bg-gray-800'
    },
    {
      icon: MessageCircle,
      title: 'Discord',
      description: 'Join our community chat',
      link: '#',
      color: 'bg-indigo-600 hover:bg-indigo-700'
    },
    {
      icon: Book,
      title: 'Documentation',
      description: 'Guides, API reference, and tutorials',
      link: '#',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: Heart,
      title: 'Sponsor',
      description: 'Support the project development',
      link: '#',
      color: 'bg-pink-600 hover:bg-pink-700'
    }
  ];

  return (
    <section id="community" className="py-20 bg-gray-50 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join the Community
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with other users, contribute to the project, and help shape the future of Vuio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={index}
                href={link.link}
                className={`${link.color} text-white rounded-xl p-6 transition-colors block group`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconComponent className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">{link.title}</h3>
                <p className="text-sm opacity-90">{link.description}</p>
              </a>
            );
          })}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Contribute to Vuio
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Vuio is open source and welcomes contributions from developers of all skill levels.
              Whether it's code, documentation, or bug reports, every contribution helps make Vuio better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/vuiodev/vuio/blob/main/CONTRIBUTING.md"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contributing Guide
              </a>
              <a
                href="https://github.com/vuiodev/vuio/issues"
                className="border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-700 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Report Issues
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;