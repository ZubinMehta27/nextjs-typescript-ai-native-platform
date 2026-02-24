export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">Projects</h1>

        <div className="space-y-10">

          <div className="border border-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-medium mb-2">
              Text-to-SQL AI System
            </h3>

            <p className="text-gray-400 mb-4">
              Converts natural language into SQL queries using LLMs with validation layers and safety controls.
            </p>

            <p className="text-gray-500 mb-4">
              Tech: Python, OpenAI API, SQL, LangChain, LangGraph
            </p>

            <a
              href="https://github.com/ZubinMehta27/text-to-sql"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View on GitHub →
            </a>
          </div>

        </div>

      </div>
    </main>
  );
}