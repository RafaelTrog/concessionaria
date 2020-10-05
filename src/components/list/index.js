import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {
    Container,
    Title
} from './styles'

import Card from '../card'

export default () => {

    const [cars, setCars] = useState([]);

    const getCars = async () => {
        const config = {
            method: 'get',
            // url: 'https://my-json-server.typicode.com/RafaelTrog/fake-api/carros',
            url: 'https://convergerimos.herokuapp.com/estoque',
            headers: {
                'content-type': 'application/json'
            }
        }

        const res = await axios (config)
        setCars(res.data);
    }

    useEffect(() => {
        getCars();
    }, [])

    const RenderCars = () => {
        if (cars.length > 0) {
            return cars.map((carro) => {
                return (
                    <Card
                        key={carro.id}
                        id={carro.id}
                        marca={carro.marca}
                        modelo={carro.modelo}
                        ano={carro.ano}
                        cor={carro.cor}
                        chassi={carro.chassi}
                        km={carro.km}
                        fipe={carro.fipe}
                        placa={carro.placa}
                        valor={carro.valor}
                        img={carro.img}
                    />
                )
            })
        } else {
            return <p>Nenhum veículo no estoque!</p>
        }
    }

    return (
        <Container>
            <Title>Catálogo</Title>

            {RenderCars()}

            {/* <Card id='21' marca='volkswagen' modelo='up tsi' ano='2020' cor='chumbo' chassi='239872323232' km='35.000' fipe='R$ 37.000,00' placa='APK-3322' valor='R$ 35.000,00' /> */}
        </Container>
    )
}