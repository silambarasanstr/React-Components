export default function QuickLogin({ credentials = [], onSelect }) {
  return (
    <div className="pt-4 mt-5 border-t">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
          Quick Login
        </p>

        <span className="text-[11px] text-gray-400">Click to autofill</span>
      </div>

      <div className="space-y-2">
        {credentials.map((credential) => (
          <button
            key={credential.email}
            type="button"
            onClick={() => onSelect(credential.email, credential.password)}
            className={`flex w-full items-center justify-between rounded-lg border p-2.5 transition ${credential.className}`}
          >
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-800">
                {credential.icon} {credential.role}
              </p>

              <p className="text-[11px] text-gray-500">{credential.email}</p>
            </div>

            <span
              className={`rounded px-2 py-1 text-[10px] font-semibold ${credential.badgeClass}`}
            >
              USE
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}


// use
// const quickCredentials = [
//   {
//     role: "Admin",
//     icon: "👨‍💼",
//     email: "admin@example.com",
//     password: "123456",
//     className: "border-gray-200 hover hover",
//     badgeClass: "bg-blue-100 text-blue-700",
//   },
//   {
//     role: "Member",
//     icon: "👤",
//     email: "member@example.com",
//     password: "123456",
//     className: "border-gray-200 hover hover",
//     badgeClass: "bg-green-100 text-green-700",
//   },
// ];
// const fillCredentials = (email, password) => {
//     setForm({
//       email,
//       password,
//     });
//   };
 // <QuickLogin credentials={quickCredentials} onSelect={fillCredentials} />
