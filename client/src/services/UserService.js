
export async function getAllUsers() {

    const response = await fetch('/api/users');
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch('/api/user', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}

export async function deleteUser(data){
    const response = await fetch('/api/data', {
        method : 'DELETE',
        headers : {'content-type' : 'application/json'},
        body  : JSON.stringify({data : data})
    })
    return await response.json();
}

// export async function setStackSize(data) {
//     const response = await fetch('/api/size', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json',
//         'Accept': 'application/json'},
//         body: JSON.stringify({stackSize: data})
//       })
//     return await response.json();

// }