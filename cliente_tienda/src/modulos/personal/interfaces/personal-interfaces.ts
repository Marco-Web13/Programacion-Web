export interface Personal {
    id: number,
    nombre: string,
    direccion: string,
    telefono: string,
    estado: number;
}

export type PersonalAgregar = Omit<Personal, 'id'>;