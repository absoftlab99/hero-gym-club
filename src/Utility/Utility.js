const breakTimeStore =(time)=>{
    localStorage.setItem('break-time',time)
}

const getStoredBreakTime = () =>{   
    const data =localStorage.getItem('break-time');
    return parseInt(data);
}

export {
    breakTimeStore,
    getStoredBreakTime
}