export async function fetchDados<T>(url: string): Promise<T | null> {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error");
        const json = (await response).json();
        return json;
    } catch (error) {
        if (error instanceof Error)
            console.error("FetectData: " + error.message);
        return null;
    }
}
