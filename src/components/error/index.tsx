import React from 'react'
import { Text } from '@/components';

interface ErrorProps {
    errorText: string;
}

const Error: React.FC<ErrorProps> = ({ errorText }) => {
    return (
        <Text weight='bold' align='center'>{errorText}</Text>
    )
}

export default Error;