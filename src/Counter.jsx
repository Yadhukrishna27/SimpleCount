import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,countWithNum} from './store/counterSlice'

function Counter() {
    const count=useSelector((state)=>state.counterReducer.counter)
    console.log(count)
    const dispatch=useDispatch()
    const [num,setNum]=useState(0)
    
    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{ height: '79vh' }}>
                <div className="w-75 border border-2 border-light">
                    <h3 className='text-center text-danger'>Counter</h3>
                    <h2 className="text-center text-light">{count}</h2>
                    <div className="d-flex justify-content-around">
                        <button className="btn btn-success m-3" onClick={()=>{dispatch(increment())}}>+ Increment</button>
                        <button className="btn btn-danger m-3" onClick={()=>{dispatch(decrement())}}>- Decrement</button>
                        <button className="btn btn-info m-3 " onClick={()=>{dispatch(reset())}}>Reset</button>
                    </div>
                    <div className='m-3 d-flex justify-content-around'>
                        <input type="number" onClick={(e)=>{setNum(e.target.value)}} placeholder='Enter number' className='form-control' />
                        <button className="btn btn-primary" 
                        onClick={()=>{dispatch(countWithNum(num))}}>Count</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter