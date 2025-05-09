'use client';
import { useState, useEffect, JSX, Children } from 'react';
import styles from './Members.module.css';
import SidebarToggle from '../SidebarToggle';
import Swal from 'sweetalert2';

// Define a User type for state
type User = {
  email: string;
  role: string;
  groupRole?: string;
  assignedGroup?: string;
};

export default function MembersPage(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);
  const [groupName, setGroupName] = useState<string>('');
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  // Carga inicial de usuarios
  const loadUsers = (): void => {
    const raw = localStorage.getItem('users') || '[]';
    const all = JSON.parse(raw) as User[];
    setUsers(all.filter(u => u.role !== 'admin'));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // Asigna rol en grupo
  const handleAssignGroupRole = (email: string, newRole: string): void => {
    const raw = localStorage.getItem('users') || '[]';
    const all = (JSON.parse(raw) as User[]).map(u =>
      u.email === email ? { ...u, groupRole: newRole } : u
    );
    localStorage.setItem('users', JSON.stringify(all));
    Swal.fire({
      text: `Rol asignado a ${email}: ${newRole}.`,
      icon: "success",
      confirmButtonColor: '#ef4444',
      iconColor: '#ef4444',
      confirmButtonText: 'Cerrar',
      scrollbarPadding: false 
    });
    loadUsers();
  };

  // Agrega o quita usuario de la selección
  const toggleUserSelection = (user: User): void => {
    setSelectedUsers(prev =>
      prev.some(u => u.email === user.email)
        ? prev.filter(u => u.email !== user.email)
        : [...prev, user]
    );
  };

  // Elimina usuario completamente
  const handleDeleteUser = (email: string): void => {
    if (!confirm(`¿Eliminar usuario ${email} de forma permanente?`)) return;
    const raw = localStorage.getItem('users') || '[]';
    const all = (JSON.parse(raw) as User[]).filter(u => u.email !== email);
    localStorage.setItem('users', JSON.stringify(all));
    Swal.fire({
      text: `Usuario ${email} eliminado correctamente.`,
      icon: "success",
      confirmButtonColor: '#ef4444',
      iconColor: '#ef4444',
      confirmButtonText: 'Cerrar',
      scrollbarPadding: false 
    });
    // También lo quitamos de la selección si estaba
    setSelectedUsers(prev => prev.filter(u => u.email !== email));
    loadUsers();
  };

  // Crea y asigna un nuevo grupo
  const handleCreateGroup = (): void => {
    if (!groupName.trim()) {
      Swal.fire({
        text: `Debes ingresar un nombre para el grupo.`,
        icon: "error",
        confirmButtonColor: '#ef4444',
        iconColor: '#ef4444',
        confirmButtonText: 'Cerrar',
        scrollbarPadding: false 
      });
      return;
    }
    const raw = localStorage.getItem('users') || '[]';
    const all = JSON.parse(raw) as User[];
    const groupMembers = all.filter(u => u.assignedGroup === groupName.trim());
    // Validaciones...
    if (groupMembers.length + selectedUsers.length > 5) {
      Swal.fire({
        text: `El grupo "${groupName}" no puede tener más de 5 integrantes.`,
        icon: "error",
        confirmButtonColor: '#ef4444',
        iconColor: '#ef4444',
        confirmButtonText: 'Cerrar',
        scrollbarPadding: false 
      });
      return;
    }
    const currentSM = groupMembers.filter(u => u.groupRole === 'scrum-master').length;
    const newSM = selectedUsers.filter(u => u.groupRole === 'scrum-master').length;
    if (currentSM + newSM > 1) {
      Swal.fire({
        text: "Sólo se permite un Scrum Master por grupo.",
        icon: "error",
        confirmButtonColor: '#ef4444',
        iconColor: '#ef4444',
        confirmButtonText: 'Cerrar',
        scrollbarPadding: false 
      });
      return;
    }
    const updated = all.map(u =>
      selectedUsers.some(s => s.email === u.email)
        ? { ...u, assignedGroup: groupName.trim() }
        : u
    );
    localStorage.setItem('users', JSON.stringify(updated));
         Swal.fire({
            text: `Grupo "${groupName}" creado y asignado.`,
            icon: "success",
            confirmButtonColor: '#ef4444',
            iconColor: '#ef4444',
            confirmButtonText: 'Cerrar',
            scrollbarPadding: false 
          });
    setGroupName('');
    setSelectedUsers([]);
    loadUsers();
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/img/starfish.png" alt="Ga-Starfish Logo" className={styles.logoImage} />
          <span className={styles.projectName}>Ga-Starfish</span>
        </div>

        <h1 className={styles.pageTitle}>Panel de Administración</h1>

        <div className={styles.menuWrapper}>
          <SidebarToggle>­</SidebarToggle>
        </div>
      </header>
    
      <section className={styles.usersList}>
        <h2>Usuarios Registrados</h2>
        {users.length === 0 ? (
          <span><h3>No hay usuarios registrados.</h3></span>
        ) : (
        users.map(u => (
          <div key={u.email} className={styles.userCard}>
            <div className={styles.userInfo}>
              <strong>{u.email}</strong>
              <span><strong>Rol:</strong> {u.groupRole || 'N/A'}</span>
              <span><strong>Grupo:</strong> {u.assignedGroup || 'N/A'}</span>
            </div>
            <div className={styles.actions}>
              <label>Asignar rol:</label>
              <select
                value={u.groupRole || ''}
                onChange={e => handleAssignGroupRole(u.email, e.target.value)}
                className={styles.select}
              >
                <option value="">Ninguno</option>
                <option value="Desarrollador">Desarrollador</option>
                <option value="Scrum Master">Scrum Master</option>
              </select>
              <button
                className={styles.selectBtn}
                onClick={() => toggleUserSelection(u)}
              >
                {selectedUsers.some(s => s.email === u.email) ? 'Quitar' : 'Agregar'}
              </button>
              <button
                className={styles.deleteBtn}
                onClick={() => handleDeleteUser(u.email)}
              >Eliminar</button>
            </div>
          </div>
        ))
        )}
      </section>

      <aside className={styles.groupCreator}>
        <h2>Crear Grupo</h2>
        <input
          className={styles.input}
          type="text"
          placeholder="Nombre del grupo"
          value={groupName}
          onChange={e => setGroupName(e.target.value)}
        />
        <button className={styles.button} onClick={handleCreateGroup}>
          Crear y Asignar
        </button>
        <div className={styles.selectedUsers}>
          <h3>Usuarios seleccionados:</h3>
          {selectedUsers.length > 0 ? (
            <table className={styles.selectedTable}>
              <thead>
                <tr>
                  <th>Usuario</th>
                  <th>Rol</th>
                </tr>
              </thead>
              <tbody>
                {selectedUsers.map(u => (
                  <tr key={u.email}>
                    <td>{u.email}</td>
                    <td>{u.groupRole || 'Sin rol'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Ninguno</p>
          )}
        </div>
      </aside>
    </main>
  );
}

