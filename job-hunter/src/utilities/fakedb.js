// use local storage to manage cart data
const addToDb = id => {
    let appliedJob = getAppliedJob();
    // add quantity 
    const quantity = appliedJob[id];
    if (!quantity) {
        appliedJob[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        appliedJob[id] = newQuantity;
    }
    localStorage.setItem('applied-job', JSON.stringify(appliedJob));
}

const removeFromDb = id => {
    const appliedJobs = getAppliedJob();
    if (id in appliedJobs) {
        delete appliedJobs[id];
        localStorage.setItem('applied-job', JSON.stringify(appliedJobs));
    }
}

const getAppliedJob = () => {
    let appliedJobs = {};

    //get the shopping cart from local storage
    const storedAppliedJob = localStorage.getItem('applied-job');
    if (storedAppliedJob) {
        appliedJobs = JSON.parse(storedAppliedJob);
    }
    return appliedJobs;
}

const deleteAppliedJob = () => {
    localStorage.removeItem('applied-job');
}

export {
    addToDb,
    removeFromDb,
    getAppliedJob,
    deleteAppliedJob 
}