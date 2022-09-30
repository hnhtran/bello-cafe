const BASE_URL = '/api/users';

export async function signUp(userData) {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(userData)
    })
    if (res.ok) return res.json();
    throw new Error('Invalid Sign Up');
}