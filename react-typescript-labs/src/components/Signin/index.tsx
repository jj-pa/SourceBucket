import React, { FC } from 'react';
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from './SigninElements';

type Props = {};

const SignIn: FC<Props> = (props: Props) => {
  return (
    <>
      <Container>
        <FormWrap>
          <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
            <div className="container mx-auto">
              <div className="w-3/4 max-w-lg mx-auto my-10">
                <div className="text-center">
                  <Icon to="/">SourceBucket</Icon>
                </div>
                <div className="text-center">
                  <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                    Sign in
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400">
                    Sign in to access your account
                  </p>
                </div>
                <div className="m-7">
                  <form action="">
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="you@company.com"
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-100 focus:border-yellow-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      />
                    </div>
                    <div className="mb-6">
                      <div className="flex justify-between mb-2">
                        <label
                          htmlFor="password"
                          className="text-sm text-gray-600 dark:text-gray-400"
                        >
                          Password
                        </label>
                        <a
                          href="#!"
                          className="text-sm text-gray-400 focus:outline-none focus:text-yellow-500 hover:text-yellow-500 dark:hover:text-yellow-300"
                        >
                          Forgot password?
                        </a>
                      </div>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Your Password"
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-100 focus:border-yellow-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      />
                    </div>
                    <div className="mb-6">
                      <button
                        type="button"
                        className="w-full px-3 py-4 text-white bg-yellow-500 rounded-md focus:bg-yellow-600 focus:outline-none"
                      >
                        Sign in
                      </button>
                    </div>
                    <p className="text-sm text-center text-gray-400">
                      Don&#x27;t have an account yet?{' '}
                      <a
                        href="#!"
                        className="text-yellow-400 focus:outline-none focus:underline focus:text-yellow-500 dark:focus:border-yellow-800"
                      >
                        Sign up
                      </a>
                      .
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
