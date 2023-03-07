import React from 'react';
import {appFirebase} from '../../credenciales'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {Flex} from '../../style-components/flex/Flex';
import {Title} from '../../style-components/title/Title';
import {Input} from '../../style-components/input/Input';
import {Button} from '../../style-components/buttons/Button';

const auth = getAuth(appFirebase)

export const Login = () => {
    const [registration, setRegistration] = React.useState(false);
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const emailValue = e.target.email.value
        const passwordValue = e.target.password.value

        if (registration) {
            await createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        } else {
            await signInWithEmailAndPassword(auth, emailValue, passwordValue)
        }
    }

    return (
        <Flex justify={'center'}>
            <div>
                <Title color={'blue'}>{registration ? 'Registration' : 'LogIn'}</Title>

                <form onSubmit={handleSubmit}>

                    <div>
                        <label>Email</label>
                        <Input name="name" type='email' placeholder='email' id='email' required/>
                    </div>

                    <div>
                        <label>Password</label>
                        <Input name='password' type='password' placeholder='password' id='password' required/>

                    </div>

                    <Button>
                        {registration ? 'Registration' : 'LogIn'}
                    </Button>
                </form>

                <div>
                    <Button width={'100%'} color={'grey'} onClick={() => setRegistration(!registration)}>
                        {registration ? 'Do you have account? LogIn' : 'Have not account? Registration'}
                    </Button>
                </div>
            </div>
        </Flex>
    );
};

// <Flex justify={'center'}>
//     <div>
//         <Title color={'blue'}>{registration ? 'Registration' : 'LogIn'}</Title>
//
//         <form onSubmit={handleSubmit}>
//
//             <div>
//                 <label>Email</label>
//                 <Input name="name" type='email' placeholder='email' required/>
//             </div>
//
//             <div>
//                 <label>Password</label>
//                 <Input name='password' type='password' placeholder='password' required/>
//             </div>
//
//             <Button>
//                 {registration ? 'Registration' : 'LogIn'}
//             </Button>
//         </form>
//
//         <div>
//             <Button color={'grey'} width={'100%'} onClick={() => setRegistration(!registration)}>
//                 {registration ? 'Do you have account? LogIn' : 'Have not account? Registration'}
//             </Button>
//         </div>
//     </div>
// </Flex>