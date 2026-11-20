export const  getAllFitData = async() =>{
    const data = await fetch(
        "https://api.api-store.workers.dev/api/fitlog",
        {cache:"no-store"}
    );
    return data.json();
}
