import React from 'react';
import useAxiosPrivate from './useAxiosPrivate';
import { useQuery } from '@tanstack/react-query';

const useEmployeeSalary = () => {
    const axiosSecure = useAxiosPrivate();
    const { data: payment = [], refetch } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payment');
            return res.data;
        }
    })
    return [payment, refetch];
};

export default useEmployeeSalary;