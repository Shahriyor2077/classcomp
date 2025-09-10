import  { useState } from "react";

const User = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!name.trim() || !age) return alert("Ism va yoshni kiriting");
    const Age = Number(age);
    if (Number.isNaN(Age) || Age <= 0) {
      return alert("Yosh musbat son bo'lishi kerak");
    }
    if (editingUser) {
      setUsers((prev) => prev.map((u) => (u.id === editingUser.id ? { ...u, name: name.trim(), age: Age } : u)));
      setEditingUser(null);
      setName("");
      setAge("");
      return;
    }
    const newUser = { id: Date.now(), name: name.trim(), age: Age };
    setUsers((prev) => [...prev, newUser]);
    setName("");
    setAge("");
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const handleEdit = (user) => {
    setName(user.name);
    setAge(String(user.age));
    setEditingUser(user);
  };

  const handleCancel = () => {
    setEditingUser(null);
    setName("");
    setAge("");
  };

  return (
    <div className="p-4">
      <h1>Users</h1>

      <form onSubmit={handleAddUser} className="mt-3 flex flex-col gap-2 max-w-sm">
        <input
          type="text"
          placeholder="Ism"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Yosh"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border p-2 rounded"
        />
        <div className="flex gap-2">
          <button type="submit" className="bg-blue-600 text-white px-3 py-2 rounded">{editingUser ? "Edit" : "Create"}</button>
          {editingUser && (
            <button type="button" onClick={handleCancel} className="px-3 py-2 rounded border">Cancel</button>
          )}
        </div>
      </form>

      <div className="mt-4">
        <h2>Users</h2>
        {users.length ? (
          <ul className="mt-3 max-w-sm">
            {users.map((u) => (
              <li key={u.id} className="py-2 border-b">
                <div>{u.name}</div>
                <div className="text-sm text-gray-600">{u.age} age</div>
                <div className="mt-2 flex gap-2">
                  <button onClick={() => handleEdit(u)} className="px-2 py-1 bg-green-500 text-white border rounded">Editing</button>
                  <button onClick={() => handleDelete(u.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Not found</p>
        )}
      </div>
    </div>
  );
};

export default User;
