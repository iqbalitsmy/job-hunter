import { getAppliedJob } from "./fakedb";


const appliedJobLoader = async() => {
    const loadedJobs = await fetch('featuredJobs.json');
    const jobs = await loadedJobs.json();
    const storedJobs = getAppliedJob();
    const savedJobs = [];
    for(const id in storedJobs) {
        const addedProduct = jobs.find(pd => pd.id == id);
        if(addedProduct) {
            const quantity = storedJobs[id];
            addedProduct.quantity = quantity;
            savedJobs.push(addedProduct);
        }
    }

    return savedJobs;
}

export default appliedJobLoader;