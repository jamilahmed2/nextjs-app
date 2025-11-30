

const userDetails = async ({params}:{params: Promise<{id: string}>}) => {
    const {id} = await params;
    return (
        <div>
            <h1>User Details Page </h1>
            <p>User ID: {id}</p>
        </div>
    )
}

export default userDetails