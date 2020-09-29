import styled from 'styled-components'

export const Box = styled.div`
    width: 800px;
    height: 230px;
    background: rgba(20, 20, 20, 0.2);
    border-radius: 10px;
    overflow: hidden;

    display: flex;
    flex-direction: row;

`

export const Infos = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const Items = styled.div`
    box-sizing: border-box;
    width: 50%;
    color: #fff;
    box-sizing: border-box;
    align-items: center;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    // justify-content: space-between;
`

export const SpanTitle = styled.span`
    font-size: 12pt;
    font-weight: bold;
    text-transform: uppercase;
`

export const SpanContent = styled.span`
    font-size: 12pt;
    font-weight: normal;

    ${(props) => {
        if (props.transform === 'capitalize') {
            return `text-transform: capitalize;`
        } else if (props.transform === 'uppercase') {
            return `text-transform: uppercase;`
        }
    }}
`

export const CarImg = styled.img`
    height: 230px;
`