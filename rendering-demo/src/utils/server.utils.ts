import "server-only";

export const serverSideFunction = () => {
    console.log(
        `
        use multiple libraries,
        use environment variables,
        interactive with database,
        process confidential information,
`
    );
    return "Server Side Function";
}