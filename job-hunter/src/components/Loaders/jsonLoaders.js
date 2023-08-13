const dataFetch = async (url) => {
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error)
    }
}


// Find data for dynamic route
export const findObj = async (jobsId) => {
    let data = []
    try {
        data = await dataFetch("featuredJobs.json").then((data) => (data))
    } catch (error) {
        console.log(error)
    }
    const result = data.find(({id}) => id == jobsId)
    return result;
}

export default dataFetch;
