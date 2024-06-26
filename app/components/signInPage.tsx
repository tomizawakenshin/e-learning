import { signInWithAnonymous } from "../logic/SignInWithAnonymous"

const signInPage = () => {
    return (
        <div className="text-center">

            <button onClick={signInWithAnonymous}>ゲームを開始</button>
        </div>
    )
}

export default signInPage