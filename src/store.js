export const login = ()=>({ type: "LOGIN" });
export const logout = ()=>({ type: "LOGOUT" });


const initstate = {
    isLogin: false,
};


// 함수형 Side Effect
const reducer = (state = initstate, action) =>{
    switch(action.type){
        case "LOGIN":
            return { isLogin:true };
        case "LOGOUT":
            return { isLogin:false };
        default:
            return state;    
    }
};

export default reducer;