import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

function RegisterTab() {

    const history = useHistory()

    const registrationData = { email: '', password1: '', password2: '' }

    const emailHandler = e => registrationData.email = e.target.value
    const password1Handler = e => registrationData.password1 = e.target.value
    const password2Handler = e => registrationData.password2 = e.target.value


    const registerHandler = () => {

        function getCookie(name) {
            let cookieValue = null;
            if (document.cookie && document.cookie !== '') {
                const cookies = document.cookie.split(';');
                for (let i = 0; i < cookies.length; i++) {
                    const cookie = cookies[i].trim();
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }

        const csrftoken = getCookie('csrftoken')
        
        fetch('http://127.0.0.1:8000/rest-auth/registration/', {
            method: 'POST',
            headers: {
                'X-CSRFToken': csrftoken,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': '',
                'email': registrationData.email,
                'password1': registrationData.password1,
                'password2': registrationData.password2
            })
        })
        .then(response => {
            response.json()
        })
        .then(data => {
            const token = data.key
            sessionStorage.setItem('token', token)
            history.push('/')
        })
        .catch(error => console.log(error))

    }

    return (
        <div>
            <Form method="POST" onSubmit={() => registerHandler()}>
                <Form.Group controlId="registerEmail">
                    <Form.Label>Email adresi: </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => emailHandler(e)} />
                    <Form.Text className="text-muted">
                        Email adres bilgileriniz kimseyle paylaşılmamaktadır.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="registerPassword1">
                    <Form.Label>Parola: </Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => password1Handler(e)} />
                </Form.Group>

                <Form.Group controlId="registerPassword2">
                    <Form.Label>Parola tekrarı: </Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => password2Handler(e)} />
                </Form.Group>
                <Button variant="outline-dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default RegisterTab
