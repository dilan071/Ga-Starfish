'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MembersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [groupName, setGroupName] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<any[]>([]);
  const router = useRouter();

  const loadUsers = () => {
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    const nonAdmin = allUsers.filter((u: any) => u.role !== 'admin');
    setUsers(nonAdmin);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleAssignGroupRole = (email: string, newRole: string) => {
    let allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    allUsers = allUsers.map((u: any) => {
      if (u.email === email) {
        return { ...u, groupRole: newRole };
      }
      return u;
    });
    localStorage.setItem('users', JSON.stringify(allUsers));
    alert(`Rol asignado a ${email}: ${newRole}`);
    loadUsers();
  };

  const toggleUserSelection = (user: any) => {
    const exists = selectedUsers.find(u => u.email === user.email);
    if (exists) {
      setSelectedUsers(selectedUsers.filter(u => u.email !== user.email));
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const handleCreateGroup = () => {
    if (!groupName.trim()) {
      alert('Debes ingresar un nombre para el grupo');
      return;
    }
    
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const currentGroupMembers = allUsers.filter((u: any) => u.assignedGroup === groupName.trim());
    

    const totalMembersAfter = currentGroupMembers.length + selectedUsers.length;
    if (totalMembersAfter > 5) {
      alert(`El grupo "${groupName}" no puede tener más de 5 integrantes. Actualmente tiene ${currentGroupMembers.length} miembros.`);
      return;
    }
    
    // Verificar el total de scrum-master en el grupo: 
    // Consideramos los que ya estan asignados y los nuevos seleccionados con rol scrum-master
    const currentScrumMasters = currentGroupMembers.filter((u: any) => u.groupRole === 'scrum-master').length;
    const newScrumMasters = selectedUsers.filter((u: any) => u.groupRole === 'scrum-master').length;
    if (currentScrumMasters + newScrumMasters > 1) {
      alert('Solo se permite un scrum-master por grupo');
      return;
    }
    
    // Actualizar la asignación: a cada usuario seleccionado se le asigna el grupo (si no está ya asignado)
    const updatedUsers = allUsers.map((u: any) => {
      if (selectedUsers.find((s: any) => s.email === u.email)) {
        return { ...u, assignedGroup: groupName.trim() };
      }
      return u;
    });
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    alert(`Grupo "${groupName}" creado y asignado a los usuarios seleccionados`);
    setGroupName('');
    setSelectedUsers([]);
    loadUsers();
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    localStorage.setItem('isLoggedIn', 'false');
    router.push('/login');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Panel de Administración (Admin)</h2>
      <button onClick={handleLogout}>Cerrar Sesión</button>

      <h3>Usuarios Registrados (No Admin):</h3>
      <ul>
        {users.map((u, idx) => (
          <li key={idx} style={{ marginBottom: '1rem' }}>
            <strong>{u.email}</strong> – Rol en grupo: {u.groupRole || 'N/A'} – Grupo: {u.assignedGroup || 'N/A'}
            <br />
            <label>Asignar rol en grupo:</label>
            <select
              value={u.groupRole || ''}
              onChange={e => handleAssignGroupRole(u.email, e.target.value)}
            >
              <option value="">Ninguno</option>
              <option value="scrum-master">Scrum Master</option>
              <option value="user">Usuario Normal</option>
            </select>
            <br />
            <button onClick={() => toggleUserSelection(u)}>
              {selectedUsers.find(s => s.email === u.email) ? 'Quitar del grupo' : 'Agregar al grupo'}
            </button>
          </li>
        ))}
      </ul>

      <h3>Crear Grupo</h3>
      <div>
        <input 
          type="text"
          placeholder="Nombre del grupo"
          value={groupName}
          onChange={e => setGroupName(e.target.value)}
        />
        <button onClick={handleCreateGroup}>Crear y Asignar Grupo</button>
      </div>

      <h4>Usuarios seleccionados:</h4>
      <ul>
        {selectedUsers.map((u, idx) => (
          <li key={idx}>{u.email} – Rol: {u.groupRole || 'No asignado'}</li>
        ))}
      </ul>
    </div>
  );
}
