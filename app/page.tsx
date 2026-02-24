export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <section className="mb-24">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Zubin Mehta
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mb-6 leading-relaxed">
            AI Engineer focused on building real-world LLM and agentic systems that solve practical business problems.
          </p>

          <div className="flex gap-4">
            <a href="/projects" className="bg-white text-black px-5 py-2 rounded-lg font-medium">
              View Projects
            </a>

            <a href="/contact" className="border border-gray-700 px-5 py-2 rounded-lg">
              Contact Me
            </a>
          </div>
        </section>

        {/* HIGHLIGHT */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">
            What I Build
          </h2>

          <p className="text-gray-400 max-w-3xl">
            I design and build AI systems that go beyond prototypes — including LLM-powered applications, agentic workflows, and production-grade GenAI systems with reliability, validation, and real-world usability.
          </p>
        </section>

        {/* FEATURED PROJECT */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Featured Work
          </h2>

          <div className="border border-gray-800 p-6 rounded-2xl hover:border-gray-600 hover:bg-white/5 transition duration-300">
            <h3 className="text-xl font-medium mb-2">
              Text-to-SQL AI System
            </h3>

            <p className="text-gray-400 mb-4">
              Converts natural language into SQL queries using LLMs with validation layers, safety controls, and structured execution pipelines.
            </p>

            <p className="text-gray-500 mb-4">
              Tech: Python, OpenAI API, SQL, LangChain, LangGraph
            </p>

            <a
              href="https://github.com/ZubinMehta27/text-to-sql"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}