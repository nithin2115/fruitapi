export default function SearchBar({ search, setSearch }) {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search fruits by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-100"
      />
    </div>
  );
}