export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center p-8 lg:p-12">
        {children}
      </div>
      <div className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-yellow-600 to-red-600 text-white p-12">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to KwiK</h1>
        <p className="text-xl text-center max-w-md opacity-90">
          The all-in-one platform to fulfill your midnight cravings, quick groceries and health needs !
        </p>
        {/* <img src="/logo-white.svg" alt="YourApp Logo" className="mt-8 w-40" />  */}
      </div>
    </div>
  );
}