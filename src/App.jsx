import { useState } from "react"
import { useEffect } from "react";//コンポーネントの副作用を制御するHooks
import { CloloredMessage } from "./components/ColoredMessage";

export const App = () => { /* exportすることで他のファイルでも使えるようになる */
  console.log("レンダリング")
  const [num, setNum] = useState(0)
    /* return以降は1つのタグで囲まれている必要がある */

    const onClickButton = () => {
      setNum(num + 1)
    }


    return (
      <>
        <h1 style={{ color: "red"}}>こんにちは</h1>
          <CloloredMessage color="blue">お元気ですか？</CloloredMessage>
          <CloloredMessage color="pink" >元気です</CloloredMessage>
          <button onClick={onClickButton}>ボタン</button>
        <p>{ num }</p>
      </>
    );
  }