import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

// ## Exo 2
// - Après l'affichage des données, au clique d'une donnée affiche les infos de cette données avec l'affichage conditionnelle

const DataFetching = (props) => {
    const [datas, setDatas] = useState([]);
    const [allData, setAllData] = useState('');

    const loadDatas = (e) => {
        axios.get(`https://www.balldontlie.io/api/v1/teams/${e.target.id}`)
            .then(res => {
                // setAllData(res.data);
                props.setData(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    
    useEffect(() => {
        axios.get('https://www.balldontlie.io/api/v1/teams')
            .then(res => {
                setDatas(res.data.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [setDatas])
  return (
    <div>
        
        <div>
            {datas.map((data) => (
                <div>
                    <Link to={`/donnee/${data.id}`}><p key={data.id} id={data.id} onClick={loadDatas}>{data.abbreviation}</p></Link>
                </div>
                

            ))}
        </div>
    </div>
  )
}

export default DataFetching;