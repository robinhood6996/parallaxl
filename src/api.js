

export const getComments = async () => {
    return [
        {
            id: 1,
            body: "This is first comment",
            username: "Robin",
            userId: 1,
            parentId: null,
            createdAt: "2021-08-16T23:00:33.010+02:00"
        },
        {
            id: 2,
            body: "This is second comment",
            username: "Robin",
            userId: 2,
            parentId: null,
            createdAt: "2021-09-16T23:00:33.010+02:00"
        },
        {
            id: 3,
            body: "First commnet First child",
            username: "Rakib",
            userId: 3,
            parentId: 1,
            createdAt: "2021-08-16T24:00:33.010+02:00"
        },
        {
            id: 4,
            body: "Second commnet First child",
            username: "Hasan",
            userId: 4,
            parentId: 2,
            createdAt: "2021-08-16T25:00:33.010+02:00"
        }
    ];

};


export const createComment = async (text, parentId = null) => {
    return {
        id: Math.random().toString(36).substr(2, 9),
        body: text,
        parentId,
        userId: 1,
        username: 'Robin',
        createdAt: new Date().toISOString(),
    };
};







