class UsersService {
    login = (values) => {
        return fetch('http://localhost:3000/user', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.status !== 202) {
                throw new Error('Invalid Login')
            } else {
                return response.json();
            }
        }).then((obj) => {
            return obj.token;
        });
    }
}