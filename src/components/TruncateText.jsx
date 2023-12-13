import React from 'react'

const TruncateText = ({ text, maxLength }) => {
    if (text.length <= maxLength) {
        return <span>{text}</span>;
    }

    const truncatedText = `${text.slice(0, maxLength)}...`;

    return <span>{truncatedText}</span>;
}

export default TruncateText;