// src/app/api/get-entries/route.ts

import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function GET(request: Request) {
  // Medida de seguridad: Comprobar una clave secreta
  const secret = request.headers.get('Authorization');

  // Compara la clave secreta con la que guardaremos en nuestras variables de entorno
  if (secret !== `Bearer ${process.env.ADMIN_SECRET_KEY}`) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const entriesCollection = collection(db, 'giveaway_entries');
    const entriesSnapshot = await getDocs(entriesCollection);

    const entries = entriesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return NextResponse.json(entries, { status: 200 });

  } catch (error) {
    console.error('Error fetching entries from Firestore:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}