import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
    name:'todo',
    initialState:{
        task:[{
            name:"Explore India",
            isDone:true,
            id:1
        },
        {
            name:"Explore Nepal",
            isDone:false,
            id:2
        }
    ],
        lastIndex:3
    },
    reducers:{
        create:(state,data)=>{
            state.task.push(
                {
                    ...data.payload,
                    id:state.lastIndex
                }
            )
            state.lastIndex = state.lastIndex+1
        },
        toggle:(state,data)=>{
            for(var i = 0;i<state.task.length;i++)
            {
                if(state.task[i].id === data.payload.id)
                    break;
            }
            state.task[i].isDone = !state.task[i].isDone
        },
        clear:(state)=>{
            state.task=[]
            state.lastIndex=1
        }
    }
})

export const {create,toggle,clear} = toDoSlice.actions
export default toDoSlice.reducer