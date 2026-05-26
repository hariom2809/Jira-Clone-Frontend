export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#192734]">
      <div className="w-96 h-96 bg-[#22303C] border border-gray-300 shadow-lg rounded-lg p-8 flex flex-col justify-center">
        
        <h1 className="text-[#FFFFFF] text-3xl font-bold text-center mb-2">
          Sign In
        </h1>

        <p className="text-[#1D9BF0] text-center mb-8">
          Sign in to your account
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="text-[#FFFFFF] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="text-[#FFFFFF] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="bg-blue-700 text-[#FFFFFF] py-2 rounded-md hover:bg-blue-700 transition">
            Sign In
          </button>
        </div>

      </div>
    </div>
  );
}