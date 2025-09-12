// src/app/api/enter-giveaway/route.ts

import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase'; // Importamos nuestra conexión a la base de datos
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, ticket } = body;

    // --- Validación de Datos ---
    if (!name || !phone || !ticket) {
      return NextResponse.json({ message: 'Name, phone, and ticket are required.' }, { status: 400 });
    }

    // --- Guardado en Firestore ---
    // 1. Apuntamos a nuestra colección 'giveaway_entries'
    const entriesCollection = collection(db, 'giveaway_entries');

    // 2. Añadimos un nuevo documento con los datos del usuario
    await addDoc(entriesCollection, {
      name: name,
      phone: phone,
      ticket: ticket,
      createdAt: serverTimestamp() // Añadimos una marca de tiempo del servidor
    });
    
    // --- Respuesta Exitosa ---
    return NextResponse.json({ message: 'Successfully registered!' }, { status: 200 });

  } catch (error) {
    console.error('Error al registrar en Firestore:', error);
    return NextResponse.json({ message: 'An internal error occurred.' }, { status: 500 });
  }
}