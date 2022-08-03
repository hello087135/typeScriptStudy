
import {forwardRef,useImperativeHandle,ForwardRefRenderFunction,Ref,ComponentProps} from 'react'
type MyProps = ComponentProps<'button'>
function MyCom(props:RefProps,ref:RefTest):JSX.Element {
    function handleClick() {
        console.log('click');
    }
    useImperativeHandle<RefTest,RefTest>(ref,()=>{
        return {
            handleClick
        }
    },[])
    return <div>
        <p>我的组件</p>
    </div>
}

export default forwardRef<RefTest,RefProps>(MyCom);