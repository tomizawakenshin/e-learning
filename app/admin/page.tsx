'use client';

import React from 'react'
import { handleStartGame } from '../logic/handleStartGame'

const page = () => {
    return (
        <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
            <div className="text-center mb-4">
                <h1 className="text-xl font-bold mb-2">管理画面</h1>
                <button
                    className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 mr-2"
                    onClick={handleStartGame}>
                    ゲームを開始
                </button>
            </div>
        </div>
    )
}

export default page