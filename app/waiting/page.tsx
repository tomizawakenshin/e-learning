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

const WaitingPage = () => {
    useDisableScroll();
    const [user] = useAuthState(auth);
    useEffect(() => {
        // const unsubscribe = subscribeToGameStartAndNavigate(
        //     user?.uid || "user is not defined"
        // );
        // development buildではuseEffectは2回実行されるそうです
        // https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development

        // クリーンアップ関数を返してリスナーを解除

        // startWatchingQuizPostedTeams(() => {
        //     console.log(
        //         "startWatchingQuizPostedTeams: callback function was called!"
        //     );
        //     goToPage("/answer?index=0");
        // });

        return () => {
            GameStart();
        };
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-900 text-white">
            <ImageSection src={sandwichPersonImage.src} alt="sandwich" width="w-64" />
            <TextSection
                mainText="スタンバイ..."
                subText="暇つぶし"
                description="マッチ棒を2本動かして人にして"
            />
            <ImageSection src={matchStickImage.src} alt="match" width="w-96" />
        </div>
    );
};

export default WaitingPage