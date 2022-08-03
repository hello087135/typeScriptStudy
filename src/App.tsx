import { useState, useRef, ReactElement } from 'react'
import reactLogo from './assets/react.svg'
import type { MouseEvent, MouseEventHandler } from 'react'
import './App.css'

function App ():ReactElement {
    const [count, setCount] = useState(0)
    const MyComponent = (): JSX.Element => {
        return <p>我的组件</p>
    }
    const FcTypeComponent: React.FC<{names:string}> = (obj):JSX.Element => {
        return <p>FC类型组件</p>
    }
    const GenericComponent = <T extends {name:string}>(props:T) => {
        return <p>{props.name}</p>
    }
    // useCallback
    // const callbackFunction = useCallback<()=>void>(():void => {
    //     console.log('callback函数')
    // }
    // ,[count])
    // useMemo
    // const myMemo = useMemo<string>(()=>'11',[count])
    // useRef
    // const myRef = useRef<string>('长命百岁')
    const myRef2 = useRef<RefTest>(null)
    console.log(myRef2.current?.handleClick())
    const handleClick:MouseEventHandler<HTMLButtonElement> = (e:MouseEvent<HTMLButtonElement>) => {
        console.log('click')
    }
    const arr:any = [{ name: '1' }, { name: '2' }]
    arr[3] = []
    console.log(arr)
    return (
        <div className="App">
            <div >
                <a href="https://vitejs.dev" target="_blank" rel='noreferrer'>
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank" rel='noreferrer'>
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <MyComponent/>
            <FcTypeComponent names='string'/>
            <GenericComponent<{name:string}> name="111" />
            {/* <MyCom ref={myRef2} name="11"/> */}
            <button onClick={handleClick}>点击</button>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
