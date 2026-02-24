export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <section className="mb-20">
          <h1 className="text-5xl font-bold mb-6">Zubin Mehta</h1>

          <p className="text-xl text-gray-400 max-w-2xl">
            AI Engineer building real-world GenAI and agentic systems that solve practical business problems.
          </p>
        </section>

        {/* PROJECTS */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-10">Projects</h2>

          <div className="space-y-10">

            <div className="border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition">
              <h3 className="text-2xl font-medium mb-2">Text-to-SQL AI System</h3>

              <p className="text-gray-400 mb-4">
                Built an AI system that converts natural language queries into SQL using LLMs. 
                Enables users to interact with databases without writing SQL manually.
              </p>

              <ul className="text-gray-400 mb-4 list-disc list-inside">
                <li>Converts plain English to SQL queries</li>
                <li>Handles dynamic user inputs</li>
                <li>Designed for real-world data querying use cases</li>
              </ul>

              <a 
                href="https://github.com/ZubinMehta27/text-to-sql"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View on GitHub →
              </a>
            </div>

            <div className="border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition">
              <h3 className="text-2xl font-medium mb-2">RAG-based AI Assistant</h3>
              <p className="text-gray-400 mb-4">
                Developed a retrieval-augmented system that answers queries using custom datasets and contextual reasoning.
              </p>
              <a href="#" className="text-blue-400 hover:underline">
                View Project →
              </a>
            </div>

            <div className="border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition">
              <h3 className="text-2xl font-medium mb-2">End-to-End AI Application</h3>
              <p className="text-gray-400 mb-4">
                Designed a full-stack AI product with real-time user interaction, backend APIs, and LLM integration.
              </p>
              <a href="#" className="text-blue-400 hover:underline">
                View Project →
              </a>
            </div>

          </div>
        </section>

        {/* ABOUT */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">About</h2>
          <p className="text-gray-400 max-w-3xl">
            I transitioned from a non-technical background into AI engineering, focusing on building systems that are not just intelligent, but useful in real-world scenarios. I specialize in LLM applications, agentic workflows, and production-ready AI systems.
          </p>
        </section>

        {/* CONTACT */}
        <p className="text-gray-400 mb-2">
          Email: 
          <a href="mailto:zubin.mehta11@gmail.com" className="text-blue-400 hover:underline ml-1">
            zubin.mehta11@gmail.com
          </a>
        </p>

        <p className="text-gray-400 mb-2">
          GitHub: 
          <a href="https://github.com/ZubinMehta27" target="_blank" className="text-blue-400 hover:underline ml-1">
            github.com/ZubinMehta27
          </a>
        </p>

        <p className="text-gray-400">
          LinkedIn: 
          <a href="https://linkedin.com/in/iamzubinmehta" target="_blank" className="text-blue-400 hover:underline ml-1">
            linkedin.com/in/iamzubinmehta
          </a>
        </p>

      </div>
    </main>
  );
}