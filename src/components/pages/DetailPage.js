import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/dataContext';

const DetailPage = (props) => {
    const { data } = useContext(DataContext);
    const [dataDetail, setDataDetail] = useState(null);
    console.log(props.match.params.name);
    const name = props.match.params.name;
    useEffect(() => {
        const findedData = data.find((item) => item.meta.name === name);
        console.log('findedData', findedData);
        if (findedData) {
            setDataDetail(findedData);
        }
    }, [data, name]);

    console.log('datadetail', dataDetail);
    return <div>Detail Page</div>;
};

export default DetailPage;
