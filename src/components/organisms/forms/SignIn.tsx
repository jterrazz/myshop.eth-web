import React, { useState } from 'react';
import Link from 'next/link';

export interface SignInFormProps {
    submitSignInHandler: (any) => Promise<void>;
}

export const SignInForm: React.FC<SignInFormProps> = ({ submitSignInHandler }) => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const _handleCredentialChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    const _submitForm = async (event: React.MouseEvent | React.KeyboardEvent) => {
        event.preventDefault();
        await submitSignInHandler(credentials);
    };

    return (
        <form>
            <div className='text-md-center text-left mb-4'>
                <h1 className='text--xl'>Log in</h1>
            </div>
            <label className='w-100'>
                <span className='text--sm font-weight-500'>Email</span>
                <br />
                <input
                    className='tom-input--white w-100 mt-1 input--md'
                    name='email'
                    type='email'
                    value={credentials.email}
                    onChange={_handleCredentialChange}
                />
            </label>
            <label className='w-100'>
                <span className='text--sm font-weight-500'>Password</span>
                <br />
                <input
                    className='tom-input--white w-100 mt-1 input--md'
                    name='password'
                    type='password'
                    value={credentials.password}
                    onChange={_handleCredentialChange}
                />
            </label>
            <br />
            <button type='submit' className='rounded button--primary button--md mt-2 w-100' onClick={_submitForm}>
                Log in
            </button>
            <Link href='/signup'>
                <a>
                    <button className='rounded button--md border-0 bg-gray--light mt-3 w-100'>
                        <span className='text-muted'>Don't have an account ?</span> <span>Register</span>
                    </button>
                </a>
            </Link>
        </form>
    );
};
