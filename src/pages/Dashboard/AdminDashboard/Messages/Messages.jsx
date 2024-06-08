import React from 'react';
import PrivateContainerHeader from '../../../../components/PrivateContainerHeader/PrivateContainerHeader';
import useMessage from '../../../../hooks/useMessage';

const Messages = () => {
    const [messages] = useMessage();
    console.log(messages);
    return (
        <div className='mt-5 ml-5'>
            <PrivateContainerHeader title="All Messages from Employees and HR"></PrivateContainerHeader>
            <div className='grid grid-cols-3 gap-10'>
                {messages.map(message => <div className='h-40 overflow-y-scroll border-[1px] border-black px-5 py-2'>
                    <p>Name: {message.name}</p>
                    <p className='my-2'>Email: <span className='font-bold'>{message.email}</span></p>
                    <p>Message: {message.message}</p>
                </div>)}
            </div>
        </div>
    );
};

export default Messages;