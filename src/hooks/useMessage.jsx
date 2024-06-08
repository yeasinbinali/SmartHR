import React from 'react';
import useAxiosPrivate from './useAxiosPrivate';

const useMessage = () => {
    const axiosSecure = useAxiosPrivate();
};

export default useMessage;