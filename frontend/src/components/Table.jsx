export default function Table() {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b">Name</th>
          <th className="px-4 py-2 border-b">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2 border-b">John Doe</td>
          <td className="px-4 py-2 border-b">john@example.com</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border-b">Jane Smith</td>
          <td className="px-4 py-2 border-b">jane@example.com</td>
        </tr>
      </tbody>
    </table>
  );
}