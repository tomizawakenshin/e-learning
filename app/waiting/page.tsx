'use client';

import React, { useEffect } from 'react'
import ImageSection from '../components/ImageSection';
import TextSection from '../components/TextSection';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useDisableScroll } from '../logic/useDisableScroll';
import sandwichPersonImage from '@/public/Image/person-on-sandwich.gif';
import matchStickImage from '@/public/Image/match-stick.png';
import { GameStart } from '../logic/GameStart';
import { useRouter } from 'next/navigation';

const WaitingPage = () => {
    const router = useRouter();

    useDisableScroll();
    const [user] = useAuthState(auth);
    useEffect(() => {
        return () => {
            GameStart();
        };
    }, [user]);

    const handleGameStart = () => {
        router.push('/answer');
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-900 text-white">
            <ImageSection src={sandwichPersonImage.src} alt="sandwich" width="w-64" />
            <TextSection
                mainText="StandBy..."
                subText="Passing time"
                description="Move two matchsticks to make them 「人」"
            />
            <ImageSection src={matchStickImage.src} alt="match" width="w-96" />
            {/* <button
                className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 mr-2"
                onClick={handleGameStart}>
                デモで動かす場合はこちらから
            </button> */}

        </div>
    );
};

export default WaitingPage