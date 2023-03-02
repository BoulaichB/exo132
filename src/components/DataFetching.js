import React, { useState, useEffect } from 'react';
import axios from 'axios';

// ## Exo 1
// - créer un projet react
// - faites un call api (méthode fetch ou installer axios)
// - stocker les données dans un state qui est un tableau vide
// - faites un map qui affichera toutes les données

// api link {
//     "https://jsonplaceholder.typicode.com/posts"
//     "https://www.balldontlie.io/api/v1/teams"
//     "https://github.com/public-apis/public-apis#index"
//     ou api au choix si vous en trouvez une
// }

const DataFetching = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        axios.get('https://www.balldontlie.io/api/v1/teams')
            .then(res => {
                // console.log(res.data.data);
                setDatas(res.data.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [setDatas])
  return (
    <div>
        <h1>Exercice 131</h1>
        <div>
            {datas.map((data, index) => (
                <p key={index}>{data.abbreviation}</p>
            ))}
        </div>
    </div>
  )
}

export default DataFetching;