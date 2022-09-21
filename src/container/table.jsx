import { useEffect, useState } from "react"
import axios from "axios"
import { Header } from "./header"
import Style from "./table.module.css"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react'

export const TableShow = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(true)
  const [page, Setpage] = useState(1)
  const [sorts, setSort] = useState("desc")
  





  useEffect(() => {
    fetchdata()
    setLoading(true)
  }, [page])


  const fetchdata = () => {
    axios({
      method: "GET",
      url: "https://api.coincap.io/v2/assets",
      params: {
        _page: page,
        _limit: 30,

      }

    }).then((task) => {
      setData(task.data.data)
      setLoading(false)

    }).catch((err) => {
      setError(err)
      setLoading(false)


    })

  }

  console.log(data)



  return (
    <div>
      <Header />

      {loading && <div className={Style.loadingindicater}> ...loading</div>}
      <div className={Style.tablecontrol}>

        <TableContainer>
          <Table size='sm'>
            <Thead>
              <Tr>
                <Th>Rank</Th>
                <Th>Name</Th>
                <Th>Price</Th>
                <Th>MARKETCAP</Th>
                <Th>Vwap(24HR)</Th>
                <Th>Supply</Th>
                <Th>Volume(24hr)</Th>
                <Th>Change(24hr)</Th>

              </Tr>
            </Thead>
            <Tbody>
              {data.map((elem, index) => {
                let profit = elem.changePercent24Hr >= 0;

                return (
                  <Tr key={index}>
                    <Td>{elem.rank}</Td>
                    <Td className={Style.name}>
                      <img src={"https://assets.coincap.io/assets/icons/eth@2x.png"} />
                      {elem.name} <br></br><br></br>
                      {elem.symbol}
                    </Td>
                    <Td>{`$${Math.round(elem.priceUsd * 100) / 100}`}</Td>
                    <Td>{`$${Math.round(elem.marketCapUsd * 100) / 100}`}</Td>

                    <Td>{`$${Math.round(elem.vwap24Hr * 100) / 100}`}</Td>
                    <Td>{`${Math.round(elem.supply * 100) / 100}`}</Td>


                    <Td>{`$${Math.round(elem.volumeUsd24Hr * 100) / 100}`}</Td>
                    <Td style={{ color: profit > 0 ? "green" : "red" }}>
                      {/* {profit && "+"} */}
                      {`${Math.round(elem.changePercent24Hr * 100) / 100} %`}
                    </Td>
                  </Tr>
                )

              })}

            </Tbody>

          </Table>
        </TableContainer>
      </div>



      <div className={Style.btn}>



        <Button colorScheme='teal' variant='outline' mt={"100px"} onClick={() => Setpage(page + 1)}>
          Load More
        </Button>



      </div>

    </div>
  )
}