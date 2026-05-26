export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111827]">
      <div className="w-96 h-96 bg-[#1F2937] border border-[#4B5563] shadow-lg rounded-lg p-8 flex flex-col justify-center">
        
        <h1 className="text-[#F9FAFB] text-3xl font-bold text-center mb-2">
          Sign In
        </h1>

        <p className="text-[#F9FAFB] text-center mb-8">
          Sign in to your account
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="bg-[#374151] text-[#9CA3AF] border border-[#4B5563] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="bg-[#374151] text-[#9CA3AF] border border-[#4B5563] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="bg-[#3B82F6] text-[#F9FAFB] py-2 rounded-md hover:bg-blue-700 transition">
            Sign In
          </button>
        </div>

      </div>
    </div>
  );
}