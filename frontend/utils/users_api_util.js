export const fetchAllUsers = () => {
    return $.ajax({
        url: '/api/users',
        method: 'GET'
    })
}

export const updateUser = (user) => {
    return $.ajax({
        url: `/api/users/${user.id}`,
        method: 'PATCH',
        data: { user }
    })
}

export const fetchUser = (user) => {
    return $.ajax({
        url: `/api/users/${user.id}`,
        method: 'GET',
        data: { user }
    })
}