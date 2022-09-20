import { useEffect, useState } from "react"
import axios from "axios"
import { Header } from "./header"
import Style from "./table.module.css"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

export const TableShow=()=>{
  
    const[data,setData]= useState([])
    const[loading,setLoading]= useState(false)
    const[error,setError]= useState(true)
    const[page,SetPage]= useState(1)



      useEffect(()=>{
         fetchdata()
      },[])
    const fetchdata=()=>{
        axios({
            method:"Get",
            url:"https://api.coincap.io/v2/assets",
            
        }).then((task)=>{
            setData(task.data.data)

        }).catch((err)=>{
            setError(err)


        })
    
    }

    console.log(data)



    return(
        <div>
         <Header/>
         <div className={Style.tablecontrol}>

         <TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th>Rank</Th>
        <Th>Name</Th>
        <Th isNumeric>Price</Th>
        <Th>MARKETCAP</Th>
        <Th>Vwap(24HR)</Th>
        <Th>Supply</Th>
        <Th>Volume(24hr)</Th>
        <Th>Change(24hr)</Th>

      </Tr>
    </Thead>
    <Tbody>
      {data.map((elem)=>(
        <Tr>
            <Td>{elem.rank}</Td>
            <Td>{elem.name}</Td>
            <Td>{`$${Math.round(elem.priceUsd * 100)/100}`}</Td>
            <Td>{`$${Math.round(elem.marketCapUsd * 100)/100}`}</Td> 
        

            <Td>{elem.vwap24Hr}</Td>
            <Td>{elem.supply}</Td>
            <Td>{elem.volumeUsd24Hr}</Td>
            <Td>{elem.changePercent24Hr}</Td>
        </Tr>

      ))}

          </Tbody>
   
  </Table>
</TableContainer>
</div>

    
        </div>
    )
}