import React from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Detail() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state === null) {
            navigate('/');
        }
    });

    if (location.state) {
        const { title } = location.state;
        return <span>{title}</span>;
    }
    return null;
}

export default Detail;

/* 
v5에서는 Route가 props로 location을 자동으로 전달했기 때문에 내부 요소인 location을 분해하여 사용할 수 있었다
v6 부터는 hook으로 가져오게 변경되었다. 대표적으로 useLoaction(), useParams(), useNavigate()
*/
