'use client';
import { FC } from 'react';
import { ToastContainer } from 'react-toastify';

export const ToastProvider: FC = () => {
    return <ToastContainer position="top-right" theme='dark' autoClose={3000} />;
};
