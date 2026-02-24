export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">Contact</h1>

        <p className="text-gray-400 mb-4">
          Feel free to reach out for collaborations or opportunities.
        </p>

        {/* EMAIL */}
        <p className="text-gray-400 mb-3">
          Email:
          <a 
            href="mailto:zubin.mehta11@gmail.com"
            className="text-blue-400 hover:underline ml-2"
          >
            zubin.mehta11@gmail.com
          </a>
        </p>

        {/* GITHUB */}
        <p className="text-gray-400 mb-3">
          GitHub:
          <a 
            href="https://github.com/ZubinMehta27"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline ml-2"
          >
            github.com/ZubinMehta27
          </a>
        </p>

        {/* LINKEDIN */}
        <p className="text-gray-400">
          LinkedIn:
          <a 
            href="https://www.linkedin.com/in/iamzubinmehta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline ml-2"
          >
            linkedin.com/in/iamzubinmehta
          </a>
        </p>

      </div>
    </main>
  );
}