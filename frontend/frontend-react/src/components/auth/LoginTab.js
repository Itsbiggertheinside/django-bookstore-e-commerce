import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

function LoginTab() {

    const history = useHistory()

    const loginData = { email: '', password: '' }

    const emailHandler = e => loginData.email = e.target.value
    const passwordHandler = e => loginData.password = e.target.value


    const loginHandler = () => {

        function getCookie(name) {
            let cookieValue = null
            if (document.cookie && document.cookie !== '') {
                const cookies = document.cookie.split(';')
                for (let i = 0; i < cookies.length; i++) {
                    const cookie = cookies[i].trim()
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
                        break
                    }
                }
            }
            return cookieValue
        }

        const csrftoken = getCookie('csrftoken')

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // 'username': 'tufankilinc',
                email: 'tufankilinc@outlook.com',
                password: '6DsPG55gK'
            })
        }
        
        fetch('http://127.0.0.1:8000/rest-auth/login/', requestOptions)
        .then(response => response.json())
        .catch(error => console.log(error))

    }

    return (
        <div>
            <Form onSubmit={() => loginHandler()}>
                <Form.Group controlId="loginEmail">
                    <Form.Label>Email adresi: </Form.Label>
                    <Form.Control onChange={e => emailHandler(e)} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        Email adres bilgileriniz kimseyle paylaşılmamaktadır.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="loginPassword">
                    <Form.Label>Parola: </Form.Label>
                    <Form.Control onChange={e => passwordHandler(e)} type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="outline-dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default LoginTab
