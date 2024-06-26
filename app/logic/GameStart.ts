import { listenToGameStart } from "./listenToGameStart"
import { goToPage } from "./server/goToPage";

export const GameStart = () => {
    return listenToGameStart(async () => {
        goToPage('/answer');
    })
}