import { db } from '@/app/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
    const flagsDocRef = doc(db, 'StartFlag', 'isStart');
    try {
        const flagsDoc = await getDoc(flagsDocRef);
        if (flagsDoc.exists()) {
            const currentFlagStatus = flagsDoc.data().Flag;
            await updateDoc(flagsDocRef, {
                Flag: !currentFlagStatus
            });

        }
        return NextResponse.json({ message: 'ゲームが開始されました' });
    } catch (err) {
        console.error(err);
        return NextResponse.json("Error occured!")
    }
}
