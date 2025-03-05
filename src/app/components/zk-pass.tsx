"use client"
import { useState } from "react"
import TransgateConnect from "@zkpass/transgate-js-sdk"
import styled from "styled-components"

const FormGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem auto;
`

const Button = styled.button`
  min-width: 120px;
  height: 35px;
  line-height: 35px;
  padding: 0 18px;
  text-align: center;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  background: #c5ff4a;
  color: var(--color-black);
  cursor: pointer;
  &:active {
    border: 0.5px solid #898989;
    color: #0a0a0aab;
  }
`

const Title = styled.h2`
  color: #ffffff;
  text-align: center;
`

const appid1 = "4f8d5132-0680-4226-b7e0-7d9abb1b92f9"
const value1 = "ce77d8bbd3204b0c9f9205b6935bf53b"

export default function Home() {
  const [result, setResult] = useState<any>()

  const start = async () => {
    try {
      const connector = new TransgateConnect(appid1)
      const isAvailable = await connector.isTransgateAvailable()
      if (!isAvailable) {
        return alert("Please install zkPass TransGate")
      }

      const res = await connector.launch(value1)
      setResult(res)
    } catch (err) {
      alert(JSON.stringify(err))
      console.log("error", err)
    }
  }

  return (
    <main>
      
      <Title>Verify through zk proofs. </Title>
      <FormGrid>
        <Button onClick={start}>Verify your identity though twitter.</Button>
        {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
      </FormGrid>
    </main>
  )
}
