import React from 'react'

import {
    Box,
    Infos,
    SpanTitle,
    SpanContent,
    CarImg,
    Items
} from './styles'

import CarUrl from '../../assets/blank.png'

export default (props) => {

    const {
        id,
        marca,
        modelo,
        ano,
        cor,
        chassi,
        km,
        fipe,
        placa,
        valor,
        img
    } = props;

    return (
        <Box>
            <CarImg src={(img) ? img : CarUrl} alt="img" />
            <Infos>
                <Items>
                    <SpanTitle>#</SpanTitle>
                    <SpanContent>{id}</SpanContent>
                </Items>
                <Items>
                    <SpanTitle>MARCA</SpanTitle>
                    <SpanContent transform='capitalize'>{marca}</SpanContent>
                </Items>
                <Items>
                    <SpanTitle>MODELO</SpanTitle>
                    <SpanContent transform='uppercase'>{modelo}</SpanContent>
                </Items>
                <Items>
                    <SpanTitle>ANO</SpanTitle>
                    <SpanContent>{ano}</SpanContent>
                </Items>
                <Items>
                    <SpanTitle>COR</SpanTitle>
                    <SpanContent transform='capitalize'>{cor}</SpanContent>
                </Items>
                <Items>
                    <SpanTitle>CHASSI</SpanTitle>
                    <SpanContent>{chassi}</SpanContent>
                </Items>
                <Items>
                    <SpanTitle>KM</SpanTitle>
                    <SpanContent>{km}</SpanContent>
                </Items>
                <Items>
                    <SpanTitle>FIPE</SpanTitle>
                    <SpanContent>{fipe}</SpanContent>
                </Items>
                <Items>
                    <SpanTitle>PLACA</SpanTitle>
                    <SpanContent transform='uppercase'>{placa}</SpanContent>
                </Items>
                <Items>
                    <SpanTitle>VALOR</SpanTitle>
                    <SpanContent>{valor}</SpanContent>
                </Items>
            </Infos>
        </Box>
    )
}